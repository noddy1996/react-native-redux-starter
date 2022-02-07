import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from 'Redux/ReduxWrapper'
import { appColors } from '../../utils/appColors'

function Label({text,style, appState:{darkMode}}) {
     
    return (
    <Text style={[styles.label,style, darkMode?  styles.dark : styles.light  ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(14),
        color:appColors.black,
    },
    light:{ 
        color:appColors.black
    },
    dark:{ 
        color:appColors.white
    }
})


export default  ReduxWrapper(Label)