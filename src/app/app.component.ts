import {
  Populacao,
  Dinamica,
  Capacidade,
  Tempo,
  Sobrevida,
  IModel
} from "./data";
import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { timer } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Sistema para análise da evolução da covid";
  statesList = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PE",
    "PR",
    "PI",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO"
  ];

  populacao = new Populacao();
  dinamica = new Dinamica();
  capacidade = new Capacidade();
  tempos = new Tempo();
  death = new Sobrevida();
  passos: number;
  state = "SC";
  time: number;
  infectadosIniciais: number;
  play: boolean;

  // rawData = new DadosSC();
  graf1 = [];
  graf2 = [];
  refLines = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.reset();
  }
  changeState() {
    console.log(this.state);
  }
  reset() {
    this.populacao = new Populacao();
    this.dinamica = new Dinamica();
    this.capacidade = new Capacidade();
    this.tempos = new Tempo();
    this.death = new Sobrevida();
    this.passos = 7;
    this.time = 1;
    this.infectadosIniciais = 5;
    this.play = false;
    this.graf1 = [
      { name: "Dados - S.E.S", series: [] },
      { name: "Expostos", series: [] },
      { name: "Infectados", series: [] },
      { name: "Infectados Graves", series: [] },
      { name: "Total Infectados", series: [] }
    ];
    this.graf2 = [
      { name: "Hosp. Total", series: [] },
      { name: "Leito Comum", series: [] },
      { name: "UTI", series: [] },
      { name: "Ventilação Mecânica", series: [] },
      { name: "Leito Grave", series: [] },
      { name: "Mortos (SES)", series: [] },
      { name: "Mortos", series: [] }
    ];
    this.refLines = [
      { value: 0, name: "" },
      { value: this.capacidade.leito.value, name: "Leitos" },
      { value: this.capacidade.uti.value, name: "UTIs" },
      {
        value: this.capacidade.leito.value + this.capacidade.uti.value,
        name: "Leitos Totais"
      }
    ];
    this.dataService.sendGetRequest(this.state).subscribe((data: IModel) => {
      this.populacao.total.value = data.results[0].estimated_population_2019;
      data.results.reverse().map((v, t) => {
        this.graf1[0].series.push({ name: t + 5, value: v.confirmed });
        this.graf2[5].series.push({ name: t + 5, value: v.deaths });
      });
      this.updateChart();
    });
  }
  back() {}
  backStep() {
    this.graf1[1].series.pop();
    this.graf1[2].series.pop();
    this.graf1[2].series.pop();
    this.graf1[2].series.pop();
    this.graf1[2].series.pop();
  }

  changePlay() {
    // console.log("Comecei a simular");
    this.play = true;
    for (let i = 0; i < this.passos; i++) {
      this.makeStep();
    }
    this.play = false;
    // console.log("Terminei de simular");
  }
  makeStep() {
    if (this.time === 1) {
      this.refresh();
    }
    // console.log("comecei calc");
    this.calcStep();
    // console.log("comecei setData");
    this.setData(this.time);
    this.time += 1;
  }
  refresh() {
    this.time = 1;
    this.populacao.saudaveis.value =
      this.populacao.total.value - this.populacao.infectado.value;
    this.populacao.exposto.value = 0;
    this.populacao.infectadoGrave.value = 0;
    this.populacao.hospitalizadoLeito.value = 0;
    this.populacao.hospitalizadoUTI.value = 0;
    this.populacao.hospitalizadoVentilador.value = 0;
    this.populacao.hospitalizadoGrave.value = 0;
    this.populacao.mortos.value = 0;
    this.populacao.curados.value = 0;
    this.setData(this.time);
    this.time += 1;
  }
  calcStep() {
    const arg = {
      S: this.populacao.saudaveis.value,
      E: this.populacao.exposto.value,
      I: this.populacao.infectado.value,
      Ig: this.populacao.infectadoGrave.value,
      Hl: this.populacao.hospitalizadoLeito.value,
      Hu: this.populacao.hospitalizadoUTI.value,
      Hlv: this.populacao.hospitalizadoVentilador.value,
      Hlg: this.populacao.hospitalizadoGrave.value
    };

    this.populacao.saudaveis.value += this.dS(arg);
    this.populacao.exposto.value += this.dE(arg);
    this.populacao.infectado.value += this.dI(arg);
    this.populacao.infectadoGrave.value += this.dIg(arg);
    this.populacao.hospitalizadoLeito.value += this.dHl(arg);
    this.populacao.hospitalizadoUTI.value += this.dHu(arg);
    this.populacao.hospitalizadoVentilador.value += this.dHlv(arg);
    this.populacao.hospitalizadoGrave.value += this.dHlg(arg);
    this.populacao.mortos.value += this.dM(arg);
    console.log("dS= " + this.dS(arg));
    console.log("dE= " + this.dE(arg));
    console.log(
      "dI= " +
        this.dI(arg).toFixed(2) +
        "  I = " +
        this.populacao.infectado.value.toFixed(2)
    );
    console.log(
      "dIg= " +
        this.dIg(arg).toFixed(2) +
        "  Ig = " +
        this.populacao.infectadoGrave.value.toFixed(2)
    );
    console.log(
      "dHl= " +
        this.dHl(arg).toFixed(2) +
        "  Hl = " +
        this.populacao.hospitalizadoLeito.value.toFixed(2)
    );
    console.log(
      "dHu= " +
        this.dHu(arg).toFixed(2) +
        "  Hu = " +
        this.populacao.hospitalizadoUTI.value.toFixed(2)
    );
    console.log(
      "dHlv= " +
        this.dHlv(arg).toFixed(2) +
        "  Hlv = " +
        this.populacao.hospitalizadoVentilador.value.toFixed(2)
    );
    console.log("-------------------------");
  }
  setData(t: number) {
    let val = this.populacao.exposto.value;
    this.graf1[1].series.push({ name: t, value: val });
    //   { name: "Infectados", series: [] },
    //   { name: "Infectados Graves", series: [] },
    //   { name: "Total Infectados", series: [] }
    val = this.populacao.infectado.value;
    this.graf1[2].series.push({ name: t, value: val });
    val = this.populacao.infectadoGrave.value;
    this.graf1[3].series.push({ name: t, value: val });
    val = this.populacao.infectado.value + this.populacao.infectadoGrave.value;
    this.graf1[4].series.push({ name: t, value: val });
    val =
      this.populacao.hospitalizadoGrave.value +
      this.populacao.hospitalizadoLeito.value +
      this.populacao.hospitalizadoUTI.value +
      this.populacao.hospitalizadoVentilador.value;
    this.graf2[0].series.push({ name: t, value: val });
    this.graf2[1].series.push({
      name: t,
      value: this.populacao.hospitalizadoLeito.value
    });
    this.graf2[2].series.push({
      name: t,
      value: this.populacao.hospitalizadoUTI.value
    });
    this.graf2[3].series.push({
      name: t,
      value: this.populacao.hospitalizadoVentilador.value
    });
    this.graf2[4].series.push({
      name: t,
      value: this.populacao.hospitalizadoGrave.value
    });
    this.graf2[6].series.push({
      name: t,
      value: this.populacao.mortos.value
    });
    this.updateChart();
  }

  updateChart() {
    // console.log(this.graf1);
    // console.log(this.graf2);
    this.graf1 = [...this.graf1];
    this.graf2 = [...this.graf2];
  }

  setRefLines(a) {
    console.log(a);
    this.refLines = [
      { value: 0, name: "" },
      { value: this.capacidade.leito.value, name: "Leitos" },
      { value: this.capacidade.uti.value, name: "UTIs" },
      {
        value: this.capacidade.leito.value + this.capacidade.uti.value,
        name: "Leitos Totais"
      }
    ];
  }
  log() {
    console.log(this.capacidade);
  }

  ////////////////////////////////////////////////////////////
  ///// DERIVADAS DO PROBLEMA
  ///////////////////////////////////////////////
  dS(a) {
    return (
      -a.S *
      (this.dinamica.delta.value / 100) *
      ((this.dinamica.r0I.value * a.I) /
        (this.tempos.tInfc.value * this.populacao.total.value) +
        (this.dinamica.r0G.value * a.Ig) /
          (this.tempos.tInfcGrave.value * this.populacao.total.value))
    );
  }
  dE(a) {
    return (
      +a.S *
        (this.dinamica.delta.value / 100) *
        ((this.dinamica.r0I.value * a.I) /
          (this.tempos.tInfc.value * this.populacao.total.value) +
          (this.dinamica.r0G.value * a.Ig) /
            (this.tempos.tInfcGrave.value * this.populacao.total.value)) -
      a.E / this.tempos.tInc.value
    );
  }
  dI(a) {
    return (
      a.E / this.tempos.tInc.value -
      (a.I * this.death.infectado.cura) / (100 * this.tempos.tInfc.value) -
      (a.I * this.death.infectado.morte()) / (100 * this.tempos.tInfc.value)
    );
  }
  dIg(a) {
    const frac = Math.max(
      (a.Hl + a.Hlv + a.Hlg) / this.capacidade.leito.value,
      0
    );
    // console.log(frac);
    return (
      (a.I * this.death.infectado.morte()) / (100 * this.tempos.tInfc.value) -
      ((frac + (100 - this.dinamica.gamma.value) / 100) * a.Ig) /
        this.tempos.tInfcGrave.value -
      (1 - frac) * (this.dinamica.gamma.value / 100) * a.Ig
    );
  }
  dHl(a) {
    const frac = Math.max(
      (a.Hl + a.Hlv + a.Hlg) / this.capacidade.leito.value,
      0
    );

    return (
      (1 - frac) * (this.dinamica.gamma.value / 100) * a.Ig -
      a.Hl / this.tempos.tLeito.value +
      (this.death.hospitalizadoUTI.cura / (100 * this.tempos.tUti.value)) *
        a.Hu +
      (this.death.hospitalizadoGrave.cura / (100 * this.tempos.tLG.value)) *
        a.Hlg +
      (this.death.hospitalizadoVentilador.cura /
        (100 * this.tempos.tLV.value)) *
        a.Hlv
    );
  }
  dHu(a) {
    const frac = a.Hu / this.capacidade.uti.value;

    return (
      ((a.Hl * this.death.hospitalizadoLeito.morte()) /
        (100 * this.tempos.tLeito.value)) *
        (1 - frac) -
      a.Hu / this.tempos.tUti.value
    );
  }
  dHlv(a) {
    const fracU = a.Hu / this.capacidade.uti.value;
    const frac = a.Hlv / this.capacidade.ventilador.value;

    return (
      ((a.Hl * this.death.hospitalizadoLeito.morte()) /
        (100 * this.tempos.tLeito.value)) *
        fracU *
        (1 - frac) -
      a.Hlv / this.tempos.tLV.value
    );
  }
  dHlg(a) {
    const fracU = a.Hu / this.capacidade.uti.value;
    const frac = a.Hlv / this.capacidade.ventilador.value;

    return (
      ((a.Hl * this.death.hospitalizadoLeito.morte()) /
        (100 * this.tempos.tLeito.value)) *
        fracU *
        frac -
      a.Hlg / this.tempos.tLG.value
    );
  }
  dM(a) {
    const frac =
      (a.Hl + a.Hu + a.Hlv + a.Hlg) /
      (this.capacidade.leito.value + this.capacidade.uti.value);
    return (
      a.Ig *
        (this.death.infectadoGrave.morte() /
          (100 * this.tempos.tInfcGrave.value)) *
        (frac + (100 - this.dinamica.gamma.value) / 100) +
      (a.Hu * this.death.hospitalizadoUTI.morte()) /
        (100 * this.tempos.tUti.value) +
      (a.Hlv * this.death.hospitalizadoVentilador.morte()) /
        (100 * this.tempos.tLV.value) +
      (a.Hlg * this.death.hospitalizadoGrave.morte()) /
        (100 * this.tempos.tLG.value)
    );
  }
  dC(a) {
    const frac =
      (a.Hl + a.Hu + a.Hlv + a.Hlg) /
      (this.capacidade.leito.value + this.capacidade.uti.value);
    return (
      ((a.Ig * this.death.infectadoGrave.cura) /
        (100 * this.tempos.tInfcGrave.value)) *
        (frac + (100 - this.dinamica.gamma.value) / 100) +
      (a.Hl * this.death.hospitalizadoLeito.cura) /
        (100 * this.tempos.tUti.value)
    );
  }
}
