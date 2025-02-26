import { View, Text, StyleSheet ,Pressable, Image} from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS, screenWidth } from '@utils/Constants'
import { FlatList,  } from 'react-native-gesture-handler'
import { navigate } from '@navigation/NavigationUtil'

const AnimatedHorizontalList:FC<{data:any}> = ({data}) => {


  return (
    <View style={styles.container}>

      <Text style={styles.textStyle}>{data.title}</Text>
      <FlatList
      data={data?.data}
      keyExtractor={(item)=>item.id}
      horizontal
      renderItem={({item,index})=>(
        <Pressable style={styles.imgContainer} key={index} onPress={()=>navigate('Categories')}>
          <Image source={{uri:item.image_uri}} style={styles.img}/>

        </Pressable>
        
        

      )}
      showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginVertical:13

  },
  textStyle:{
    fontFamily:FONTS.heading,
    fontSize:RFValue(14),
    marginHorizontal:10,
    marginVertical:17,
    // padding:12

  },
  img:{
    width:'100%',
    height:'100%'

  },
  imgContainer:{
    width:screenWidth*0.45,
    height:screenWidth* 0.6,
    marginRight:14
  }
})

export default AnimatedHorizontalList