import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Output() yearChangeEvent = new EventEmitter<string>();
  @Output() launchChangeEvent = new EventEmitter<string>();
  @Output() landingChangeEvent = new EventEmitter<string>();

  // yearValue:any;
  year = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  constructor() {}

  ngOnInit() {}

  onYearChange(yearValue) {
    this.yearChangeEvent.emit(yearValue);
  }
  onLandingChange(landingValue) {
    this.landingChangeEvent.emit(landingValue);
  }
  onLaunchChange(launchValue) {
    this.launchChangeEvent.emit(launchValue);
  }
}
