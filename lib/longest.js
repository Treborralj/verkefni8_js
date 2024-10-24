/**
 * Fall sem finnur lengsta orðið í gefnum streng og skilar því.
 * @param {String} str Strengur sem á að vinna með og finna lengsta orðið.
 * @returns {String} Skilar lengsta orði sem streng eða null ef fallið fær ekki streng sem inntak.
 */
import { isString, splitOnWhitespace } from './lib/helpers.js';

export function longest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str, ' ');
  
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.assert(
    longest('halló hæ') === 'halló',
    'longest: skilar lengsta orðinu',
  );
  console.assert(
    longest('halló halli') === 'halló',
    'longest: skilar fyrsta orðinu ef þau eru jafn löng',
  );
  console.assert(
    longest(null) === null,
    'longest: skilar null ef ekki er gefinn strengur',
  );
  console.assert(
    longest('') === '',
    'longest: skilar tómum streng ef tómur strengur er gefinn',
  );