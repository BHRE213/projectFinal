import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path:'countactus',
  component:ContactUsComponent

},
{
  path:'aboutus',
  component:AboutUsComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'auth',
  loadChildren:() =>AuthModule

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
