import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Filter, Search } from '../../../assets/common-icons';
import { styles } from './Search-bar-styles';

export const SearchBar = ({
    value,
    onChangeText,
    style,
    textStyle,
    placeholderColor,
}) => {
    return (
        <View style={[styles.container,style]}>
            <Search/>
           <TextInput placeholderTextColor={placeholderColor} value={value} onChangeText={onChangeText} style={[styles.input,textStyle]} placeholder='Search here'/>
           <Filter/>
        </View>
    );
};