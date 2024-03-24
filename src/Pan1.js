import React, { useRef } from 'react'
import { Text, View ,Animated,PanResponder} from 'react-native'

const Pan1 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef( PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState)=>{
        console.log(gestureState);
      },

  })).current;
    return (
      <View style={{flex:1}} {...panResponder.panHandlers}>
      </View>
    )
}

export default Pan1
