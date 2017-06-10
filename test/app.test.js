import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

describe('smoke test', () => {
  it('renders with no errors', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
