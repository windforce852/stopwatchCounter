import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CounterView = () => {

    const [countNum, setCountNum] = useState(0)

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
                <Pressable onPress={countIncrease()} >
                    <AntDesign name="upcircleo" size={80} color="white"/>
                </Pressable>
            </View>

            <View style={styles.counterViewButtonViewDown}>
                <Pressable onPress={countDecrease()} >
                    <AntDesign name="downcircleo" size={80} color="white"/>
                </Pressable>
            </View>

            <View style={styles.counterViewButtonViewReset}>
                <Pressable onPressOut={resetCount()}>
                    <MaterialCommunityIcons name="restart" size={40} color="white" />
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
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterViewButtonViewReset: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
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