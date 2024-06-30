import { render } from '@testing-library/react-native';

import WorkoutNotFound from '../WorkoutNotFound';

it(`renders without error`, () => {
  expect(() => render(<WorkoutNotFound />)).not.toThrow();
});
