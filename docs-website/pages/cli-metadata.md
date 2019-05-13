---
title: Extract metadata
section: cli
chapter: Command-line interface
permalink: /cli/metadata

order: 104
---

Retrieve document metadata of a Sketch file with `sketchtool`. This includes information about the Sketch version used to save to save the file, document format version as well as the pages and artboards of the Sketch document.

```sh
sketchtool metadata /path/to/document.sketch
```

### Output

The JSON data output is identical to the raw metadata of the [file bundle](/file-format).

```json
{
  "commit": "399b83655ed261b257875cf8e762efa1a649509e",
  "pagesAndArtboards": {
    "9C1FA15B-CBEB-4448-ABFF-628D7FE1A537": {
      "name": "Page 1",
      "artboards": {}
    }
  },
  "version": 118,
  "fonts": [],
  "compatibilityVersion": 99,
  "app": "com.bohemiancoding.sketch3",
  "autosaved": 0,
  "variant": "NONAPPSTORE",
  "created": {
    "commit": "399b83655ed261b257875cf8e762efa1a649509e",
    "appVersion": "54.1",
    "build": 76490,
    "app": "com.bohemiancoding.sketch3",
    "compatibilityVersion": 99,
    "version": 118,
    "variant": "NONAPPSTORE"
  },
  "saveHistory": ["NONAPPSTORE.76490"],
  "appVersion": "54.1",
  "build": 76490
}
```