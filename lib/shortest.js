/**
 * Fall sem finnur stysta orðið í gefnum streng og skilar því.
 * @param {String} str Strengur sem á að vinna með og finna stysta orðið.
 * @returns {String} Skilar stysta orði sem streng eða null ef fallið fær ekki streng sem inntak.
 */

import { isString, split } from "./helpers.js";

export function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str, " ");

  let shortestWord = "";
  for (const word of words) {
    if (shortestWord === "" || word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.assert(shortest("halló hæ") === "hæ", "shortest: skilar stysta orðinu");
console.assert(
  shortest("halló halli") === "halló",
  "shortest: skilar fyrsta orðinu ef þau eru jafn löng"
);
console.assert(
  shortest(null) === null,
  "shortest: skilar null ef ekki er gefinn strengur"
);
console.assert(
  shortest("") === "",
  "shortest: skilar tómum streng ef tómur strengur er gefinn"
);
