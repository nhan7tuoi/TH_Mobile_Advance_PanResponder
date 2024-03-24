import React, { useEffect, useRef } from "react";
import { View, Animated, Image } from "react-native";

const Bai4 = () =>{

    const bongBay = useRef(new Animated.Value(800)).current;
    const lacQuaLai = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        bongBayLen();
    },[]);

    const bongBayLen = () => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(bongBay, {
                        toValue: -110,
                        duration: 5000,
                        useNativeDriver: true
                    }),
                    Animated.timing(bongBay, {
                        toValue: 800,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.sequence([
                    Animated.timing(lacQuaLai, {
                        toValue: 50,
                        duration: 2500,
                        useNativeDriver: true
                    }),
                    Animated.timing(lacQuaLai, {
                        toValue: -50,
                        duration: 2500,
                        useNativeDriver: true
                    }),
                    Animated.timing(lacQuaLai, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    })
                ])
            ]),
        ).start();
    }

    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
        }}>
       <Animated.View 
       style={{
           transform: [
               {translateY: bongBay},
                {translateX: lacQuaLai}
           ]}}
       >
        <Image style={{width:100,height:100}} source={require('../assets/balloon2.png')} />
       </Animated.View>
       <Animated.View 
       style={{
        transform: [
            {translateY: bongBay},
             {translateX: lacQuaLai}
        ]}}
       >
        <Image style={{width:100,height:100}} source={require('../assets/balloon.png')} />

       </Animated.View>
       <Animated.View 
       style={{
        transform: [
            {translateY: bongBay},
             {translateX: lacQuaLai}
        ]}}
       >
        <Image style={{width:100,height:100}} source={require('../assets/balloon3.png')} />
       </Animated.View>
      </View>
    )
}
export default Bai4;