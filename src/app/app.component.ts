import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SpaceService } from "./services/space.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "space-x";
  errorMessage: string;
  allSpacePrograms: any = [];
  dataToDisplay: any = [];
  yearValue: number;
  launchValue: boolean;
  landingValue: boolean;
  yearFlag: boolean = false;
  launchFlag: boolean = false;

  constructor(private spaceService: SpaceService, private router: Router) {}
  ngOnInit() {
    this.getAllSpacePrograms();
    // this.router.navigate([`${link.split('?')[0]}`], { queryParams: {id: 37, username: 'jimmy'}});
  }
  yearChangeEventHandler($event: any) {
    this.yearFlag = true;
    this.yearValue = $event;
    if (this.launchFlag) {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return (
          Number(data.launch_year) === this.yearValue &&
          data.launch_success === this.launchFlag
        );
      });
    } else {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return Number(data.launch_year) === this.yearValue;
      });
    }
    console.log("2", this.dataToDisplay);
    // this.router.navigateByUrl("/page?id=37&username=jimmy");
  }
  landingChangeEventHandler($event: any) {
    this.launchFlag = true;
    this.landingValue = $event;
    if (this.yearFlag) {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return (
          Number(data.launch_year) === this.yearValue &&
          data.launch_success === this.landingValue
        );
      });
    } else {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return data.launch_success === this.landingValue;
      });
      console.log("3", this.dataToDisplay);
    }
  }
  launchChangeEventHandler($event: any) {
    this.launchFlag = true;
    this.launchValue = $event;
    if (this.yearFlag) {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return (
          Number(data.launch_year) === this.yearValue &&
          data.launch_success === this.launchValue
        );
      });
    } else {
      this.dataToDisplay = this.allSpacePrograms.filter((data) => {
        return data.launch_success === this.launchValue;
      });
    }
    console.log("4", this.dataToDisplay);
  }

  getAllSpacePrograms() {
    this.spaceService.getAllPrograms().subscribe(
      (programs) => {
        this.allSpacePrograms = programs;
        this.dataToDisplay = this.allSpacePrograms;
      },

      (error) => (this.errorMessage = <any>error)
    );
  }
}
