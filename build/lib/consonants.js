/**
 * Fallið tekur inn streng of skilar fjölda samhljóða í strengnum.
 * @param {String} str Fallið tekur inn streng.
 * @returns {int} Skilar fjölda samhljóða.
 */
import {countGivenCharactersInString} from './lib/countGivenChar.js';
import {CONSONANTS} from './lib/breytur.js';

export function consonants(str) {
    return countGivenCharactersInString(str, CONSONANTS);
  }
  console.assert(
    consonants('halló') === 3,
    'consonants: skilar fjölda samhljóða í streng',
  );
  console.assert(consonants('') === 0, 'consonants: skilar 0 ef tómur strengur');
  console.assert(
    consonants(null) === 0,
    'consonants: skilar 0 ef ekki er gefinn strengur',
  );