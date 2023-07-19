# epubcheck-assets

> the https://github.com/w3c/epubcheck release assets published on npm.

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
