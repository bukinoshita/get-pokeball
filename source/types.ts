export enum Pokeballs {
  Pokeball = 'pokeball',
  Greatball = 'greatball',
  Ultraball = 'ultraball',
  Safariball = 'safariball',
  Masterball = 'masterball',
}

export type PokeballName =
  | Pokeballs.Pokeball
  | Pokeballs.Greatball
  | Pokeballs.Ultraball
  | Pokeballs.Safariball
  | Pokeballs.Masterball
