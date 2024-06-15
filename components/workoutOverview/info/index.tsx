import { ScrollView, StyleSheet } from 'react-native';
import Equipment from './Equipment';
import BodyFocus from './BodyFocus';
import Instruction from './Instruction';

export const Info = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    contentContainerStyle={styles.content}
  >
    <Equipment />
    <BodyFocus />
    <Instruction />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    height: 180,
  },
  content: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
  },
});

export default Info;
