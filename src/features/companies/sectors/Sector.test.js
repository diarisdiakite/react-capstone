import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../../store';
import Sector from './Sectors';

describe('RocketsList component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Sector />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
