import { PokeballName } from './types'
import { pokeInfo } from './pokeinfo'

export function getPokeball(name: PokeballName) {
  return pokeInfo[name]
}
