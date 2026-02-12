import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#9C27B0', // morado elegante
        tabBarInactiveTintColor: '#C8A2FF', // lila suave

        tabBarStyle: {
          backgroundColor: '#F8F4FF', // fondo lila claro
          borderTopWidth: 0,
          elevation: 10,
          height: 65,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Contador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}


