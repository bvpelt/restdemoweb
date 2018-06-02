import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Adres} from '../model/adres';
import {AdresService} from '../adres.service';

@Component({
  selector: 'app-adres-detail',
  templateUrl: './adres-detail.component.html',
  styleUrls: ['./adres-detail.component.css']
})
export class AdresDetailComponent implements OnInit {

  @Input() adres: Adres;

  constructor(private route: ActivatedRoute, private adresService: AdresService, private location: Location) {
  }

  ngOnInit() {
    this.getAdres();
  }

  save(): void {
    this.adresService.updateAdres(this.adres)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getAdres(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.adresService.getAdres(id)
      .subscribe(adres => this.adres = adres);
  }
}
