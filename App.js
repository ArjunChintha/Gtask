import React, {Component} from 'react';
import {View,TextInput,StyleSheet,SafeAreaView} from 'react-native';
import {useEffect,useRef} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const API_KEY = 'AIzaSyB3qLHq2IDrx_43ATJ0hgbIACZNo-33anw';
const ref = useRef();
useEffect(() => {
  ref.current?.setAddressText('Some Text');
}, []);
    const App = () => {
      return (
        <GooglePlacesAutocomplete
      ref={ref}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyB3qLHq2IDrx_43ATJ0hgbIACZNo-33anw',
        language: 'en',
      }}
    />
      );
    };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        textInputContainer: {
          flexDirection: 'row',
        },
        textInput: {
          backgroundColor: '#FFFFFF',
          height: 44,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 15,
          flex: 1,
        },
        poweredContainer: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderColor: '#c8c7cc',
          borderTopWidth: 0.5,
        },
        powered: {},
        listView: {},
        row: {
          backgroundColor: '#FFFFFF',
          padding: 13,
          height: 44,
          flexDirection: 'row',
        },
        separator: {
          height: 0.5,
          backgroundColor: '#c8c7cc',
        },
        description: {},
        loader: {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: 20,
        },
      });
    
    export default App;