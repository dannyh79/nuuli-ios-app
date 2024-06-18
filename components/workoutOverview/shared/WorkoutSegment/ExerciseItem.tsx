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

export type ExerciseItemProps = Exercise & {
  sets: number;
};

export const ExerciseItem = (props: ExerciseItemProps) => {
  const { title, sets, reps, seconds, weight, imageUrl, swappable } = props;

  const [isSwapped, setIsSwapped] = React.useState<boolean>(false);
  const swapExercise = () => setIsSwapped((isSwapped) => !isSwapped);
  return (
    <View style={isSwapped ? styles.swappedContainer : styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={imageUrl} style={styles.thumbnail} />
        <InfoButton />
      </View>
      <View style={styles.mainSectionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {toLocale(sets, 'set', sets > 1)} x{' '}
            <Text style={styles.descriptionHighlight}>
              {!!reps ? toRepsLocale(reps) : toSecondsLocale(seconds!)}
            </Text>
            {!!weight &&
              ` x ${Array.isArray(weight) ? weight.join('-') : weight}kg`}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          {!!swappable && (
            <SwapButton isSwapped={isSwapped} onPress={swapExercise} />
          )}
          <OptionButton />
        </View>
      </View>
    </View>
  );
};

type SwapButtonProps = Pick<
  React.ComponentProps<typeof TouchableOpacity>,
  'onPress'
> & {
  isSwapped: boolean;
};

const SwapButton = ({ onPress, isSwapped }: SwapButtonProps) => (
  <Pressable style={styles.swapButton} onPress={onPress}>
    <View
      style={isSwapped ? styles.swappedIconContainer : styles.iconContainer}
    >
      <SvgXml
        xml={isSwapped ? icons.crossedArrows : icons.crossedArrowsInverse}
      />
    </View>
  </Pressable>
);

const OptionButton = () => (
  <TouchableOpacity style={styles.optionButton}>
    <View style={styles.iconContainer}>
      <SvgXml xml={icons.dots} />
    </View>
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

const baseStyles = StyleSheet.create({
  container: {
    borderRadius: 22,
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
  buttonsContainer: {
    flexDirection: 'row',
  },
  swapButton: {
    width: 40,
    alignItems: 'center',
  },
  optionButton: {
    width: 40,
    alignItems: 'center',
  },
  iconContainer: {
    width: 26,
    height: 26,
    borderColor: '#262C45',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#262C45',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  ...baseStyles,
  swappedContainer: {
    ...baseStyles.container,
    backgroundColor: '#F0ECFF',
  },
  swappedIconContainer: {
    ...baseStyles.iconContainer,
    backgroundColor: '#FFFFFF',
  },
});
