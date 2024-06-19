import * as React from 'react';
import WorkoutSegment from '../shared/WorkoutSegment';
import WorkoutContext from '../workoutContext';

export const Warmup = () => {
  const { warmup } = React.useContext(WorkoutContext);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const toggleSwitch = () => setIsEnabled((isEnabled) => !isEnabled);

  return (
    <WorkoutSegment
      title="Warm-Up"
      content={warmup}
      optional
      isEnabled={isEnabled}
      onToggle={toggleSwitch}
    />
  );
};

export default Warmup;
