import { ScrollView, StyleSheet } from 'react-native';
import Equipment from './Equipment';

export const Info = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
  >
    <Equipment />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 180,
    paddingHorizontal: 24,
  },
});

export default Info;
