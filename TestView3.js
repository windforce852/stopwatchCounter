import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TestView3() {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    }
})