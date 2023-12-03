import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';
import { schema } from './schema';

export enum Country {
  Afghanistan = 'Afghanistan',
  AlandIslands = '\u00c5land Islands',
  Albania = 'Albania',
  Algeria = 'Algeria',
  AmericanSamoa = 'American Samoa',
  Andorra = 'Andorra',
  Angola = 'Angola',
  Anguilla = 'Anguilla',
  Antarctica = 'Antarctica',
  AntiguaBarbuda = 'Antigua & Barbuda',
  Argentina = 'Argentina',
  Armenia = 'Armenia',
  Aruba = 'Aruba',
  Australia = 'Australia',
  Austria = 'Austria',
  Azerbaijan = 'Azerbaijan',
  Bahamas = 'Bahamas',
  Bahrain = 'Bahrain',
  Bangladesh = 'Bangladesh',
  Barbados = 'Barbados',
  Belarus = 'Belarus',
  Belgium = 'Belgium',
  Belize = 'Belize',
  Benin = 'Benin',
  Bermuda = 'Bermuda',
  Bhutan = 'Bhutan',
  Bolivia = 'Bolivia',
  BosniaHerzegovina = 'Bosnia & Herzegovina',
  Botswana = 'Botswana',
  BouvetIsland = 'Bouvet Island',
  Brazil = 'Brazil',
  BritishIndianOceanTerritory = 'British Indian Ocean Territory',
  BritishVirginIslands = 'British Virgin Islands',
  Brunei = 'Brunei',
  Bulgaria = 'Bulgaria',
  BurkinaFaso = 'Burkina Faso',
  Burundi = 'Burundi',
  Cambodia = 'Cambodia',
  Cameroon = 'Cameroon',
  Canada = 'Canada',
  CapeVerde = 'Cape Verde',
  CaribbeanNetherlands = 'Caribbean Netherlands',
  CaymanIslands = 'Cayman Islands',
  CentralAfricanRepublic = 'Central African Republic',
  Chad = 'Chad',
  Chile = 'Chile',
  China = 'China',
  ChristmasIsland = 'Christmas Island',
  CocosKeelingIslands = 'Cocos (Keeling) Islands',
  Colombia = 'Colombia',
  Comoros = 'Comoros',
  CongoBrazzaville = 'Congo - Brazzaville',
  CongoKinshasa = 'Congo - Kinshasa',
  CookIslands = 'Cook Islands',
  CostaRica = 'Costa Rica',
  CoteDIvoire = 'C\u00f4te d\u2019Ivoire',
  Croatia = 'Croatia',
  Cuba = 'Cuba',
  Curacao = 'Cura\u00e7ao',
  Cyprus = 'Cyprus',
  Czechia = 'Czechia',
  Denmark = 'Denmark',
  Djibouti = 'Djibouti',
  Dominica = 'Dominica',
  DominicanRepublic = 'Dominican Republic',
  Ecuador = 'Ecuador',
  Egypt = 'Egypt',
  ElSalvador = 'El Salvador',
  EquatorialGuinea = 'Equatorial Guinea',
  Eritrea = 'Eritrea',
  Estonia = 'Estonia',
  Eswatini = 'Eswatini',
  Ethiopia = 'Ethiopia',
  FalklandIslands = 'Falkland Islands',
  FaroeIslands = 'Faroe Islands',
  Fiji = 'Fiji',
  Finland = 'Finland',
  France = 'France',
  FrenchGuiana = 'French Guiana',
  FrenchPolynesia = 'French Polynesia',
  FrenchSouthernTerritories = 'French Southern Territories',
  Gabon = 'Gabon',
  Gambia = 'Gambia',
  Georgia = 'Georgia',
  Germany = 'Germany',
  Ghana = 'Ghana',
  Gibraltar = 'Gibraltar',
  Greece = 'Greece',
  Greenland = 'Greenland',
  Grenada = 'Grenada',
  Guadeloupe = 'Guadeloupe',
  Guam = 'Guam',
  Guatemala = 'Guatemala',
  Guernsey = 'Guernsey',
  Guinea = 'Guinea',
  GuineaBissau = 'Guinea-Bissau',
  Guyana = 'Guyana',
  Haiti = 'Haiti',
  HeardMcDonaldIslands = 'Heard & McDonald Islands',
  Honduras = 'Honduras',
  HongKongSARChina = 'Hong Kong SAR China',
  Hungary = 'Hungary',
  Iceland = 'Iceland',
  India = 'India',
  Indonesia = 'Indonesia',
  Iran = 'Iran',
  Iraq = 'Iraq',
  Ireland = 'Ireland',
  IsleofMan = 'Isle of Man',
  Israel = 'Israel',
  Italy = 'Italy',
  Jamaica = 'Jamaica',
  Japan = 'Japan',
  Jersey = 'Jersey',
  Jordan = 'Jordan',
  Kazakhstan = 'Kazakhstan',
  Kenya = 'Kenya',
  Kiribati = 'Kiribati',
  Kuwait = 'Kuwait',
  Kyrgyzstan = 'Kyrgyzstan',
  Laos = 'Laos',
  Latvia = 'Latvia',
  Lebanon = 'Lebanon',
  Lesotho = 'Lesotho',
  Liberia = 'Liberia',
  Libya = 'Libya',
  Liechtenstein = 'Liechtenstein',
  Lithuania = 'Lithuania',
  Luxembourg = 'Luxembourg',
  MacaoSARChina = 'Macao SAR China',
  Madagascar = 'Madagascar',
  Malawi = 'Malawi',
  Malaysia = 'Malaysia',
  Maldives = 'Maldives',
  Mali = 'Mali',
  Malta = 'Malta',
  MarshallIslands = 'Marshall Islands',
  Martinique = 'Martinique',
  Mauritania = 'Mauritania',
  Mauritius = 'Mauritius',
  Mayotte = 'Mayotte',
  Mexico = 'Mexico',
  Micronesia = 'Micronesia',
  Moldova = 'Moldova',
  Monaco = 'Monaco',
  Mongolia = 'Mongolia',
  Montenegro = 'Montenegro',
  Montserrat = 'Montserrat',
  Morocco = 'Morocco',
  Mozambique = 'Mozambique',
  MyanmarBurma = 'Myanmar (Burma)',
  Namibia = 'Namibia',
  Nauru = 'Nauru',
  Nepal = 'Nepal',
  Netherlands = 'Netherlands',
  NewCaledonia = 'New Caledonia',
  NewZealand = 'New Zealand',
  Nicaragua = 'Nicaragua',
  Niger = 'Niger',
  Nigeria = 'Nigeria',
  Niue = 'Niue',
  NorfolkIsland = 'Norfolk Island',
  NorthKorea = 'North Korea',
  NorthMacedonia = 'North Macedonia',
  NorthernMarianaIslands = 'Northern Mariana Islands',
  Norway = 'Norway',
  Oman = 'Oman',
  Pakistan = 'Pakistan',
  Palau = 'Palau',
  PalestinianTerritories = 'Palestinian Territories',
  Panama = 'Panama',
  PapuaNewGuinea = 'Papua New Guinea',
  Paraguay = 'Paraguay',
  Peru = 'Peru',
  Philippines = 'Philippines',
  PitcairnIslands = 'Pitcairn Islands',
  Poland = 'Poland',
  Portugal = 'Portugal',
  PuertoRico = 'Puerto Rico',
  Qatar = 'Qatar',
  Reunion = 'R\u00e9union',
  Romania = 'Romania',
  Russia = 'Russia',
  Rwanda = 'Rwanda',
  Samoa = 'Samoa',
  SanMarino = 'San Marino',
  SeoTomePredncipe = 'S\u00e3o Tom\u00e9 & Pr\u00edncipe',
  SaudiArabia = 'Saudi Arabia',
  Senegal = 'Senegal',
  Serbia = 'Serbia',
  Seychelles = 'Seychelles',
  SierraLeone = 'Sierra Leone',
  Singapore = 'Singapore',
  SintMaarten = 'Sint Maarten',
  Slovakia = 'Slovakia',
  Slovenia = 'Slovenia',
  SolomonIslands = 'Solomon Islands',
  Somalia = 'Somalia',
  SouthAfrica = 'South Africa',
  SouthGeorgiaSouthSandwichIslands = 'South Georgia & South Sandwich Islands',
  SouthKorea = 'South Korea',
  SouthSudan = 'South Sudan',
  Spain = 'Spain',
  SriLanka = 'Sri Lanka',
  StBarthelemy = 'St. Barth\u00e9lemy',
  StHelena = 'St. Helena',
  StKittsNevis = 'St. Kitts & Nevis',
  StLucia = 'St. Lucia',
  StMartin = 'St. Martin',
  StPierreMiquelon = 'St. Pierre & Miquelon',
  StVincentGrenadines = 'St. Vincent & Grenadines',
  Sudan = 'Sudan',
  Suriname = 'Suriname',
  SvalbardJanMayen = 'Svalbard & Jan Mayen',
  Sweden = 'Sweden',
  Switzerland = 'Switzerland',
  Syria = 'Syria',
  Taiwan = 'Taiwan',
  Tajikistan = 'Tajikistan',
  Tanzania = 'Tanzania',
  Thailand = 'Thailand',
  TimorLeste = 'Timor-Leste',
  Togo = 'Togo',
  Tokelau = 'Tokelau',
  Tonga = 'Tonga',
  TrinidadTobago = 'Trinidad & Tobago',
  Tunisia = 'Tunisia',
  Turkey = 'Turkey',
  Turkmenistan = 'Turkmenistan',
  TurksCaicosIslands = 'Turks & Caicos Islands',
  Tuvalu = 'Tuvalu',
  USOutlyingIslands = 'U.S. Outlying Islands',
  USVirginIslands = 'U.S. Virgin Islands',
  Uganda = 'Uganda',
  Ukraine = 'Ukraine',
  UnitedArabEmirates = 'United Arab Emirates',
  UnitedKingdom = 'United Kingdom',
  UnitedStates = 'United States',
  Uruguay = 'Uruguay',
  Uzbekistan = 'Uzbekistan',
  Vanuatu = 'Vanuatu',
  VaticanCity = 'Vatican City',
  Venezuela = 'Venezuela',
  Vietnam = 'Vietnam',
  WallisFutuna = 'Wallis & Futuna',
  WesternSahara = 'Western Sahara',
  Yemen = 'Yemen',
  Zambia = 'Zambia',
}

