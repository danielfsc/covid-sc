import { Dinamica, Populacao, Tempo, Capacidade, Sobrevida } from "./../data";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.css"],
})
export class ControlComponent implements OnInit {
  @Input() dinamica: Dinamica;
  @Input() populacao: Populacao;
  @Input() tempos: Tempo;
  @Input() capacidade: Capacidade;
  @Input() death: Sobrevida;

  constructor() {}

  ngOnInit() {}
}
