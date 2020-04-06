import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-population",
  templateUrl: "./config-population.component.html",
  styleUrls: ["./config-population.component.css"],
})
export class ConfigPopulationComponent implements OnInit {
  @Input() populacao: any[];
  constructor() {}

  log() {
    console.log(this.populacao);
  }
  ngOnInit() {}
}
