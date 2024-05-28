import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Styles from "../css/styles";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const Index = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={Styles.container}>
        {/* New content muther */}
        <View>
          <View style={Styles.body}>
            <View style={Styles.content}>
              <View style={Styles.content}>
                <View style={styles.primary}>
                  <Text style={Styles.text2}>1</Text>
                </View>

                <View style={[styles.view2, styles.purple]}>
                  <Text style={Styles.text2}>2</Text>
                </View>
              </View>

              <View style={[styles.view3, styles.yellow]}>
                <Text
                  style={
                    Styles.text2 //global style
                  }
                >
                  3
                </Text>
              </View>
            </View>
            {/* Another content */}
          </View>
          <View style={[styles.view1, styles.red]}>
            <Text style={Styles.text2}>4</Text>
          </View>
          <View style={[styles.view2, styles.green]}>
            <Text style={Styles.text2}>5</Text>
          </View>
        </View>
        {/* Content 3 */}
        <View style={Styles.body}>
          <View style={[styles.view1,styles.lightblue]}>
            <Text style={Styles.text2}>6</Text>
          </View>

          <View style={[styles.view2,styles.darkblue]}>
            <Text style={Styles.text2}>7</Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  primary:{
    paddingLeft: "10%", 
    paddingRight: "10%", 
    backgroundColor: "#7beeff"
  },
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purple:{
    backgroundColor: "#a538f5",
  },
  yellow:{
    backgroundColor: "yellow",
  },
  red:{
    backgroundColor:"red"
  },
  green:{
    backgroundColor:"#71e834"
  },
  lightblue:{
    backgroundColor:"#b8fff2"
  },
  darkblue:{
    backgroundColor:"#392ceb"
  }
});

export default Index;
