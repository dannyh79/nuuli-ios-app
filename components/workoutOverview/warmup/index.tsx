import * as React from 'react';
import { ImageURISource } from 'react-native';
import WorkoutSegment from '../shared/WorkoutSegment';

export const Warmup = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const toggleSwitch = () => setIsEnabled((isEnabled) => !isEnabled);

  return (
    <WorkoutSegment
      title="Warm-Up"
      content={content}
      optional
      isEnabled={isEnabled}
      onToggle={toggleSwitch}
    />
  );
};

const stubImage = require('@/assets/images/exercise.png') as ImageURISource;
const content = {
  minutes: 5,
  circuits: [
    {
      type: 'Superset',
      rounds: 2,
      items: [
        {
          title: 'Barbell Lunge (Left)',
          reps: [6, 8],
          imageUrl: stubImage,
        },
        {
          title: 'Barbell Lunge (Right)',
          reps: [6, 8],
          imageUrl: stubImage,
        },
      ],
    },
    {
      type: 'Circuit',
      rounds: 2,
      items: [
        {
          title: 'Sumo Deadlift',
          reps: 10,
          imageUrl: stubImage,
        },
      ],
    },
  ],
};

export default Warmup;
