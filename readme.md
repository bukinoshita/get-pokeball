# get-pokeball [![Build Status](https://travis-ci.org/bukinoshita/get-pokeball.svg?branch=master)](https://travis-ci.org/bukinoshita/get-pokeball)

> Get pokeball information


## Install

```
$ npm install --save get-pokeball
```


## Usage
```js
const getPokeball = require('get-pokeball')

getPokeball('ultra ball')
/*
{
  name: 'Ultra ball',
  slug: 'ultraball',
  price: {
    buy: 1200,
    sell: 600
  },
  value: {
    f: 12,
    d: 150
  }
}
*/
```


## API

### getPokeball(name)

returns a `promise`

#### name

Type: `string`<br/>
Options: `pokeball`, `masterball`, `greatball`, `ultraball`,  `safariball`<br/>
Required

Pokeball's name


## Related

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
