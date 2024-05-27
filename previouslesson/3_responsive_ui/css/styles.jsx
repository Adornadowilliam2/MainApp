import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    body:{
      flex: 1,
      flexDirection:"row",
      justifyContent: "center",
      alignItems: "stretch",
    },
    text:{
        fontSize: 50,
        color: '#f00',
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2:{
        fontSize: 25,
        color: '#00f',
        padding: 20,
        textAlign: 'center'
    }
})

export default Styles