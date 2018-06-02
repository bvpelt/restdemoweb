import {Component, OnInit} from '@angular/core';
import {AdresData} from '../model/adresdata';
import {AdresService} from '../adres.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  adresdata: AdresData = null;

  constructor(private adresService: AdresService) {
  }

  ngOnInit() {
    this.getAdresses();
  }

  getAdresses(): void {
    this.adresService.getAdresses()
      .subscribe(adresdata => this.adresdata = adresdata);
  }
}
