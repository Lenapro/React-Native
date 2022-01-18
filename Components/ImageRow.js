import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default  ImageRow = props => (
    <View>
      <Text style={styles.secondaryText}>{props.text}</Text>
       <Image style={styles.picture} source={{ uri: props.picture }} />
    </View>
)

const styles = StyleSheet.create({
  picture: { width: 330,
        height:270,
        marginTop: 15,},
   
  secondaryText: { color: 'grey', marginTop:20 },
})
