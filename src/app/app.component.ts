import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from './flight.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sap-angular-odata';

  baseURL = '/sap/opu/odata/SAP/Z001_SRV/FlightSet?$top=2&$format=json'
  //user = <Flight>{ id: 1, text: 'Hello' };

  constructor(private http: HttpClient) { }

  callServer() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    // ports:
    // :3000 - to call nodejs server
    // :3001 - to call aspnet core server
    //this.http.post<Message>(this.baseURL, JSON.stringify(this.user), {
    //  headers: headers
    //})
    //  .subscribe(data => {
    //    console.log(data);
    //  });

    this.http.get<Flight>(this.baseURL).subscribe(data => {
      console.log(data)
    });
  }
}
