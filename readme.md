# get-pokeball [![Build Status](https://travis-ci.org/bukinoshita/get-pokeball.svg?branch=master)](https://travis-ci.org/bukinoshita/get-pokeball)

> Get pokeball information

## Install

```
$ yarn add get-pokeball
```

## Usage

```js
import { getPokeball } from 'get-pokeball'

getPokeball('ultraball')
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

#### name

Type: `string`<br/>
Options: [Pokeballs](https://github.com/bukinoshita/get-pokeball/blob/master/source/types.ts)<br/>
Required

Pokeball's name

## Related

- [pokemon-game](https://github.com/bukinoshita/pokemon-game) — Pokemon game — Get 'em all
- [pokedex-api](https://github.com/bukinoshita/pokedex-api) — Pokedex API
- [pokemon-catch-probability](https://github.com/bukinoshita/pokemon-catch-probability) — Check probabilty to catch a pokemon
- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
