import {Persoon} from './persoon';
import {AdresLinks} from './adreslinks';

export class Adres {

  public straatNaam: string;
  public huisNummer: string;
  public huisNummerToevoeging: number;
  public postCode: string;
  public woonPlaats: string;
  public telefoonNummer: string;
  public personen: Persoon[];
  public adresId: number;

  constructor(adresId, straatNaam, huisNummer, huisNummerToevoeging, postCode, woonPlaats, telefoonNummer, personen, links) {
    this.adresId = adresId;
    this.straatNaam = straatNaam;
    this.huisNummer = huisNummer;
    this.huisNummerToevoeging = huisNummerToevoeging;
    this.postCode = postCode;
    this.woonPlaats = woonPlaats;
    this.telefoonNummer = telefoonNummer;
    this.personen = personen;
    this._links = links;
  }

  private _links: AdresLinks;

  get links(): AdresLinks {
    return this._links;
  }

  set links(value: AdresLinks) {
    this._links = value;
  }

  /*
  public adresId: number;

    get adresId(): number {
    return this.adresId;
  }

  set adresId(value: number) {
    this.adresId = value;
  }

  public straatNaam: string;

  get straatNaam(): string {
    return this.straatNaam;
  }

  set straatNaam(value: string) {
    this.straatNaam = value;
  }

  public huisNummer: string;

  get huisNummer(): string {
    return this.huisNummer;
  }

  set huisNummer(value: string) {
    this.huisNummer = value;
  }

  public huisNummerToevoeging: number;

  get huisNummerToevoeging(): number {
    return this.huisNummerToevoeging;
  }

  set huisNummerToevoeging(value: number) {
    this.huisNummerToevoeging = value;
  }

  public postCode: string;

  get postCode(): string {
    return this.postCode;
  }

  set postCode(value: string) {
    this.postCode = value;
  }

  public woonPlaats: string;

  get woonPlaats(): string {
    return this.woonPlaats;
  }

  set woonPlaats(value: string) {
    this.woonPlaats = value;
  }

  public telefoonNummer: string;

  get telefoonNummer(): string {
    return this.telefoonNummer;
  }

  set telefoonNummer(value: string) {
    this.telefoonNummer = value;
  }

  public personen: Persoon[];
  get personen(): Persoon[] {
    return this.personen;
  }

  set personen(value: Persoon[]) {
    this.personen = value;
  }

  private _links: AdresLinks;
  get links(): AdresLinks {
    return this._links;
  }

  set links(value: AdresLinks) {
    this._links = value;
  }
  */
}
