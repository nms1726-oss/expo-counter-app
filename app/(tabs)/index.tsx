import FAB from '@/components/FAB';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CounterScreen() {

  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mi Contador ✨</Text>

      <Text
        style={[
          styles.counterText,
          count > 20 && styles.counterHigh
        ]}
      >
        {count}
      </Text>

      <FAB
        label="+1 💜"
        position="right"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />

      <FAB
        label="Reset 🌷"
        position="left"
        onPress={() => setCount(0)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4FF', 
  },

  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#9C27B0',
    letterSpacing: 1,
  },

  counterText: {
    fontSize: 120,
    fontWeight: '200',
    color: '#6A1B9A',
  },

  counterHigh: {
    color: '#E91E63', 
  },
});
