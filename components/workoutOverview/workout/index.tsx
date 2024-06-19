import * as React from 'react';
import WorkoutSegment from '../shared/WorkoutSegment';
import WorkoutContext from '../workoutContext';

export const Workout = () => {
  const { workout } = React.useContext(WorkoutContext);

  return <WorkoutSegment title="Workout" content={workout} />;
};

export default Workout;
