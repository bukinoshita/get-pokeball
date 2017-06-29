'use strict'

module.exports = pokeball => {
  switch (pokeball) {
    case 'pokeball':
    case 'poke ball':
      return {
        name: 'Poké ball',
        price: {
          buy: 200,
          sell: 100
        },
        slug: 'pokeball',
        value: {
          f: 12,
          d: 255
        }
      }

    case 'greatball':
    case 'great ball':
      return {
        name: 'Great ball',
        price: {
          buy: 600,
          sell: 300
        },
        slug: 'greatball',
        value: {
          f: 8,
          d: 200
        }
      }

    case 'ultraball':
    case 'ultra ball':
      return {
        name: 'Ultra ball',
        price: {
          buy: 1200,
          sell: 600
        },
        slug: 'ultraball',
        value: {
          f: 12,
          d: 150
        }
      }

    case 'safariball':
    case 'safari ball':
      return {
        name: 'Safari ball',
        price: {
          buy: 'cannot be bought',
          sell: 'cannot be sold'
        },
        slug: 'safariball',
        value: {
          f: 12,
          d: 150
        }
      }

    case 'masterball':
    case 'master ball':
      return {
        name: 'Master ball',
        price: {
          buy: 'cannot be bought',
          sell: 'cannot be sold'
        },
        slug: 'masterball'
      }

    default:
      return {
        name: 'Poké ball',
        price: {
          buy: 200,
          sell: 100
        },
        slug: 'pokeball',
        value: {
          f: 12,
          d: 255
        }
      }
  }
}
