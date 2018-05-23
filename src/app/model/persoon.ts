export class Persoon {
  private _personId: number;

  get personId(): number {
    return this._personId;
  }

  set personId(value: number) {
    this._personId = value;
  }

  private _roepNaam: string;

  get roepNaam(): string {
    return this._roepNaam;
  }

  set roepNaam(value: string) {
    this._roepNaam = value;
  }

  private _voorNamen: string;

  get voorNamen(): string {
    return this._voorNamen;
  }

  set voorNamen(value: string) {
    this._voorNamen = value;
  }

  private _tussenVoegsel: string;

  get tussenVoegsel(): string {
    return this._tussenVoegsel;
  }

  set tussenVoegsel(value: string) {
    this._tussenVoegsel = value;
  }

  private _achterNaam: string;

  get achterNaam(): string {
    return this._achterNaam;
  }

  set achterNaam(value: string) {
    this._achterNaam = value;
  }

  private _geboorteDatum: string;

  get geboorteDatum(): string {
    return this._geboorteDatum;
  }

  set geboorteDatum(value: string) {
    this._geboorteDatum = value;
  }

  private _kerkelijkeStaat: string;

  get kerkelijkeStaat(): string {
    return this._kerkelijkeStaat;
  }

  set kerkelijkeStaat(value: string) {
    this._kerkelijkeStaat = value;
  }

  private _emailAdres: string;

  get emailAdres(): string {
    return this._emailAdres;
  }

  set emailAdres(value: string) {
    this._emailAdres = value;
  }

  private _mobielNummer: string;

  get mobielNummer(): string {
    return this._mobielNummer;
  }

  set mobielNummer(value: string) {
    this._mobielNummer = value;
  }
}
