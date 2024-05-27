import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text:{
        fontSize: 50,
        color: '#ff0',
        padding: 20,
        fontWeight: 'bold'
    },
    borderedView: {
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 50,
        backgroundColor: '#0f0',
        marginBottom: 8,
        // apply margin top to test scrollview
        // marginTop: 300
    }
})

export default Styles