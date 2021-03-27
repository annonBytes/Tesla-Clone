import React from 'react'
import {View, FlatList, Dimensions} from 'react-native'
import Styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'
import styles from './styles'

const CarsList = () => {
  return (
      <View style={styles.container}>
         <FlatList
           data={cars}
           renderItem={({item}) => <CarItem car={item} />}
           snapToAlignment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('screen').height}
           showsVerticalScrollIndicator={'false'}
         />
      </View>
  )
}


export default CarsList