type PersonFormProps = yup.InferType<typeof schema>;

export interface ControlledProps {
  form: UseFormReturn<PersonFormProps>;
}

export interface UncontrolledPasswordProps {
  passwordRef: React.MutableRefObject<null>;
  confirmPasswordRef: React.MutableRefObject<null>;
  passwordError: string;
  confirmPasswordError: string;
}

export interface UncontrolledFieldProps {
  fieldRef: React.MutableRefObject<null>;
  id: string;
  type: string;
  text: string;
  error: string;
}

export interface UncontrolledAutocompleteProps {
  countryRef: React.MutableRefObject<null>;
  countryError: string;
}

export interface UncontrolledGenderProps {
  genderRef: React.MutableRefObject<null>;
}

export interface UncontrolledUploadProps {
  uriImageRef: React.MutableRefObject<null>;
  uriImageErrorMsg: string;
  imageName: string;
}

export interface UncontrolledConditionsAcceptedProps {
  conditionsAcceptedRef: React.MutableRefObject<null>;
  error: string;
}

export interface ControlledFieldProps {
  type: string;
  id: string;
  text: string;
  error?: string;
  registerField: UseFormRegisterReturn<string>;
}

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface PersonForm {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  conditionsAccepted: boolean;
  gender: string;
  uriImage: FileList;
  country: string;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  image: string;
  country: string;
  isActive: boolean;
}

export interface PersonProps {
  person: Person;
}
