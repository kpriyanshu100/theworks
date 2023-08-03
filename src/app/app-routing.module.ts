import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ResourcesComponent } from './resources/resources.component';
import { MembershipComponent } from './membership/membership.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'' , redirectTo: '/Shop', pathMatch: 'full' },
  {path:'Shop',component:ShopComponent},
  {path:'consultation',component:ConsultationComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'membership',component:MembershipComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
