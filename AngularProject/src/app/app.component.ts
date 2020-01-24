import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
 
  //todaydate = new Date();

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable=true;
  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
}
changemonths(event) {
  alert("Changed month from the Dropdown");
  console.log(event);
}
todaydate;
/*constructor(private myservice: MyServiceService) {}
ngOnInit() {
 this.todaydate = this.myservice.showTodayDate();
}*/
constructor(private http: Http) { }
ngOnInit() {
   this.http.get("http://jsonplaceholder.typicode.com/users").
   map.get((Response) => Response.json()).
   subscribe((data) => console.log(data))
}
  
}

