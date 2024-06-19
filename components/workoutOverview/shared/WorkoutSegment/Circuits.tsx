import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Circuit } from '../../types';
import { ExerciseItem } from './ExerciseItem';
import { toLocale } from './utils';

export type CircuitsProps = {
  optional?: boolean;
  isEnabled: boolean;
  circuits: Circuit[];
};

export const Circuits = ({ optional, isEnabled, circuits }: CircuitsProps) => {
  return (
    <View style={{ display: isEnabled ? 'flex' : 'none' }}>
      {circuits.map((circuit, index) => (
        <CircuitItem
          optional={optional}
          key={['warmup', index].join('-')}
          isFirst={index === 0}
          {...circuit}
        />
      ))}
    </View>
  );
};

export default Circuits;

type CircuitItemProps = Circuit & {
  optional?: boolean;
  isFirst: boolean;
  header?: string;
};

const CircuitItem = (props: CircuitItemProps) => {
  const { optional, isFirst, type, rounds, items } = props;

  return (
    <View>
      {!isFirst && (
        <View style={styles.circuitHeadContainer}>
          <View
            style={
              optional
                ? styles.optionalCircuitHeadIndicator
                : styles.circuitHeadIndicator
            }
          />
        </View>
      )}
      {items.length > 1 && (
        <View style={styles.circuitHeadContainer}>
          {!isFirst && (
            <View
              style={
                optional
                  ? styles.optionalCircuitHeadIndicator
                  : styles.circuitHeadIndicator
              }
            />
          )}
          <Text style={styles.header}>
            {type} • {toLocale(rounds, 'round', rounds > 1)}
          </Text>
        </View>
      )}
      <View
        style={
          optional
            ? styles.optionalMainSectionContainer
            : styles.mainSectionContainer
        }
      >
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

const baseStyles = StyleSheet.create({
  circuitHeadContainer: {
    minHeight: 32,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 45,
  },
  circuitHeadIndicator: {
    borderLeftWidth: 1,
    borderColor: '#E9E9E9',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgba(61, 65, 86, 0.45)',
    padding: 12,
    textAlign: 'center',
  },
  mainSectionContainer: {
    flex: 1,
    padding: 6,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    gap: 12,
  },
});

const styles = StyleSheet.create({
  ...baseStyles,
  optionalCircuitHeadIndicator: {
    ...baseStyles.circuitHeadIndicator,
    borderColor: '#FFFFFF',
  },
  optionalMainSectionContainer: {
    ...baseStyles.mainSectionContainer,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: '#FFFFFF',
  },
});
