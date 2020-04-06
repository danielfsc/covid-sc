import { Tempo } from "./../data";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-times",
  templateUrl: "./times.component.html",
  styleUrls: ["./times.component.css"]
})
export class TimesComponent implements OnInit {
  @Input() tempos: Tempo[];
  constructor() {}

  ngOnInit() {}
}
