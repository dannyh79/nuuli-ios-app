import * as React from 'react';
import { ImageURISource, StyleSheet, Switch, Text, View } from 'react-native';
import Circuits from './Circuits';

export const Warmup = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const toggleSwitch = () => setIsEnabled((isEnabled) => !isEnabled);

  const { minutes, circuits } = content;

  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: isEnabled ? styles.container.paddingBottom : 20,
      }}
    >
      <View style={styles.head}>
        <View style={styles.headText}>
          <Text style={styles.title}>Warm-Up</Text>
          <Text style={styles.subTitle}>
            {minutes} min •{' '}
            {circuits.reduce((count, { items }) => (count += items.length), 0)}{' '}
            exercises
          </Text>
        </View>
        <Switch
          trackColor={{ false: '#D1D1D5', true: '#262C45' }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Circuits isEnabled={isEnabled} circuits={content.circuits} />
    </View>
  );
};

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
};

const styles = StyleSheet.create({
  container: {
    width: 355,
    backgroundColor: '#F7EBFA',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 38,
    gap: 30,
  },
  head: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: '#262C45',
  },
  scrollView: {
    marginTop: 10,
  },
});

export default Warmup;
