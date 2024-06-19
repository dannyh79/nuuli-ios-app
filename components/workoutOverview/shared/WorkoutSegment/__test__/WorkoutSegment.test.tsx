import { ImageURISource } from 'react-native';
import { render } from '@testing-library/react-native';
import { WorkoutSegContent } from '../../../types';
import WorkoutSegment from '../';

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
          imageUrl: require('@/assets/images/influencer.png') as ImageURISource,
        },
        {
          title: 'Barbell Lunge (Right)',
          reps: [6, 8],
          imageUrl: require('@/assets/images/influencer.png') as ImageURISource,
        },
      ],
    },
    {
      rounds: 2,
      items: [
        {
          title: 'Sumo Deadlift',
          reps: 10,
          imageUrl: require('@/assets/images/influencer.png') as ImageURISource,
        },
      ],
    },
  ],
} as WorkoutSegContent;

describe(`required <WorkoutSegment />`, () => {
  it(`renders without error`, () => {
    expect(() =>
      render(<WorkoutSegment title="Warm-Up" content={content} />),
    ).not.toThrow();
  });
});

describe(`optional <WorkoutSegment />`, () => {
  it(`renders without error`, () => {
    expect(() =>
      render(
        <WorkoutSegment
          title="Warm-Up"
          content={content}
          optional
          isEnabled={true}
          onToggle={() => {}}
        />,
      ),
    ).not.toThrow();
  });
});
