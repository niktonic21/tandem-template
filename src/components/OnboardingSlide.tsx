import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';

interface IProps {
    title: string;
    text: string;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 16,
        textAlign: 'center'
    }
});

export const OnboardingSlide = (props: IProps) => (
    <View style={styles.container}>
        <Text category="h1" style={styles.title}>
            {props.title}
        </Text>
        <Text category="p2">{props.text}</Text>
    </View>
);
