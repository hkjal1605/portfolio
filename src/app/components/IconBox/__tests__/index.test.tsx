import * as React from 'react';
import { render } from '@testing-library/react';

import { IconBox } from '..';

describe('<IconBox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<IconBox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
