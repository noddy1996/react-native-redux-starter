import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView,  } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; 
import Divider from '../../components/Divider';
import Modal from 'Components/Modal';
import { scale } from 'react-native-size-matters'; 
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';

function Home({toggleDarkMode$}) {
    const [isError, setIsError] = useState({})
    const [text, setText] = useState("hello")
    const [isVisible, setIsVisible] = useState(false)
    let error = useSelector(state => state.error)// getting from reducer.
    const dispatch = useDispatch()
    const hasError=(error)=>{
        dispatch(setError({error}))//here we can call a action to set an error in reducer.
    }
    //console.log("error is =>",{isVisible});
    useEffect(() => {
        setIsError(error)
    }, [error])
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Label style={styles.headerText}
            text={"React native starter kit with redux By `Amusoftech`"}/>
        </View>
        <Container style={styles.scrollContainer} isScrollable>
        <CustomButton  label={"Enable Dark Mode"} onPress={()=> toggleDarkMode$()}/>
          <Label text={"What is React Native Starter?"} style={styles.TitleText}/>
            {starterIntro.map((val,key)=>{
                 return(
                    <Label key={key} style={{fontSize:16,lineHeight:25,marginBottom:30 }} text={val}/>
                 )
             })}
            <Label style={styles.TitleText} text={"What's inside"}/>
             {features.map((val,key)=>{
                 return(
                    <Label key={key} text={`• ${val}`} style={{fontSize:18,lineHeight:36,fontWeight:"500" }}/>
                 )
             })}
             <Divider isDark/>
             <CustomInput placeholder={"enter text"} onChangeText={val=>setText(val)}/>
             <Modal modalProps={ {isVisible:isVisible} } toggleModal={()=> setIsVisible(!isVisible)} >
                <Label text={"Swap me down to close"} />
             </Modal >
             <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', paddingHorizontal:scale(20)}}>
                <FontAwesome name="user" size={scale(30)} color={appColors.primary} />
                <Label text={"Icon Demo"} />
             </View>
          <CustomButton  label={"Show Modal"} onPress={()=> setIsVisible(!isVisible)}/>

           
          
        </Container>
        
      </View>
    )
}


export default ReduxWrapper(Home)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: appColors.primary,
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