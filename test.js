'use strict'

import test from 'ava'
import m from './'

test('pokeball', t => {
  t.is(m('pokeball').slug, 'pokeball')
  t.is(m('poke ball').slug, 'pokeball')
})

test('greatball', t => {
  t.is(m('greatball').slug, 'greatball')
  t.is(m('great ball').slug, 'greatball')
})

test('ultraball', t => {
  t.is(m('ultraball').slug, 'ultraball')
  t.is(m('ultra ball').slug, 'ultraball')
})

test('safariball', t => {
  t.is(m('safariball').slug, 'safariball')
  t.is(m('safari ball').slug, 'safariball')
})

test('masterball', t => {
  t.is(m('masterball').slug, 'masterball')
  t.is(m('master ball').slug, 'masterball')
})
