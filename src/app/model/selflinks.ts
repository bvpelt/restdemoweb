import {LinkRef} from './linkref';

export class SelfLinks {

  private _self: LinkRef;


  get self(): LinkRef {
    return this._self;
  }

  set self(value: LinkRef) {
    this._self = value;
  }
}
