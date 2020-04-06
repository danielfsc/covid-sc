import { DadosSC } from "./../dados_secretaria";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"]
})
export class ChartsComponent implements OnInit {
  @Input() graf1;
  @Input() graf2;
  @Input() refLines;
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = "Dias após o primeiro caso";
  yAxisLabel = "População";
  constructor() {}

  ngOnInit() {}
}
