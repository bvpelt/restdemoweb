import {LinkRef} from './linkref';

export class AdresLinks {

  private _adresses: LinkRef;


  get adresses(): LinkRef {
    return this._adresses;
  }

  set adresses(value: LinkRef) {
    this._adresses = value;
  }
}
