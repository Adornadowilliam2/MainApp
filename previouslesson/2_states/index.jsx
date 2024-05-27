import { useState } from "react"
import { Text, View, Button, Linking } from "react-native"
import Styles from '../css/styles'
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"

const Index = () => {
  // in mobile apps, useState can preserve data when orientation changes
  const [name, setName] = useState('Dustin')
  const [session, setSession] = useState({number: 6, title: 'state'})
  const [current, setCurrent] = useState(true)

  const onPressHandler = () =>{
    setCurrent(current ? false : true)
    setName(!current  ? 'Dustin' :'Programming with Jeco Pogi')
    setSession(!current  ? {number: 6, title: 'state'} : {number: 1, title: 'Next State'})
  
  }
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={Styles.body}>
          <Text style={Styles.text}>
            {name}
          </Text>
          <Text style={Styles.text2}>
            This is session number {session.number} and about {session.title}
          </Text>
          <Text style={Styles.text2}>
            {current ? 'current session' : 'next session'}
          </Text>
          <Button 
              title="Update State"
              onPress={onPressHandler}
            />
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default Index
