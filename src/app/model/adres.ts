export class Adres {
  constructor(adresId, straatNaam, huisNummer, huisNummerToevoeging, postCode, woonPlaats, telefoonNummer) {
    this._adresId = adresId;
    this._straatNaam = straatNaam;
    this._huisNummer = huisNummer;
    this._huisNummerToevoeging = huisNummerToevoeging;
    this._postCode = postCode;
    this._woonPlaats = woonPlaats;
    this._telefoonNummer = telefoonNummer;
  }

  private _adresId: number;

  get adresId(): number {
    return this._adresId;
  }

  set adresId(value: number) {
    this._adresId = value;
  }

  private _straatNaam: string;

  get straatNaam(): string {
    return this._straatNaam;
  }

  set straatNaam(value: string) {
    this._straatNaam = value;
  }

  private _huisNummer: string;

  get huisNummer(): string {
    return this._huisNummer;
  }

  set huisNummer(value: string) {
    this._huisNummer = value;
  }

  private _huisNummerToevoeging: number;

  get huisNummerToevoeging(): number {
    return this._huisNummerToevoeging;
  }

  set huisNummerToevoeging(value: number) {
    this._huisNummerToevoeging = value;
  }

  private _postCode: string;

  get postCode(): string {
    return this._postCode;
  }

  set postCode(value: string) {
    this._postCode = value;
  }

  private _woonPlaats: string;

  get woonPlaats(): string {
    return this._woonPlaats;
  }

  set woonPlaats(value: string) {
    this._woonPlaats = value;
  }

  private _telefoonNummer: string;

  get telefoonNummer(): string {
    return this._telefoonNummer;
  }

  set telefoonNummer(value: string) {
    this._telefoonNummer = value;
  }
}
