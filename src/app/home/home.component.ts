import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public info;
  public latestLaunchInfo;

  constructor(private spacexService: SpaceXService, private router: Router) {
  }

  ngOnInit() {
    this.companyDetails();
    this.latestLaunch();
  }

  companyDetails() {
    this.spacexService.getCompanyDetails()
      .subscribe(data => {
        this.info = data;
      });
  }

  latestLaunch() {
    this.spacexService.getLatestLaunchDetails()
      .subscribe(data => {
        this.latestLaunchInfo = data;
      });
  }

  onSelect(sitename) {
    this.router.navigate(['/launchpad'], {queryParams: {id: sitename}});
  }

  onSelectL(rocketid) {
    this.router.navigate(['/shuttle'], {queryParams: {id: rocketid}});
  }

}
