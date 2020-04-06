import { Dinamica } from "./../data";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dinamic",
  templateUrl: "./dinamic.component.html",
  styleUrls: ["./dinamic.component.css"]
})
export class DinamicComponent implements OnInit {
  @Input() dinamica: Dinamica[];

  constructor() {}

  ngOnInit() {}
}
