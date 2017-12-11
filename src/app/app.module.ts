import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ShuttlesComponent} from './shuttles/shuttles.component';
import {LaunchpadsComponent} from './launchpads/launchpads.component';
import {LaunchesComponent} from './launches/launches.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SpaceXService} from './service/space-x.service';
import { ShuttleComponent } from './shuttle/shuttle.component';
import { LaunchPadComponent } from './launch-pad/launch-pad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShuttlesComponent,
    LaunchpadsComponent,
    LaunchesComponent,
    ShuttleComponent,
    LaunchPadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'shuttles',
        component: ShuttlesComponent
      },
      {
        path: 'launchpads',
        component: LaunchpadsComponent
      },
      {
        path: 'launchpad',
        component: LaunchPadComponent
      },
      {
        path: 'launches',
        component: LaunchesComponent
      },{
        path: 'shuttle',
        component: ShuttleComponent
      },
      {
        path: '**',
        component: HomeComponent
      },
      ]
    )
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
