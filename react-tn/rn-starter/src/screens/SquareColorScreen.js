import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENTER = 15;
const reducer = (state, action) => {
    //state -> {red: number, green: number, blue: number}
    //action -> { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.type) {
        case 'change_red':
            if(state.red+action.payload > 255 || state.red+action.payload<0){
                return state;
            }
            return {...state, red: state.red + action.payload };
        case 'change_blue':
            if(state.blue+action.payload > 255 || state.blue+action.payload<0){
                return state;
            }
            return {...state, blue: state.blue + action.payload };
        case 'change_green':
            if(state.green+action.payload > 255 || state.green+action.payload<0){
                return state;
            }
            return {...state, green: state.green + action.payload };
        default:
            return state;
    }
};
const SquareColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return <View>
        <ColorCounter 
            color="Red" 
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENTER })}
            onDecrease={() => dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENTER })}
        />
        <ColorCounter 
            color="Green"
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENTER })}
            onDecrease={() => dispatch({ type: 'change_green', payload:-1*COLOR_INCREMENTER })} 
        />
        <ColorCounter 
            color="Blue"
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENTER })}
            onDecrease={() => dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENTER })} 
        />
        <View style={{ height: 150, width: 150, backgroundColor: 'rgb('+red+','+green+','+blue+')' }}/>
    </View>
};


const styles = StyleSheet.create({});

export default SquareColorScreen;