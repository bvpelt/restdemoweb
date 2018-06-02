import {Component, OnInit} from '@angular/core';
import {Adres} from '../model/adres';
import {AdresData} from '../model/adresdata';
import {AdresService} from '../adres.service';
import {Persoon} from '../model/persoon';

@Component({
  selector: 'app-adreses',
  templateUrl: './adreses.component.html',
  styleUrls: ['./adreses.component.css']
})
export class AdresesComponent implements OnInit {

  constructor(private adresService: AdresService) {
  }

  private _adres: Adres;

  get adres(): Adres {
    return this._adres;
  }

  set adres(value: Adres) {
    this._adres = value;
  }

  private _adressen: Adres[];

  get adressen(): Adres[] {
    return this._adressen;
  }

  set adressen(value: Adres[]) {
    this._adressen = value;
  }

  private _adresdata: AdresData;

  get adresdata(): AdresData {
    return this._adresdata;
  }

  set adresdata(value: AdresData) {
    this._adresdata = value;
  }

  private _selectedAdres: Adres;

  get selectedAdres(): Adres {
    return this._selectedAdres;
  }

  set selectedAdres(value: Adres) {
    this._selectedAdres = value;
  }

  ngOnInit() {
    this._selectedAdres = null;
    this.getAdresses();
  }

  onSelect(adres: Adres): void {
    this._selectedAdres = adres;
  }

  getAdresses(): void {
    this.adresService.getAdresses()
      .subscribe(adresdata => this._adresdata = adresdata);
  }


  add(straatNaam: string, huisNummer: number, huisNummerToevoeging: string, postCode: string, woonPlaats: string, telefoonNummer: string): void {
    var msg = '';
    straatNaam = straatNaam.trim();
    huisNummerToevoeging = huisNummerToevoeging.trim();
    postCode = postCode.trim();
    woonPlaats = woonPlaats.trim();
    telefoonNummer = telefoonNummer.trim();
    if (!straatNaam) {
      msg += 'StraatNaam verplicht ';
    }
    if (!postCode) {
      msg += 'Postcode verplicht ';
    }
    if (!woonPlaats) {
      msg += 'Woonplaats verplicht';
    }
    if (msg) {
      console.log('Error: ' + msg);
      return;
    }
    var newPersonen: Persoon[] = new Array();
    var newAdres: Adres = new Adres(null, straatNaam, huisNummer, huisNummerToevoeging, postCode, woonPlaats, telefoonNummer, newPersonen, null);

    this.adresService.addAdres(newAdres)
      .subscribe(adres => {
        console.log('Added adres: ' + adres);
        this.adresdata.adres.push(adres);
      });
  }

  delete(adres: Adres): void {
    console.log('debug, deleta adres: ' + adres);
    this.adresdata.adres = this.adresdata.adres.filter(a => a !== adres);
    this.adresService.deleteAdres(adres).subscribe();
  }
}
