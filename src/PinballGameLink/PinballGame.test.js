import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://voidmaelstrom.github.io/phaser-projects/Pinball/index.html">Pinball</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});