import { ImageURISource } from 'react-native';

interface ExerciseBase {
  title: string;
  imageUrl: ImageURISource;
  weight?: number | number[];
  swappable?: boolean;
}

export interface DurationBasedExercise extends ExerciseBase {
  seconds: number;
  reps?: never;
}

export interface RepBasedExercise extends ExerciseBase {
  reps: number | number[];
  seconds?: never;
}

export type Exercise = DurationBasedExercise | RepBasedExercise;

export type Circuit = {
  type: string;
  rounds: number;
  items: Exercise[];
};

export type WorkoutSegContent = {
  minutes: number;
  circuits: Circuit[];
};

export type WorkoutContent = {
  name: string;
  instruction: string;
  warmup: WorkoutSegContent;
  workout: WorkoutSegContent;
};
