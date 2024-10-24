/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";
import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { vowels } from "./lib/vowels.js";
import { consonants } from "./lib/consonants.js";
import { palindrome } from "./lib/palindrome.js";
import { reverse } from "./lib/reverse.js";

const test = isString("hæ");
console.log("test er strengur?", test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const textareaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");

/**
 *
 * @param {*} event
 */
function submitHandler(event) {
  event.preventDefault();
  const { target } = event;
  const textareaElement = target.querySelector("textarea");
  const lengsta = longest(textareaElement.value);
  const stysta = shortest(textareaElement.value);
  const sherhljod = vowels(textareaElement.value);
  const samhljod = consonants(textareaElement.value);
  const palin = palindrome(textareaElement.value);
  const ofugt = reverse(textareaElement.value);

  const inputElement = document.querySelector(".input");
  if (inputElement) {
    inputElement.textContent = textareaElement.value;
  }
  const outputElement = document.querySelector(".output");
  if (outputElement) {
    outputElement.classList.remove("hidden");
  }
  const longestElement = document.querySelector(".longest");
  if (longestElement) {
    longestElement.textContent = lengsta;
  }
  const shortestElement = document.querySelector(".shortest");
  if (shortestElement) {
    shortestElement.textContent = stysta;
  }
  const vowelsElement = document.querySelector(".vowels");
  if (vowelsElement) {
    vowelsElement.textContent = sherhljod;
  }
  const consonantsElement = document.querySelector(".consonants");
  if (consonantsElement) {
    consonantsElement.textContent = samhljod;
  }
  const palindromeElement = document.querySelector(".palindrome");
  if (palindromeElement) {
    if (palin === true) {
      palindromeElement.textContent = "";
    } else {
      palindromeElement.textContent = "ekki";
    }
  }
  const reversedElement = document.querySelector(".reversed");
  if (reversedElement) {
    reversedElement.textContent = ofugt;
  }
}

/**
 * Fallið hreinsar textarea
 */
function resetHandler() {
  /**
   * Fallið felur aftur textan sem á að vera falinn
   * @param {Element} el
   */
  function addHidden(el) {
    el.classList.add("hidden");
  }
  const outputElement = document.querySelector(".output");
  if (outputElement) {
    addHidden(outputElement);
  }
  textareaElement.value = "";
}

formElement.addEventListener("submit", submitHandler);
formElement.addEventListener("reset", resetHandler);
