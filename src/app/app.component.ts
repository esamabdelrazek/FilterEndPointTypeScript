import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilterEndPoint';
  res : string[] = [];
  constructor(private http: HttpClient) {

     this.filterEndPoint("An");
  }

  filterEndPoint(inputStr : string){
    const url = new URL('https://api.publicapis.org/categories');

    const headers = {
        'Accept': '*'
    };
    
    (async function () {
        debugger;
      const response = await fetch( url.toString(), {headers} );
      const data = await response.json();
      console.log(data.filter(f=>f.startsWith(inputStr)));
      this.res  = data.filter(f=>f.startsWith(inputStr));
    })()
  }
}
