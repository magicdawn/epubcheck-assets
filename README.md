# epubcheck-assets

> the https://github.com/w3c/epubcheck release assets published on npm.

[![Build Status](https://img.shields.io/github/actions/workflow/status/magicdawn/epubcheck-assets/ci.yml?style=flat-square&branch=main)](https://github.com/magicdawn/epubcheck-assets/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/epubcheck-assets.svg?style=flat-square)](https://www.npmjs.com/package/epubcheck-assets)
[![npm downloads](https://img.shields.io/npm/dm/epubcheck-assets.svg?style=flat-square)](https://www.npmjs.com/package/epubcheck-assets)
[![npm license](https://img.shields.io/npm/l/epubcheck-assets.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
$ pnpm add epubcheck-assets
```

## API

```js
import jarpath from 'epubcheck-assets'
import { execSync } from 'child_process'
execSync(`java -jar '${jarpath}' -h`)
```

## License

Copyright © 2007 Adobe Systems Incorporated
Copyright © 2008 IDPF
Copyright © 2017 W3C (MIT, ERCIM, Keio, Beihang)
