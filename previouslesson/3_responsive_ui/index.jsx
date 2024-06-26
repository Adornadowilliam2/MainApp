import { useState } from "react"
import { Text, View, Button, StyleSheet } from "react-native"
import Styles from '../css/styles'
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"

const Index = () => {

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={Styles.body}>
          <View style={styles.view1}> 
            <Text style={Styles.text2}>
              Text 1
            </Text>
          </View>

          <View style={styles.view2}>
            <Text style={Styles.text2}>
              Text 2
            </Text>
          </View>

          <View style={styles.view3}>
            <Text style={[
              Styles.text2, //global style
              styles.text //custom inline
            ]}>
              Text 3
            </Text>
          </View>
          
      </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  text:{textTransform: 'uppercase', color: '#000', fontWeight: 'bold'},
  view1: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Index
