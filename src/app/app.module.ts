import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdresDetailComponent} from './adres-detail/adres-detail.component';
import {AdresesComponent} from './adreses/adreses.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PersoonComponent} from './persoon/persoon.component';
import {PersoonDetailComponent} from './persoon-detail/persoon-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AdresesComponent,
    AdresDetailComponent,
    MessagesComponent,
    PersoonComponent,
    PersoonDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
