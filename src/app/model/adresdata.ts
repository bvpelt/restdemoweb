import {Adres} from './adres';
import {SelfLinks} from './selflinks';

export class AdresData {
  private _adres: Adres[];

  get adres(): Adres[] {
    return this._adres;
  }

  set adres(value: Adres[]) {
    this._adres = value;
  }

  private _links: SelfLinks;

  get links(): SelfLinks {
    return this._links;
  }

  set links(value: SelfLinks) {
    this._links = value;
  }

  public addAdres(adres: Adres): void {
    this._adres.push(adres);
  }
}
