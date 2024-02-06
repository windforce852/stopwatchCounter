import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { timer } from '../managers/Timer';
import { useState } from "react";
import useTimer from '../managers/useTimer';
import useStopWatch from "../managers/useStopWatch";

export default function StopWatchView() {

    const timer = useTimer();
    const { minutes, seconds, Ms, start, stop, reset } = useStopWatch();
    
    const stopTimeCount = () => {
        // timer.stop()
        stop()
    }

    const startTimeCount = () => {
        // timer.startAndUpdate()
        start()
    }

    const resetTimeCount = () => {
        // timer.reset()
        reset()
    }

    return(
    <View style={styles.timerView}>
        {/* <Text style={styles.time}>{timer.time}</Text> */}
        <Text style={styles.time}>{`${minutes}:${seconds}.${Ms}`}</Text>
        <View style={styles.buttonsssView}>
            <View style={styles.buttonView}>
                <Pressable onPressOut={resetTimeCount}>
                    <MaterialCommunityIcons name="restart" size={24} color="white" />
                </Pressable>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPressOut={stopTimeCount}>
                    <Text style={styles.buttonText}>STOP</Text>
                </Pressable>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPressOut={startTimeCount}>
                    <Text style={styles.buttonText}>START</Text>
                </Pressable>
            </View>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    timerView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffa600',
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        flex: 2,
        fontSize: 50,
        color: '#fff',
        paddingTop: 100,
    },
    buttonsssView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

