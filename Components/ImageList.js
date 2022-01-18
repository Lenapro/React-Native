import React from 'react'
import { FlatList, Text } from 'react-native'
import ImageRow from './ImageRow'

const _renderItem = ({ item }) => (
  <ImageRow  picture={item.picture.thumbnail} text={item.text} />
)

export default ImageList = props =>
 <FlatList 
      data={props.data} 
      renderItem={_renderItem}  
  />
  