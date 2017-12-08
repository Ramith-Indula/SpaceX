import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpaceXService {

  constructor(private http: HttpClient) {

  }

  getCompanyDetails() {
    return this.http.get('https://api.spacexdata.com/v2/info');
  }
}
