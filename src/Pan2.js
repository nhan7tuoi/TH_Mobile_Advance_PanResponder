import React, { useRef, useState } from 'react'
import { Animated, Text, View, PanResponder,Dimensions } from 'react-native'

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const Pan2 = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const pan2 = useRef(new Animated.ValueXY()).current;
    const [color, setColor] = useState('blue');
    const intervalRef = useRef(null);
    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }]
        ),
        onPanResponderGrant: () => {
            intervalRef.current = setInterval(() => {
                setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
            }, 10);
        },

        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.moveX > widthWindow * 0.5 || gestureState.moveY > heightWindow * 0.5) {
                Animated.spring(pan, {
                    toValue: { x: -500, y: -500 },
                    useNativeDriver: false
                }).start();
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }).start();
            }
        }
    }

    )).current;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Animated.View style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
                {...panResponder.panHandlers}>
                <View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: color
                }} />
            </Animated.View>
        </View >
    )
}

export default Pan2
