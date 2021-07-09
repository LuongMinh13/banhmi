import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'reservation', component: ReservationComponent},
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'chef', component: ChefComponent},
  {path: 'review', component: ReviewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
