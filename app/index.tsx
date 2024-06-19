import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client';
import Info from '@/components/workoutOverview/info';
import Warmup from '@/components/workoutOverview/warmup';
import Workout from '@/components/workoutOverview/workout';
import {
  stubWorkoutContentId,
  toFormattedWorkout,
} from '@/components/workoutOverview/shared/WorkoutSegment/utils';
import {
  GET_WORKOUT,
  GetWorkoutResponse,
} from '@/components/workoutOverview/queries';
import WorkoutContext from '@/components/workoutOverview/workoutContext';

export default function Index() {
  const { loading, data } = useQuery<GetWorkoutResponse>(GET_WORKOUT, {
    variables: { id: stubWorkoutContentId },
  });
  if (loading) {
    // should use loading animation here
    return;
  }

  const formattedData = toFormattedWorkout(data!);

  return (
    <WorkoutContext.Provider value={formattedData}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollViewContent}>
            <Info />
            <Warmup />
            <Workout />
          </View>
        </ScrollView>
      </SafeAreaView>
    </WorkoutContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});
