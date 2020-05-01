import { Pokeballs } from './types'

export const pokeInfo = {
  [Pokeballs.Pokeball]: {
    name: 'Poké ball',
    price: {
      buy: 200,
      sell: 100,
    },
    slug: 'pokeball',
    value: {
      f: 12,
      d: 255,
    },
  },
  [Pokeballs.Greatball]: {
    name: 'Great ball',
    price: {
      buy: 600,
      sell: 300,
    },
    slug: 'greatball',
    value: {
      f: 8,
      d: 200,
    },
  },
  [Pokeballs.Ultraball]: {
    name: 'Ultra ball',
    price: {
      buy: 1200,
      sell: 600,
    },
    slug: 'ultraball',
    value: {
      f: 12,
      d: 150,
    },
  },
  [Pokeballs.Safariball]: {
    name: 'Safari ball',
    price: {
      buy: 'cannot be bought',
      sell: 'cannot be sold',
    },
    slug: 'safariball',
    value: {
      f: 12,
      d: 150,
    },
  },
  [Pokeballs.Masterball]: {
    name: 'Master ball',
    price: {
      buy: 'cannot be bought',
      sell: 'cannot be sold',
    },
    slug: 'masterball',
  },
}
