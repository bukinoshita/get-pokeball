'use strict'

module.exports = pokeball => {
  return new Promise((resolve, reject) => {
    switch (pokeball) {
      case 'pokeball':
      case 'poke ball':
        resolve({
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
        })

      case 'greatball':
      case 'great ball':
        resolve({
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
        })

      case 'ultraball':
      case 'ultra ball':
        resolve({
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
        })

      case 'safariball':
      case 'safari ball':
        resolve({
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
        })

      case 'masterball':
      case 'master ball':
        resolve({
          name: 'Master ball',
          price: {
            buy: 'cannot be bought',
            sell: 'cannot be sold'
          },
          slug: 'masterball'
        })

      default:
        reject(new TypeError('Pokeball not found'))
    }
  })
}
