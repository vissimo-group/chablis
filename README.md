<p align="center">
  <h3 align="center">Chablis</h3>

  <p align="center">
    A mobile first frontend framework made with wine.
</p>

<br>

![circleCI](https://circleci.com/gh/Evino/chablis.svg?style=shield)

It is still in early development

## Examples

We have all components listed on our documentation. Here is the first one to get you started:

```jsx
import React from 'react';
import { Button } from 'chablis';

class HelloButton extends React.Component {
  render() {
    return <Button>Hello World</Button>;
  }
}

export default HelloButton;
```

## Installation

```bash
yarn add chablis
```

But all commands run with `npm` as well.

## Debug

```bash
yarn start
```

This will start the storybook at development mode and exposes it on `localhost:9001`

## Testing

All of the chablis tests are written with jest and enzyme. Just run

```bash
yarn test
```

## License

Licensed under [MIT](LICENSE). Enjoy.
