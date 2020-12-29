import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';

export default function Home() {
    const [isError, setIsError] = useState({})
    let error = useSelector(state => state.error)// getting from reducer.
    const dispatch = useDispatch()
    const hasError=(error)=>{
        dispatch(setError({error}))//here we can call a action to set an error in reducer.
    }
    console.log("error is =>",isError);
    useEffect(() => {
        setIsError(error)
    }, [error])
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
              Welcome to  React native starter kit with redux
            </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
            <Text style={styles.TitleText}>What is React Native Starter?</Text>
            {starterIntro.map((val,key)=>{
                 return(
                    <Text key={key} style={{fontSize:16,lineHeight:25,marginBottom:30 }}>{val}</Text>
                 )
             })}
            <Text style={styles.TitleText}>What's inside</Text>
             {features.map((val,key)=>{
                 return(
                    <Text key={key} style={{fontSize:18,lineHeight:36,fontWeight:"500" }}>• {val}</Text>
                 )
             })}
        </ScrollView>
        
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: '#d64b4b',
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });