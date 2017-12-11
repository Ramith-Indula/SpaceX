import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public pastLaunches;

  constructor(private router: Router, private spacexService: SpaceXService) {
  }

  ngOnInit() {
    this.getPastLaunches();
  }

  getPastLaunches() {
    this.spacexService.getAllPastLaunches().subscribe(data => {
      this.pastLaunches = data;
    });
  }
  onSelect(sitename) {
    this.router.navigate(['/launchpad'], {queryParams: {id: sitename}});
  }

  onSelectL(rocketid) {
    this.router.navigate(['/shuttle'], {queryParams: {id: rocketid}});
  }
}
