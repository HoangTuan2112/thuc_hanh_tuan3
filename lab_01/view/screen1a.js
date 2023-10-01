import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
    <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
        locations={[0, 0.3, 0.85, 1]}
        style={styles.container}
      />

      <View style={styles.view0}></View>

      <View style={styles.view1}>
        <View style={styles.view1.circle}></View>
      </View>
      <View style={styles.view0}></View>

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
      <view style={styles.view5}>
        <Text style={{ fontWeight: 'bold', fontSize: '18px' }}>HOW WE WORK?</Text>
      </view>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    ...StyleSheet.absoluteFillObject,
  },

  view1: {
    flex: 1,
    circle: {
      width: 110,
      height: 110,
      borderRadius: 9999,
      borderWidth: 15,
      borderColor: 'black',
      //backgroundColor: 'rgba(196, 196, 196, 0)',
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
    flex: 0.5,
  },
  view5: {
    flex: 1,
  }
});

export default App;
