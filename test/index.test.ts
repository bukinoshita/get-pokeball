import { getPokeball } from '../source'
import { Pokeballs } from '../source/types'

test('get pokeball', () => {
  const pokeball = getPokeball(Pokeballs.Pokeball)
  expect(pokeball).toMatchSnapshot()
})

test('get greatball', () => {
  const pokeball = getPokeball(Pokeballs.Greatball)
  expect(pokeball).toMatchSnapshot()
})

test('get ultraball', () => {
  const pokeball = getPokeball(Pokeballs.Ultraball)
  expect(pokeball).toMatchSnapshot()
})

test('get safariball', () => {
  const pokeball = getPokeball(Pokeballs.Safariball)
  expect(pokeball).toMatchSnapshot()
})

test('get masterball', () => {
  const pokeball = getPokeball(Pokeballs.Masterball)
  expect(pokeball).toMatchSnapshot()
})
