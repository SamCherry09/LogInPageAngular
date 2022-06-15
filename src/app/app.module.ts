import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LogInModule } from './log-in/log-in.module';
// import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // LogInModule,
    //ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
