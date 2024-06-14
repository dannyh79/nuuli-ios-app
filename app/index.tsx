import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Info from '@/components/workoutOverview/info';
import Warmup from '@/components/workoutOverview/warmup';
import Workout from '@/components/workoutOverview/workout';

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Info />
          <Warmup />
          <Workout />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
