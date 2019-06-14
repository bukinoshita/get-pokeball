// Packages
import test from 'ava'

// Root
import m from '.'

test('pokeball', async t => {
  const pokeball = await m('pokeball')
  t.is(pokeball.slug, 'pokeball')
})

test('greatball', async t => {
  const greatball = await m('greatball')
  t.is(greatball.slug, 'greatball')
})

test('ultraball', async t => {
  const ultraball = await m('ultraball')
  t.is(ultraball.slug, 'ultraball')
})

test('safariball', async t => {
  const safariball = await m('safariball')
  t.is(safariball.slug, 'safariball')
})

test('masterball', async t => {
  const masterball = await m('masterball')
  t.is(masterball.slug, 'masterball')
})
