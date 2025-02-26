import { View, Image, StyleSheet } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors, screenWidth } from '@utils/Constants'
import { useNavigation } from '@react-navigation/native'
import { resetAndNavigate } from '@navigation/NavigationUtil'


const Splash:FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
   const timer = setTimeout(() => {
      resetAndNavigate("Main")
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.primary}}>
     <Image source={require('@assets/images/logo_t.png')} style={styles.logo} />
    </View>
  )
}
 const styles = StyleSheet.create({
  logo:{
    width:screenWidth * 0.35,
    height:screenWidth * 0.35,
    resizeMode:'contain'
  }
 })

export default Splash