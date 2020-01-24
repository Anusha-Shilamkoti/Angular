import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }from './app.component';
import { NewComponent } from './new/new.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { MyServiceService } from './my-service.service';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    MyDirectiveDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
