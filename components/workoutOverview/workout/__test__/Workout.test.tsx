import { render } from '@testing-library/react-native';

import Workout from '../';

it(`renders without error`, () => {
  expect(() => render(<Workout />)).not.toThrow();
});
