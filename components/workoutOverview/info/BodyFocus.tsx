import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import muscleGroup from './muscleGroupSvgXml';

export const BodyFocus = () => (
  <View style={styles.container}>
    <View style={styles.aside}>
      <View>
        <Text style={styles.header}>Body</Text>
        <Text style={styles.header}>Focus</Text>
      </View>
      <Text style={styles.description}>FULL BODY</Text>
    </View>
    <MuscleGroup />
  </View>
);

export default BodyFocus;

/**
 * TODO: Render activated muscle group based on exercises given
 */
const MuscleGroup = () => (
  <SvgXml xml={muscleGroup} style={styles.muscleGroup} />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3E0',
    borderRadius: 38,
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 25,
    paddingLeft: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 32,
  },
  aside: {
    height: 100,
    gap: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: 600,
  },
  description: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 400,
  },
  muscleGroup: {
    marginTop: -10,
  },
});
