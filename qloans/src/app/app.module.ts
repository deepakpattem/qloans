import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AboutqloansComponent } from './aboutqloans/aboutqloans.component';
import { FaqComponent } from './faq/faq.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaynowComponent } from './paynow/paynow.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ServicesComponent,
    ApplynowComponent,
    ChangepasswordComponent,
    AboutqloansComponent,
    FaqComponent,
    LoanstatusComponent,
    ContactusComponent,
    PaynowComponent
    

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
