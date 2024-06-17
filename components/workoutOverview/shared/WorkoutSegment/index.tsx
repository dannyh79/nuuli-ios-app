import * as React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Circuits, { Circuit } from './Circuits';
import { toLocale } from './utils';

type WorkoutContent = {
  minutes: number;
  circuits: Circuit[];
};

interface SegmentProps {
  title: string;
  content: WorkoutContent;
  optional?: boolean;
}

interface RequiredSegmentProps extends SegmentProps {
  optional?: never;
  isEnabled?: never;
  onToggle?: never;
}

interface OptionalSegmentProps extends SegmentProps {
  optional: boolean;
  isEnabled: boolean;
  onToggle: React.ComponentProps<typeof Switch>['onValueChange'];
}

export type WorkoutSegmentProps = RequiredSegmentProps | OptionalSegmentProps;

export const WorkoutSegment = (props: WorkoutSegmentProps) => {
  const { title, content, optional, isEnabled, onToggle } = props;
  const { minutes, circuits } = content;

  const showCircuits = !optional || isEnabled;
  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: !!isEnabled ? styles.container.paddingBottom : 20,
      }}
    >
      <View style={styles.head}>
        <View style={styles.headText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>
            {minutes} min •{' '}
            {(() => {
              const exercises = circuits.reduce(
                (count, { items }) => (count += items.length),
                0,
              );
              return toLocale(exercises, 'exercise', exercises > 1);
            })()}
          </Text>
        </View>
        {optional && (
          <Switch
            trackColor={{ false: '#D1D1D5', true: '#262C45' }}
            onValueChange={onToggle}
            value={isEnabled}
          />
        )}
      </View>
      <Circuits isEnabled={showCircuits} circuits={circuits} />
    </View>
  );
};

export default WorkoutSegment;

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
