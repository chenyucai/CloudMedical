import React, { Component } from 'react';
import {
    AppRegistry,
    NativeModules
} from 'react-native';
import rootApp from './root';
NativeModules.MyDialog.showMyDialogProgress('data')
console.log(123);
AppRegistry.registerComponent('CloudMedical', () => rootApp);
