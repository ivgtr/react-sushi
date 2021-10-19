<p align="center">
  <img width="150" src="https://user-images.githubusercontent.com/43836584/137727806-ba04fdcd-1b3b-42aa-9041-5a47400da988.png">
  <h3 align="center">react-sushi</h3>
  <p align="center">🍣 react sushi component</p>
</p>

[![npm version](https://img.shields.io/npm/v/react-sushi)](https://www.npmjs.com/package/react-sushi)
[![gh-pages CI](https://github.com/ivgtr/react-sushi/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/ivgtr/react-sushi/actions/workflows/deploy.yml)
[![Publish CI](https://github.com/ivgtr/react-sushi/actions/workflows/publish.yml/badge.svg)](https://github.com/ivgtr/react-sushi/actions/workflows/publish.yml)

## Demo

[Demo Site](https://ivgtr.github.io/react-sushi/)

## Usage

```
npm install react-sushi
```

```tsx
import React from "react";
import { Face, Neta, Sara, Shari } from "./components/Sushi";

export const Sushi = () => {
  return (
    <Sara>
      <Shari />
      <Face.Normal />
      <Neta.Salmon />
    </Sara>
  );
};
```

### Options

| Component | Choices  | Props             |
| :-------: | :------- | :---------------- |
|  `Sara`   |          | `zindex`, `scale` |
|  `Face`   | `Normal` |                   |
|  `Neta`   | `Salmon` |                   |

### そのうち

- サーモン以外のネタも増やします

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Twitter Follow](https://img.shields.io/twitter/follow/ivgtr?style=social)](https://twitter.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
