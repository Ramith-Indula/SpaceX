import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shuttle',
  templateUrl: './shuttle.component.html',
  styleUrls: ['./shuttle.component.css']
})
export class ShuttleComponent implements OnInit {

  public shuttle;
  constructor(private spacexService: SpaceXService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
    this.getShuttleById(params.id);
    });
  }

  getShuttleById(id) {
    this.spacexService.getShuttle(id).subscribe(data => {
      this.shuttle = data;
    });
  }
}
