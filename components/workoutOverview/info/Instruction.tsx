import {
  Image,
  ImageURISource,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Instruction = () => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.header}>Instructions</Text>
      <View
        style={{
          flex: 1,
          borderRadius: 18,
          overflow: 'hidden',
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          <Text style={styles.instructions}>{text}</Text>
          <View style={styles.spacer} />
        </ScrollView>
        <Fade />
      </View>
    </View>
    <InfluencerAside />
  </View>
);

export default Instruction;

const Fade = () => (
  <LinearGradient
    style={styles.fade}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
    locations={[0, 0.8]}
  />
);

const InfluencerAside = () => (
  <Image
    style={styles.influencerAside}
    source={require('@/assets/images/influencer.png') as ImageURISource}
  />
);

const styles = StyleSheet.create({
  container: {
    width: 335,
    backgroundColor: '#FEEFF0',
    borderRadius: 38,
    paddingTop: 20,
    paddingRight: 70,
    paddingBottom: 12,
    paddingLeft: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    position: 'relative',
  },
  fade: {
    position: 'absolute',
    width: '100%',
    height: 40,
    left: 0,
    bottom: 0,
  },
  main: {
    gap: 7,
  },
  header: {
    fontSize: 24,
    fontWeight: 600,
  },
  scrollView: {
    width: 240,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  instructions: {
    fontSize: 11,
    fontWeight: 400,
  },
  spacer: {
    width: '100%',
    height: 20,
  },
  influencerAside: {
    width: 140,
    height: 140,
    position: 'absolute',
    top: 20,
    right: -56,
  },
});

const text = `This training program will begin from a full body circuit training on the first day:
You will be able to learn how to use different muscle groups from today’s training.
You will be able to learn how to use different muscle groups.`;
