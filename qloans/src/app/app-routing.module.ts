import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutqloansComponent } from './aboutqloans/aboutqloans.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { LoginComponent } from './login/login.component';
import { PaynowComponent } from './paynow/paynow.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'services',component:ServicesComponent},
  {path:'applynow',component:ApplynowComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'aboutqloans',component:AboutqloansComponent},
  {path:'faq',component:FaqComponent},
  {path:'loanstatus',component:LoanstatusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'paynow',component:PaynowComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
