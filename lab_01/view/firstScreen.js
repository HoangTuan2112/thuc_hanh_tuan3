
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
   

      <View style={styles.view0}></View>

      <View style={styles.view1}>
        <View style={styles.view1.circle}></View>
      </View>

      <View style={styles.view2}>
        <Text style={styles.view2.title}>GROW {"\n"}YOUR BUSINESS</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.view3.title}>We will help you to grow your business using {"\n"}online server</Text>
      </View>

      <View style={styles.view4}>
        <Button title='LOGIN' color='#E3C000' >
        </Button>
        <Button title='SIGN UP' color='#E3C000' >

        </Button>
      </View>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CCF9',
  },

  view1: {
    flex: 1,
    circle: {
      width: 140,
      height: 140,
      borderRadius: 9999,
      borderWidth: 15,
      borderColor: 'black',
      backgroundColor: 'rgba(196, 196, 196, 0)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    }
  },
  view2: {
    flex: 1,
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'dark',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  view3: {
    flex: 1,
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'dark',
    }
  },
  view4: {
    width: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  view0: {
    flex: 1,
  },
});

export default App;
