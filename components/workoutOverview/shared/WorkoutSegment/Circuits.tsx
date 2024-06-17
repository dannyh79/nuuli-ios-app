import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Exercise, ExerciseItem } from './ExerciseItem';
import { toLocale } from './utils';

export type CircuitsProps = {
  isEnabled: boolean;
  circuits: Circuit[];
};

export type Circuit = {
  type: string;
  rounds: number;
  items: Exercise[];
};

export type CircuitProps = Circuit & {
  isFirst: boolean;
  header?: string;
};

export const Circuits = ({ isEnabled, circuits }: CircuitsProps) => {
  return (
    <View style={{ display: isEnabled ? 'flex' : 'none' }}>
      {circuits.map((circuit, index) => (
        <CircuitItem
          key={['warmup', index].join('-')}
          isFirst={index === 0}
          {...circuit}
        />
      ))}
    </View>
  );
};

export default Circuits;

const CircuitItem = ({ isFirst, type, rounds, items }: CircuitProps) => {
  return (
    <View>
      {!isFirst && (
        <View style={styles.circuitHeadContainer}>
          <View style={styles.circuitHeadIndicator} />
        </View>
      )}
      {items.length > 1 && (
        <View style={styles.circuitHeadContainer}>
          {!isFirst && <View style={styles.circuitHeadIndicator} />}
          <Text style={styles.header}>
            {type} • {toLocale(rounds, 'round', rounds > 1)}
          </Text>
        </View>
      )}
      <View style={styles.container}>
        {items.map((item, index) => (
          <ExerciseItem
            key={[item.title, index].join('-')}
            sets={rounds}
            {...item}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: 6,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    gap: 12,
  },
  circuitHeadContainer: {
    minHeight: 32,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 45,
  },
  circuitHeadIndicator: {
    borderLeftWidth: 1,
    borderColor: '#FFFFFF',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgba(61, 65, 86, 0.45)',
    padding: 12,
    textAlign: 'center',
  },
});
