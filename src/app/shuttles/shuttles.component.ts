import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shuttles',
  templateUrl: './shuttles.component.html',
  styleUrls: ['./shuttles.component.css']
})
export class ShuttlesComponent implements OnInit {

  public shuttleInfo;

  constructor( private spacexService: SpaceXService, private router: Router) {

  }

  ngOnInit() {
    this.getAllShuttleDetails();
  }

  getAllShuttleDetails() {
    this.spacexService.getShuttleDetails()
      .subscribe(data => {
        this.shuttleInfo = data;
      });
  }

  onSelect(rocketid) {
    this.router.navigate(['/shuttle'], {queryParams: {id: rocketid}});
  }
}
