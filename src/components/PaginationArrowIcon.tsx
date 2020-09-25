import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import Right from './Right';
import Left from './Left';

interface IProps {
    type: 'prev' | 'next';
    onPress: () => void;
}

export const PaginationArrowIcon = (props: IProps) => (
    <TouchableOpacity onPress={props.onPress}>
        {props.type === 'prev' ? <Left /> : <Right />}
    </TouchableOpacity>
);
