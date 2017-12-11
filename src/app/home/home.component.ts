import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public info;
  public latestLaunchInfo;

  constructor(private spacexService: SpaceXService) {
  }

  ngOnInit() {
    this.companyDetails();
    this.latestLaunch();
  }

  companyDetails() {
    this.spacexService.getCompanyDetails()
      .subscribe(data => {
        this.info = data;
        console.log(data);
      });
  }

  latestLaunch() {
    this.spacexService.getLatestLaunchDetails()
      .subscribe(data => {
        this.latestLaunchInfo = data;
        console.log(data);
      });
  }


}
