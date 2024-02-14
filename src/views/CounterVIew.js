import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CounterView = () => {

    const [countNum, setCountNum] = useState(0)
    const [upButtonOnPress, setUpButtonOnPress] = useState(false)
    const [downButtonOnPress, setDownButtonOnPress] = useState(false)
    const [resetButtonOnPress, setResetButtonOnPress] = useState(false)

    const countIncrease = () => {
        //setCountNum(countNum + 1) //will cause infinite rerender
        return () => setCountNum(countNum + 1)
    }

    const countDecrease = () => {
        return () => setCountNum(countNum - 1)
    }

    const resetCount = () => {
        return () => setCountNum(0)
    }

    return (
        <View style={styles.counterViewContainer}>
            <View style={styles.countView}>
                <Text style={styles.countViewText}>{countNum}</Text>
            </View>

            <View style={styles.counterViewButtonViewUp}>
                <Pressable 
                    onPress={countIncrease()} 
                    onPressIn={() => {setUpButtonOnPress(prev => !prev)}}
                    onPressOut={() => {setUpButtonOnPress(prev => !prev)}}
                >
                    <AntDesign name={upButtonOnPress ? "upcircle" : "upcircleo" } size={80} color="white"/>
                </Pressable>
            </View>

            <View style={styles.counterViewButtonViewDown}>
                <Pressable 
                    onPress={countDecrease()} 
                    onPressIn={() => {setDownButtonOnPress(prev => !prev)}}
                    onPressOut={() => {setDownButtonOnPress(prev => !prev)}}
                >
                    <AntDesign name={downButtonOnPress ? "downcircle" : "downcircleo"} size={80} color="white"/>
                </Pressable>
            </View>

            <View style={styles.counterViewButtonViewReset}>
                <Pressable 
                    onPress={resetCount()}
                    onPressIn={() => {setResetButtonOnPress(prev => !prev)}}
                    onPressOut={() => {setResetButtonOnPress(prev => !prev)}}
                >
                    <MaterialCommunityIcons name="restart" size={resetButtonOnPress ? 44 : 40} color="white" padding={8}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterViewContainer: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#d98d00',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterViewButtonViewUp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    counterViewButtonViewDown: {
        flex: 1.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterViewButtonViewReset: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
        // backgroundColor: 'green'
    },
    countView: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countViewText: {
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    paddingBottom: {
        paddingBottom: 40,
        marginBottom: 40,
    }
})

export default CounterView;