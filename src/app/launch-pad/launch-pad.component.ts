import { Component, OnInit } from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-launch-pad',
  templateUrl: './launch-pad.component.html',
  styleUrls: ['./launch-pad.component.css']
})
export class LaunchPadComponent implements OnInit {

  public launchPad;
  constructor(private spacexService: SpaceXService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
     this.getLaunchPadById(params.id);
    });
  }

  getLaunchPadById(id) {
  this.spacexService.getLaunchPad(id).subscribe(data => {
    this.launchPad = data;
  });
  }
}
