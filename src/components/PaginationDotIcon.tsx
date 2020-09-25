import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Filled from './Filled';
import NotFilled from './NotFilled';

interface IProps {
    isActive: boolean;
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4
    }
});

export const PaginationDotIcon = (props: IProps) => (
    <View style={styles.container}>{props.isActive ? <Filled /> : <NotFilled />}</View>
);
