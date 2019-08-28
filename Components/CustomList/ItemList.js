import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const CustomOneRow = ({date,code,mony,dis}) => (
<View style={Styles.container}>
    <Text style={Styles.name}>{code}</Text>
    <Text style={Styles.sdt}>{date}</Text>
    <Text style={Styles.name}>{mony}</Text>
    <Text style={Styles.sdt}>{dis}</Text>  
</View>
); 
const Styles  = StyleSheet.create({
    container:{
flex:1,
flexDirection:'column',
justifyContent: 'center',
padding:10,

    },
    name:{
fontSize:20,
color:'#000'
    },
    sdt: {

        fontSize:15,
        color:'#000'
    }
})

export default CustomOneRow;