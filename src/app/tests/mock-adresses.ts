import {Adres} from '../model/adres';

export const Adresses: Adres[] = [
  new Adres(1, 'Franjezwam', 3, null, '3902GA', 'Renkum', '031822233', null, null),
  new Adres(2, 'Franjezwam', 4, null, '3903GA', 'Renkum', '031822233', null, null),
  new Adres(3, 'Kerkewijk', 1, null, '3901GA', 'Renkum', '031822233', null, null),
  new Adres(4, 'Kerkewijk', 5, null, '3905GA', 'Renkum', '031822233', null, null),
  new Adres(5, 'Zandstraat', 7, null, '3907GA', 'Renkum', '031822233', null, null),
  new Adres(6, 'Zandstraat', 8, null, '3906VA', 'Renkum', '031822233', null, null),
  new Adres(7, 'Spoorlaan', 2, null, '3905RA', 'Renkum', '031822233', null, null),
  new Adres(8, 'Spoorlaan', 4, null, '3904GA', 'Renkum', '031822233', null, null),
  new Adres(9, 'Goede Rede', 7, null, '3907GX', 'Renkum', '031822233', null, null),
  new Adres(10, 'Goede Rede', 1, null, '3901AG', 'Renkum', '031822233', null, null)
];


const Adresses01 = {
  'adres': [{
    'adresId': 1,
    'straatNaam': 'Jan Steenlaan',
    'huisNummer': 33,
    'huisNummerToevoeging': null,
    'postCode': '3904XL',
    'woonPlaats': 'VEENENDAAL',
    'telefoonNummer': '0318540607',
    'personen': [{
      'personId': 1,
      'roepNaam': 'Judith',
      'voorNamen': 'Judith Jeanette Yvonne',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer - Aalderink',
      'geboorteDatum': '1973-11-18',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@versatel.nl',
      'mobielNummer': '06-10292776'
    }, {
      'personId': 2,
      'roepNaam': 'Meijert Jan',
      'voorNamen': 'Meijert Jan',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '1968-09-01',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@outlook.com',
      'mobielNummer': ''
    }, {
      'personId': 3,
      'roepNaam': 'Aron',
      'voorNamen': 'Aron',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2001-06-08',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }],
    '_links': {'adresses': {'href': 'http://localhost:8080/adresses/1'}}
  }, {
    'adresId': 2,
    'straatNaam': 'Tweespan',
    'huisNummer': 38,
    'huisNummerToevoeging': null,
    'postCode': '3902GH',
    'woonPlaats': 'VEENENDAAL',
    'telefoonNummer': '0318501275',
    'personen': [{
      'personId': 4,
      'roepNaam': 'Niels',
      'voorNamen': 'Niels Meijert',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2003-12-30',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }, {
      'personId': 5,
      'roepNaam': 'Anniek',
      'voorNamen': 'Judith Anniek',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2008-11-11',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }, {
      'personId': 6,
      'roepNaam': 'Judith',
      'voorNamen': 'Judith Jeanette Yvonne',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer - Aalderink',
      'geboorteDatum': '1973-11-18',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@versatel.nl',
      'mobielNummer': '06-10292776'
    }],
    '_links': {'adresses': {'href': 'http://localhost:8080/adresses/2'}}
  }], '_links': {'self': {'href': 'http://localhost:8080/adresses/'}}
};


const adres02 = {
  'adres': [{
    'adresId': 1,
    'straatNaam': 'Jan Steenlaan',
    'huisNummer': 33,
    'huisNummerToevoeging': null,
    'postCode': '3904XL',
    'woonPlaats': 'VEENENDAAL',
    'telefoonNummer': '0318540607',
    'personen': [{
      'personId': 1,
      'roepNaam': 'Judith',
      'voorNamen': 'Judith Jeanette Yvonne',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer - Aalderink',
      'geboorteDatum': '1973-11-18',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@versatel.nl',
      'mobielNummer': '06-10292776'
    }, {
      'personId': 2,
      'roepNaam': 'Meijert Jan',
      'voorNamen': 'Meijert Jan',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '1968-09-01',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@outlook.com',
      'mobielNummer': ''
    }, {
      'personId': 3,
      'roepNaam': 'Aron',
      'voorNamen': 'Aron',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2001-06-08',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }],
    '_links': {'adresses': {'href': 'http://localhost:8080/adresses/1'}}
  }, {
    'adresId': 2,
    'straatNaam': 'Tweespan',
    'huisNummer': 38,
    'huisNummerToevoeging': null,
    'postCode': '3902GH',
    'woonPlaats': 'VEENENDAAL',
    'telefoonNummer': '0318501275',
    'personen': [{
      'personId': 4,
      'roepNaam': 'Niels',
      'voorNamen': 'Niels Meijert',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2003-12-30',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }, {
      'personId': 5,
      'roepNaam': 'Anniek',
      'voorNamen': 'Judith Anniek',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer',
      'geboorteDatum': '2008-11-11',
      'kerkelijkeStaat': 'DOOPLID',
      'emailAdres': '',
      'mobielNummer': ''
    }, {
      'personId': 6,
      'roepNaam': 'Judith',
      'voorNamen': 'Judith Jeanette Yvonne',
      'tussenVoegsel': '',
      'achterNaam': 'Bremer - Aalderink',
      'geboorteDatum': '1973-11-18',
      'kerkelijkeStaat': 'BELIJDEND',
      'emailAdres': 'jmjbremer@versatel.nl',
      'mobielNummer': '06-10292776'
    }],
    '_links': {'adresses': {'href': 'http://localhost:8080/adresses/2'}}
  }], '_links': {'self': {'href': 'http://localhost:8080/adresses/'}}
};


