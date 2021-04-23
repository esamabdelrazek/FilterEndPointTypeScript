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
    debugger
    this.http.get("https://api.publicapis.org/categories",{ headers:new HttpHeaders({  'Accept': '*' })}).subscribe(
      (result : any) =>{
        this.res  = (result as string[]).filter(f=>f.startsWith(inputStr))
        console.log(this.res);
      }
    )
  }
}
