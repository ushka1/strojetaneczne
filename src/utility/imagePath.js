export function idToName(id) {
  const hashTable = {
    0: 'koszula_body_oddychajaca',
    1: 'koszula_body_lycra',
    2: 'koszula_body_turniejowa_biala',
    3: 'koszula_body_turniejowa_biala_druga',
    4: 'koszula_frakowa_biala',
    5: 'koszula_body_turniejowa_czarna',
    6: 'koszula_body_lacina',
    7: 'koszula_tunika_lacina',
    8: 'koszula_body_golf_taniec_towarzyski',
    9: 'kamizelka_meska_taniec_towarzyski',
    10: 'kamizelka_meska_frakowa_taniec_towarzyski',
    11: 'marynarka_frak_taniec_towarzyski',
    12: 'spodnie_meskie_taniec_towarzyski',
    13: 'sukienka_taniec_towarzyski_koronka',
    14: 'sukienka_taniec_towarzyski_lycra',
    15: 'sukienka_taniec_towarzyski_aksamit',
    16: 'sukienka_taniec_towarzyski_krynolina',
    17: 'sukienka_taniec_towarzyski_koronka_krynolina',
  };

  if (!(id in hashTable)) {
    return null;
  }

  return hashTable[id];
}

export function nameToId(name) {
  const hashTable = {
    koszula_body_oddychajaca: 0,
    koszula_body_lycra: 1,
    koszula_body_turniejowa_biala: 2,
    koszula_body_turniejowa_biala_druga: 3,
    koszula_frakowa_biala: 4,
    koszula_body_turniejowa_czarna: 5,
    koszula_body_lacina: 6,
    koszula_tunika_lacina: 7,
    koszula_body_golf_taniec_towarzyski: 8,
    kamizelka_meska_taniec_towarzyski: 9,
    kamizelka_meska_frakowa_taniec_towarzyski: 10,
    marynarka_frak_taniec_towarzyski: 11,
    spodnie_meskie_taniec_towarzyski: 12,
    sukienka_taniec_towarzyski_koronka: 13,
    sukienka_taniec_towarzyski_lycra: 14,
    sukienka_taniec_towarzyski_aksamit: 15,
    sukienka_taniec_towarzyski_krynolina: 16,
    sukienka_taniec_towarzyski_koronka_krynolina: 17,
  };

  if (!(name in hashTable)) {
    return null;
  }

  return hashTable[name];
}

function getLengthsById(id) {
  const hashTable = {
    0: 4,
    1: 4,
    2: 4,
    3: 2,
    4: 2,
    5: 3,
    6: 15,
    7: 6,
    8: 2,
    9: 2,
    10: 2,
    11: 4,
    12: 5,
    13: 8,
    14: 3,
    15: 4,
    16: 6,
    17: 3,
  };

  if (!(id in hashTable)) {
    return null;
  }

  return hashTable[id];
}

export function getImagesById(id) {
  const len = getLengthsById(id);
  const res = [];

  for (let i = 0; i < len; i++) {
    const elm = getImagePath(id, i).src;
    res.push(elm);
  }

  return res;
}

export function getImagePath(id, idx) {
  const name = idToName(id);
  const src = `/static/media/items/${id + 1}/${name}_${idx + 1}.jpg`;

  return {
    src,
    alt: name,
  };
}

export function getSliderImages() {
  const res = [];
  for (let i = 0; i <= 8; i++) {
    res.push(`/static/media/slider/stroj_taneczny_${i}.jpg`);
  }
  return res;
}
