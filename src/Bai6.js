import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Image, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const Bai6 = () => {
    const mouseAnim = useRef(new Animated.Value(0)).current;
    const catAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        mouseRun();
        catRun();
        const interval = setInterval(checkCollision, 200);
        return () => clearInterval(interval);
    }, []);

    const mouseRun = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(mouseAnim, {
                    toValue: 1,
                    duration: 4500,
                    useNativeDriver: true
                }),
                Animated.timing(mouseAnim, {
                    toValue: 0,
                    duration: 4500,
                    useNativeDriver: true
                })
            ])
        ).start();
    };
    const catRun = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(catAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }),
                Animated.timing(catAnim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true
                })
            ])
        ).start();
    };

    const checkCollision = () => {

    }
    console.log(mouseAnim);
    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    transform: [
                        {
                            translateX: mouseAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 330]
                            })
                        }
                    ],
                    width: 70,
                    height: 70,
                    backgroundColor: 'red',
                    position: 'absolute',

                }}>
                <Image resizeMode="contain" style={{ width: 70, height: 70 }} source={require('../assets/mouse.png')} />
            </Animated.View>
            <Animated.View style={{
                transform: [
                    {
                        translateY: catAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -650]
                        })
                    }
                ],
                position: 'absolute',
                bottom: 0,
                width: 100,
                height: 100,
                backgroundColor: 'blue'

            }}>
                <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require('../assets/kitty.png')} />
            </Animated.View>
        </View>
    )
}
export default Bai6;