import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public pastLaunches;

  constructor(private spacexService: SpaceXService) {
  }

  ngOnInit() {
    this.getPastLaunches();
  }

  getPastLaunches() {
    this.spacexService.getAllPastLaunches().subscribe(data => {
      this.pastLaunches = data;
    });
  }
}
