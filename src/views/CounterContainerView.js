import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import CounterView from "./CounterVIew";
import uuid from 'react-native-uuid';

const CounterContainerView = () => {

    const [counterNum, setCounterNum] = useState(1)

    // const counterNumArray = Array.from({length: counterNum}, (_, index) => {index + 0})
    const counterNumArray = Array.from({length: counterNum})

    return (
        <>
        <View style={styles.CounterContainerView}>
            {counterNumArray.map(() => (
                <CounterView key={uuid.v4()}/>
            ))}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    CounterContainerView: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#d98d00',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default CounterContainerView;