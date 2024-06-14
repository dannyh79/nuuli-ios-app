import { render } from '@testing-library/react-native';

import Info from '../';

it(`renders without error`, () => {
  expect(() => render(<Info />)).not.toThrow();
});
