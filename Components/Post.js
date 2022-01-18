import  React from "react";
import { View , StyleSheet, ScrollView, AppRegistry} from "react-native";
import ImageList from "./ImageList";



const sampleData = [
  {
    text: 'Hello Word',
    picture: {
      thumbnail: 'https://coffee.alexflipnote.dev/MQtetQ8840A_coffee.jpg',
    },
  },
  {
    
    text: 'Comment ça va?',
    picture: {
      thumbnail: 'https://coffee.alexflipnote.dev/Cudql2u9uvU_coffee.png',
    },
    nat: 'ES',
  },
  {
   
    text: 'Il est 23h42',
    picture: {
      thumbnail: 'https://coffee.alexflipnote.dev/mVOd9yC1u3E_coffee.jpg',
    },
  },
]


function Post(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <ImageList data={sampleData}/> 
        </View> 
             
        </ScrollView>
     
    )
}

const styles= StyleSheet.create({
    container:{
        alignItems:"center"
        
    },
    

})
AppRegistry.registerComponent('intelligent-peanut',() => Post)
export default Post