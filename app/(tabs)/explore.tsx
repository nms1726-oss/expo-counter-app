import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';


import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <Image
  source={require('../../assets/images/foto.png')}
  style={styles.image}
/>


      <Text style={styles.name}>Natali Millan Salazar</Text>

      <Text style={styles.title}>
        💻 Desarrolladora de Software
      </Text>

      <Text style={styles.program}>
        ADSO - Análisis y Desarrollo de Software
      </Text>

      <Text style={styles.message}>
        Transformando ideas para mejorar tu experiencia con creatividad,
        lógica y pasión por el código ✨🚀
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F8F4FF', // fondo lila claro
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#C8A2FF', // borde lila
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6A1B9A', // morado elegante
  },

  title: {
    fontSize: 18,
    marginTop: 5,
    color: '#9C27B0',
    fontWeight: '600',
  },

  program: {
    fontSize: 16,
    color: '#7E57C2',
    marginTop: 8,
  },

  message: {
    marginTop: 25,
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#4A148C',
    lineHeight: 22,
  },
});

