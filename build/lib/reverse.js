/**
 * Fall sem tekur inn streng of snýr honum við.
 * @param {String} str Strengru sem á að snúa við.
 * @returns {String} Skilar str snúðum við ef str er strengur. Annar skilar fallið null.
 */

import { isString } from "./helpers.js";

export function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  return str.split("").reverse().join("");
}
console.assert(
  reverse(null) === null,
  "reverse: skilar tómum streng ef ekki er gefinn strengur"
);
console.assert(
  reverse("") === "",
  "reverse: snúinn tómi strengurinn er tómi strengurinn"
);
console.assert(reverse("hello") === "olleh", "reverse: snýr við streng");
