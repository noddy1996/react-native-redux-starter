import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function index({label,style,onPress,labelStyle}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,style]}> 
            <Label text={`${label}`.toUpperCase()} style={[styles.label,labelStyle]}/>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(50),
        backgroundColor:appColors.primary,
        borderRadius:scale(30),
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10)
    },
    label:{
        fontSize:scale(16),
        fontWeight:"500",
        color:appColors.white
    }
})
