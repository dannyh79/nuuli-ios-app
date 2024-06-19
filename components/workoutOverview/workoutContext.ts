import React from 'react';
import { WorkoutContent } from './types';

export const WorkoutContext = React.createContext<WorkoutContent>({
  name: '',
  instruction: '',
  warmup: {
    minutes: 0,
    circuits: [],
  },
  workout: {
    minutes: 0,
    circuits: [],
  },
});

export default WorkoutContext;
