import * as React from 'react';
import { render } from '@testing-library/react';

import { Hero } from '..';

describe('<Hero  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Hero />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
