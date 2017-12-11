import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {

  public launchPadDetails;

  constructor(private spacexService: SpaceXService) {
  }

  ngOnInit() {
    this.getAllLaunchPadDetails();
  }

  getAllLaunchPadDetails() {
    this.spacexService.getLaunchPadDetails().subscribe(data => {
      this.launchPadDetails = data;
    });

  }
}
