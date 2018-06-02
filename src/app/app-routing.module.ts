import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AdresesComponent} from './adreses/adreses.component';
import {AdresDetailComponent} from './adres-detail/adres-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: AdresDetailComponent},
  {path: 'adreses', component: AdresesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
