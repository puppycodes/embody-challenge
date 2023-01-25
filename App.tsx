import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {CalendarList, Agenda} from 'react-native-calendars';
import Animated, { FadeIn } from "react-native-reanimated";

export default function App() {
  return (
    <Animated.View entering={FadeIn.duration(5000)}>
      <Text style={styles.title}>Embody</Text>
      <CalendarList
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        />
      <StatusBar style="auto" />


    </Animated.View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    padding: 20,
    marginTop: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
