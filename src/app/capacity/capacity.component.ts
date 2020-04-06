import { Capacidade } from "./../data";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-capacity",
  templateUrl: "./capacity.component.html",
  styleUrls: ["./capacity.component.css"]
})
export class CapacityComponent implements OnInit {
  @Input() capacidade: Capacidade[];

  constructor() {}

  ngOnInit() {}
}
