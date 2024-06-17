import * as React from 'react';
import { ImageURISource } from 'react-native';
import WorkoutSegment from '../shared/WorkoutSegment';

export const Workout = () => (
  <WorkoutSegment title="Workout" content={content} />
);

const stubImage = require('@/assets/images/influencer.png') as ImageURISource;
const content = {
  minutes: 60,
  circuits: [
    {
      type: 'Superset',
      rounds: 3,
      items: [
        {
          title: 'Cable Kickback (Left)',
          reps: 15,
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Cable Kickback (Right)',
          reps: 15,
          imageUrl: stubImage,
          swappable: true,
        },
      ],
    },
    {
      type: 'Circuit',
      rounds: 4,
      items: [
        {
          title: 'Sumo Deadlift',
          reps: [10, 12],
          weight: 90,
          imageUrl: stubImage,
          swappable: true,
        },
      ],
    },
    {
      type: 'Circuit',
      rounds: 4,
      items: [
        {
          title: 'Dumbbell Shoulder Press',
          reps: 4,
          weight: [18, 25],
          imageUrl: stubImage,
          swappable: true,
        },
      ],
    },
    {
      type: 'Triset',
      rounds: 4,
      items: [
        {
          title: 'Single Arm Cable Row (Left)',
          reps: [10, 12],
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Single Arm Cable Row (Right)',
          reps: [10, 12],
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Cable Seated Row',
          reps: [6, 8],
          imageUrl: stubImage,
          swappable: true,
        },
      ],
    },
    {
      type: 'Circuit',
      rounds: 1,
      items: [
        {
          title: 'Dumbbel Jump Squat',
          reps: 1,
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Berbell Lunge',
          reps: 1,
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Plank With Stability Ball',
          seconds: 20,
          imageUrl: stubImage,
          swappable: true,
        },
        {
          title: 'Glute Bridge Hold',
          seconds: 40,
          imageUrl: stubImage,
          swappable: true,
        },
      ],
    },
  ],
};

export default Workout;
