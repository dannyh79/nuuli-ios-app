import { render } from '@testing-library/react-native';

import Warmup from '../';

it(`renders without error`, () => {
  expect(() => render(<Warmup />)).not.toThrow();
});
