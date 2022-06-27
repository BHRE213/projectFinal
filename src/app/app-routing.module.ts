import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AuthorizationGuard } from './authorization.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path:'contactus',
  component:ContactUsComponent

},

{
  path:'',
  component:HomeComponent
},
{
  path:'auth',
  loadChildren:() =>AuthModule

},
{
  path:'admin',
  loadChildren:() =>AdminModule,
 canActivate:[AuthorizationGuard]

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
