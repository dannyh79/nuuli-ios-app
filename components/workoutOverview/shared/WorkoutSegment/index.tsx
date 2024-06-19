import * as React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { WorkoutSegContent } from '../../types';
import Circuits from './Circuits';
import { toLocale } from './utils';

interface SegmentProps {
  title: string;
  content: WorkoutSegContent;
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
        ...(optional ? styles.optionalContainer : styles.container),
        ...(!isEnabled && { paddingBottom: 20 }),
      }}
    >
      <View style={optional ? styles.optionalHead : styles.head}>
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
      <Circuits
        optional={optional}
        isEnabled={showCircuits}
        circuits={circuits}
      />
    </View>
  );
};

export default WorkoutSegment;

const baseStyles = StyleSheet.create({
  container: {
    width: 355,
    borderRadius: 38,
    gap: 30,
  },
  head: {
    paddingHorizontal: 25,
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

const styles = StyleSheet.create({
  ...baseStyles,
  optionalHead: {
    ...baseStyles.head,
    paddingHorizontal: 15,
  },
  optionalContainer: {
    ...baseStyles.container,
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#F7EBFA',
  },
});
