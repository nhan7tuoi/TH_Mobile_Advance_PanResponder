import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Image } from "react-native";

const Bai5 = () => {
    const chayQuaChayLai = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const doiMau = useRef(new Animated.Value(0)).current;
    const latAnh = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        shipper();
        scaleText();
        doiMauText();
    }, []);

    const shipper = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(chayQuaChayLai, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }),
                Animated.timing(latAnh, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(chayQuaChayLai, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true
                }),
            ])
        ).start();
    }
    const scaleText = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scale, {
                    toValue: 1.5,
                    duration: 2000,
                    useNativeDriver: true
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                })
            ])
        ).start();
    }


    const doiMauText = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(doiMau, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }),
                Animated.timing(doiMau, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true
                })
            ])
        ).start();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Animated.View style={{
                transform: [
                    {
                        translateX: chayQuaChayLai.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-250, 250]
                        }),
                    },
                    {
                        rotateY: latAnh.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg']
                        })
                    }
                ]
            }}>
                <Image resizeMode="contain" style={{
                    width: 100,
                    height: 100,
                }}
                    source={require('../assets/delivery.png')} />
            </Animated.View>
            <Animated.Text style={{
                fontSize: 20,
                transform: [
                    { scale: scale }
                ],
                color: doiMau.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['black', 'red']
                })
            }}>
                Shopee cái gì cũng có…
            </Animated.Text>
            <Animated.View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                transform: [
                    { scale: scale }
                ],
            }}>
                <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require('../assets/ramen.png')} />
                <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require('../assets/orange-juice.png')} />
                <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require('../assets/snack.png')} />
            </Animated.View>
        </View>
    )
}
export default Bai5;