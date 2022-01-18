import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
 

function ImageItem () {

  return (
    <View style={styles.mainContainer}>
        <Image
         style={styles.image}
         source={{uri: "test" }}
          />
    </View>
  )

}
/*class ImageItem extends React.Component
{
    render()
    {
        const food = this.props.food
        return(
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={{uri: "test" }}
                    
                />
            </View>
        )
    }
}
*/
 
const styles = StyleSheet.create(
{
    mainContainer:
    {
        height: 250,
        flexDirection: 'row'
    },
    /*image:
    :/*{
        width: 170,
        height: 250,
        margin: 5,
        backgroundColor: 'grey'
    },
    
    contentHeader:
    {
        flex: 1,
        width: 180
    },
    contentBarcode:
    {
        flex:1,
        width: 180
    },
    titleText:
    {
        fontWeight: 'bold',
        fontSize: 22,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        textAlign:"center"
    },*/
    
})
 
export default ImageItem