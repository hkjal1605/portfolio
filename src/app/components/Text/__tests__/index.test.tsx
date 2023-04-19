import * as React from 'react';
import { render } from '@testing-library/react';

import { Text } from '..';

describe('<Text  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Text />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
