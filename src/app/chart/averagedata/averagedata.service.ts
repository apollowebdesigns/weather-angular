import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class AveragedataService {

  constructor(private http: HttpClient) { }

  dataUrl = 'https://us-central1-userddata.cloudfunctions.net/helloWorld/dailyaverage';

  getAverageData() {
    return this.http.get(this.dataUrl);
  }
}
