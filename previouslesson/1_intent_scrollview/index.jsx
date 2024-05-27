import { Text, View, Button, Linking } from "react-native"
import Styles from '../css/styles'
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"

export default function Index() {
  const openLink = () =>{
    Linking.openURL("https://www.youtube.com")
  }
  return (
    <GestureHandlerRootView>
      {/* GestureHandlerRootView is needed for mobile */}
      <ScrollView contentContainerStyle={Styles.body}>
          <View style={Styles.borderedView}>
            <Text style={Styles.text}>Hello World</Text>
          </View>
          {/* <Button/> => styles cannot be applied */}
          <Button 
              title="Open Youtube"
              onPress={openLink}
            />
      </ScrollView>
    </GestureHandlerRootView>
  )
}


