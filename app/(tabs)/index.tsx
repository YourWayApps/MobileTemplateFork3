import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [config, setConfig] = useState({ textColor: '#000000' });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('./assets/config.json'); // Adjusted path
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const configData = await response.json();
        setConfig(configData);
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: config.textColor }}>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
