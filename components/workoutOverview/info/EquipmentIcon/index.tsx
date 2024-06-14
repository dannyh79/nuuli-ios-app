import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import icons from './iconsSvgXml';

export type Equipment =
  | 'barbell'
  | 'cable'
  | 'dumbbell'
  | 'resistance-band'
  | 'smith-machine';

export type EquipmentIconProps = {
  name: Equipment;
};

export const EquipmentIcon = ({ name }: EquipmentIconProps) => (
  <View style={styles.container}>
    <SvgXml xml={icons[name]} />
  </View>
);

export default EquipmentIcon;

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    backgroundColor: '#FFFFFFBF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
  icon: {
    width: 26,
    height: 26,
  },
});
