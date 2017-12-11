import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';

@Component({
  selector: 'app-shuttles',
  templateUrl: './shuttles.component.html',
  styleUrls: ['./shuttles.component.css']
})
export class ShuttlesComponent implements OnInit {

  public shuttleInfo;

  constructor(private spacexService: SpaceXService) {

  }

  ngOnInit() {
    this.getAllShuttleDetails();
  }

  getAllShuttleDetails() {
    this.spacexService.getShuttleDetails()
      .subscribe(data => {
      this.shuttleInfo = data;
      console.log(data);
    });
  }
}
