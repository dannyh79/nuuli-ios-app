import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import EquipmentIcon, {
  Equipment as EquipmentType,
  EquipmentIconProps,
} from './EquipmentIcon';
import icon from './dumbbellsSvgXml';

export const Equipment = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Equipment</Text>
    <View>
      <ScrollView
        contentContainerStyle={styles.equipmentsScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <EquiptItem name="barbell" />
        <EquiptItem name="cable" />
        <EquiptItem name="dumbbell" />
        <EquiptItem name="resistance-band" />
        <EquiptItem name="smith-machine" />
      </ScrollView>
    </View>
    <BackgroundImage />
    <Fade />
  </View>
);

export default Equipment;

const BackgroundImage = () => (
  <SvgXml xml={icon} style={styles.backgroundImage} />
);

const Fade = () => (
  <LinearGradient
    style={styles.fade}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={['rgba(225,240,244,0)', 'rgba(225,240,244,0.6)', '#E1F0F4']}
    locations={[0, 0.5, 1]}
  />
);

const equipmentNameMap: Record<EquipmentType, string> = {
  barbell: 'barbell',
  cable: 'cable',
  dumbbell: 'dumbbell',
  'resistance-band': 'resistance band',
  'smith-machine': 'smith machine',
};

const EquiptItem = ({ name }: EquipmentIconProps) => (
  <View style={styles.equipmentItem}>
    <EquipmentIcon name={name} />
    <View style={styles.equipmentLabel}>
      {equipmentNameMap[name].split(' ').map((word, _, words) => (
        <Text
          key={[words.join('-'), word].join('-')}
          style={styles.equipmentLabelWord}
          numberOfLines={1}
        >
          {word}
        </Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1EFF4',
    width: 335,
    borderRadius: 38,
    overflow: 'hidden',
    paddingTop: 20,
    paddingBottom: 25,
    justifyContent: 'space-between',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    right: 0,
    bottom: 0,
  },
  fade: {
    width: 48,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    // Psuedo left "padding" hack to align equipmentsScrollView's
    marginLeft: 25,

    fontSize: 24,
    fontWeight: '600',
  },
  equipmentsScrollView: {
    /**
     * Psuedo left "padding" hack that allows items scrolled to the left
     * to reach to the container border
     */
    marginLeft: 25,

    height: 78,
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  equipmentItem: {
    width: 58,
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  equipmentLabel: {
    gap: 2,
  },
  equipmentLabelWord: {
    width: '100%',
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 10,
    alignSelf: 'center',
  },
});
