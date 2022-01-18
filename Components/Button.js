import React, {Component} from "react";
import { SafeAreaView, StyleSheet, Button, View, Animated,TextInput, TouchableOpacity, Alert,Text, Image} from "react-native";


class ButtonApp extends Component { 

  state = {
    barinput: '',
  }
  handleInput = (text) => {
    this.setState({ barinput: text })
  }
    getImages = (test) => {
    alert(test)
    
  }
  
    render() {
    return(
        <SafeAreaView >
           <TextInput 
                style = {styles.input}
                placeholder="Quoi de neuf?"
                inputAccessoryViewID="inputbar"
                onChangeText = {this.handleInput}
            />
            <TouchableOpacity
            style = {styles.stylebutton}
            onPress = { () => this.getImages(this.state.barinput)
} >
            <Text> Publier </Text>
           
            </TouchableOpacity>
             <View style={styles.input}>
             {this.getImages}
            </View>
            
        </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    stylebutton: {
       width:"30%",
       height:30,
       marginLeft: "64%",
       borderRadius: 7,
       float:"rigth",
       color:"#ffffff",
       backgroundColor:"#ffd700",
       alignItems: "center",
       justifyContent:"center"
    },
     input: {
        height: 60,
        marginTop: 12,
        padding: 10,
        margin: 20,
        backgroundColor: "#efefef",
        paddingHorizontal: 10,
        borderRadius: 10,

    },
    container:{
      width:100,
      height:50,
      backgroundColor:"#ffd700"
    }

    
});
export default ButtonApp
