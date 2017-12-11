import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {

  public launchPadDetails;

  constructor(private router: Router, private spacexService: SpaceXService) {
  }

  ngOnInit() {
    this.getAllLaunchPadDetails();
  }

  getAllLaunchPadDetails() {
    this.spacexService.getLaunchPadDetails().subscribe(data => {
      this.launchPadDetails = data;
    });
  }

  onSelect(sitename) {
    this.router.navigate(['/launchpad'], {queryParams: {id: sitename}});
  }
}
