import { ImageURISource } from 'react-native';
import { WorkoutContent } from '../../types';
import { GetWorkoutResponse } from '../../queries';

// NOTE: Irregular plural forms are not supported
export const toLocale = (
  count: number | string,
  word: string,
  isPlural: boolean,
) => `${count} ${word}${isPlural ? 's' : ''}`;

export const toFormattedWorkout = ({
  workout,
}: GetWorkoutResponse): WorkoutContent => ({
  ...workout,
  warmup: {
    ...stubWarmup,
    minutes: workout.warmup.length / 60,
  },
  workout: stubWorkout,
});

export const stubWorkoutContentId = 1;

const stubWorkoutImage =
  require('@/assets/images/exercise.png') as ImageURISource;

const stubWarmup = {
  minutes: 5,
  circuits: [
    {
      type: 'Superset',
      rounds: 2,
      items: [
        {
          title: 'Barbell Lunge (Left)',
          reps: [6, 8],
          imageUrl: stubWorkoutImage,
        },
        {
          title: 'Barbell Lunge (Right)',
          reps: [6, 8],
          imageUrl: stubWorkoutImage,
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
          imageUrl: stubWorkoutImage,
        },
      ],
    },
  ],
};

const stubWorkout = {
  minutes: 60,
  circuits: [
    {
      type: 'Superset',
      rounds: 3,
      items: [
        {
          title: 'Cable Kickback (Left)',
          reps: 15,
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Cable Kickback (Right)',
          reps: 15,
          imageUrl: stubWorkoutImage,
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
          imageUrl: stubWorkoutImage,
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
          imageUrl: stubWorkoutImage,
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
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Single Arm Cable Row (Right)',
          reps: [10, 12],
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Cable Seated Row',
          reps: [6, 8],
          imageUrl: stubWorkoutImage,
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
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Berbell Lunge',
          reps: 1,
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Plank With Stability Ball',
          seconds: 20,
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
        {
          title: 'Glute Bridge Hold',
          seconds: 40,
          imageUrl: stubWorkoutImage,
          swappable: true,
        },
      ],
    },
  ],
};
