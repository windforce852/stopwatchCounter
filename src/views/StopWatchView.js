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
    const [resetButtonOnPress, setResetButtonOnPress] = useState(false);
    const [isStartOnPress, setIsStartOnPress] = useState(false);
    const [isStopOnPress, setIsStopOnPress] = useState(false);
    
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

    const setStartButtonColor = () => {
        if (isStartOnPress === true){
            return styles.buttonColorOnPress
        } else {
            return styles.buttonColorNotOnPress
        }
    }

    const setStartButtonTextColor = () => {
        if (isStartOnPress === true){
            return styles.buttonTextColorOnPress
        } else {
            return styles.buttonTextColorNotOnPress
        }
    }

    const setStopButtonColor = () => {
        if (isStopOnPress === true){
            return styles.buttonColorOnPress
        } else {
            return styles.buttonColorNotOnPress
        }
    }

    const setStopButtonTextColor = () => {
        if (isStopOnPress === true){
            return styles.buttonTextColorOnPress
        } else {
            return styles.buttonTextColorNotOnPress
        }
    }


    return(
    <View style={styles.timerView}>
        {/* <Text style={styles.time}>{timer.time}</Text> */}
        <Text style={styles.time}>{`${minutes}:${seconds}.${Ms}`}</Text>
        <View style={styles.buttonsssView}>
            <View style={styles.buttonView}>
                <Pressable 
                    onPress={resetTimeCount}
                    onPressIn={() => {setResetButtonOnPress(prev => !prev)}}
                    onPressOut={() => {setResetButtonOnPress(prev => !prev)}}
                >
                    <MaterialCommunityIcons name="restart" size={resetButtonOnPress ? 28 : 24} color="white" padding={8}/>
                </Pressable>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={[styles.button, setStopButtonColor()]} 
                    onPress={stopTimeCount}
                    onPressIn={() => {setIsStopOnPress(prev => !prev)}}
                    onPressOut={() => {setIsStopOnPress(prev => !prev)}}
                >
                    <Text style={[styles.buttonText, setStopButtonTextColor()]}>STOP</Text>
                </Pressable>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={[styles.button, setStartButtonColor()]} 
                    onPress={startTimeCount}
                    onPressIn={() => {setIsStartOnPress(prev => !prev)}}
                    onPressOut={() => {setIsStartOnPress(prev => !prev)}}
                >
                    <Text style={[styles.buttonText, setStartButtonTextColor()]}>START</Text>
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
        paddingTop: 80,
        fontFamily: 'B612Mono',
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
        // backgroundColor: "#32a852"
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonColorOnPress: {
        backgroundColor: '#fff',
    },
    buttonColorNotOnPress: {
        backgroundColor: "#ffa600"
    },
    buttonTextColorOnPress: {
        color: '#ffa600',
    },
    buttonTextColorNotOnPress: {
        color: '#fff',
    }

});

