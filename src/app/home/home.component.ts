import {Component, OnInit} from '@angular/core';
import {SpaceXService} from '../service/space-x.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public info;

  constructor(private spacexService: SpaceXService) {
  }

  ngOnInit() {

    this.spacexService.getCompanyDetails().subscribe(data => {
      this.info = data;
      console.log(data);
    });


  }

}
