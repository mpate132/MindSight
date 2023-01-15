const fakeName = [
  ElectricDog,
  PetiteMole,
  ApatheticMoose,
  SonicHare,
  GentleKitten,
  LeanKangaroo,
  SmartQuagga,
  WetSnake,
  TanOpassum,
  TackyPlatyPus,
  Elfinlguana,
  NaughtyMoose,
  WhistlingSheep,
  GenerousKoala,
  CantankerousCamel,
  SweetMandril,
];

let randomIndex = Math.floor(Math.random() * fakeName.length);
export let randomElement = fakeName[randomIndex];
