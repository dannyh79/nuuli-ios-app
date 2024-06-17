import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import {
  Image,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from './iconsSvgXml';
import { toLocale } from './utils';

export type Exercise = {
  title: string;
  imageUrl: ImageURISource;
  reps: number | number[];
};

export type CircuitsProps = {
  isEnabled: boolean;
  circuits: Circuit[];
};

export type Circuit = {
  type?: string;
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
      {!!type && (
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

type ExerciseItemProps = Exercise & { sets: number };

const ExerciseItem = ({ title, sets, reps, imageUrl }: ExerciseItemProps) => (
  <View style={styles.exerciseContainer}>
    <View style={styles.thumbnailContainer}>
      <Image source={imageUrl} style={styles.thumbnail} />
      <InfoButton />
    </View>
    <View style={styles.mainSectionContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {sets} set{sets > 1 && 's'} x{' '}
          <Text style={styles.descriptionHighlight}>
            {toLocale(
              Array.isArray(reps) ? reps.join('-') : reps,
              'rep',
              Array.isArray(reps) ? true : reps > 1,
            )}
          </Text>
        </Text>
      </View>
      <View>
        <OptionButton />
      </View>
    </View>
  </View>
);

const OptionButton = () => (
  <TouchableOpacity style={styles.optionContainer}>
    <SvgXml style={styles.optionSvg} xml={icons.dots} />
  </TouchableOpacity>
);

const InfoButton = () => (
  <Pressable style={styles.thumbnailInfoIcon}>
    <SvgXml style={styles.thumbnailSvg} xml={icons.info} />
  </Pressable>
);

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

  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: 80,
    height: 100,
    borderRadius: 22,
  },
  thumbnailInfoIcon: {
    backgroundColor: '#FFFFFF',
    width: 30,
    height: 30,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 8,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  thumbnailSvg: {
    width: 14,
    height: 14,
  },

  mainSectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    gap: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
    lineHeight: 18,
    color: '#262C45',
  },
  description: {
    fontSize: 12,
    color: 'rgba(38, 44, 69, 0.65)',
  },
  descriptionHighlight: {
    fontWeight: '700',
  },

  optionContainer: {
    width: 40,
  },
  optionSvg: {
    width: 28,
    height: 28,
  },
});
