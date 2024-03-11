import React from 'react';
import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';



export const Splash = ({ navigation }) => {
 
    const handleGetStarted = () => {
      navigation.navigate('GetStarted'); 
    };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <Text style={styles.finderText}>FinderApp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  finderText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#fff',
  },
});
