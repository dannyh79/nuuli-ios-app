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

interface ExerciseBase {
  title: string;
  imageUrl: ImageURISource;
  weight?: number | number[];
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

export type ExerciseItemProps = Exercise & {
  sets: number;
};

export const ExerciseItem = (props: ExerciseItemProps) => {
  const { title, sets, reps, seconds, weight, imageUrl } = props;
  return (
    <View style={styles.container}>
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
              {!!reps ? toRepsLocale(reps) : toSecondsLocale(seconds!)}
            </Text>
            {!!weight &&
              ` x ${Array.isArray(weight) ? weight.join('-') : weight}kg`}
          </Text>
        </View>
        <View>
          <OptionButton />
        </View>
      </View>
    </View>
  );
};

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

/** This does not append "s" to the acronym "sec". */
const toSecondsLocale = (seconds: number) => toLocale(seconds, 'sec', false);

const toRepsLocale = (reps: number | number[]) =>
  toLocale(
    Array.isArray(reps) ? reps.join('-') : reps,
    'rep',
    Array.isArray(reps) ? true : reps > 1,
  );

const styles = StyleSheet.create({
  container: {
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
