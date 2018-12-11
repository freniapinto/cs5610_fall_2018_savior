import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import BloodBanksNearMe from './elements/BloodBanksNearMe';
import Home from './Home'
import SelectedBloodBank from "./elements/SelectedBloodBank";
import Community from "./elements/Community";
import DonorsNearMe from "./elements/DonorsNearMe";
import BloodStocks from "./elements/BloodStocks";




const MainNavigator =  createStackNavigator({
    Home: {screen: Home},
    BloodBanksNearMe: {screen: BloodBanksNearMe},
    Community:{screen:Community},
    SelectedBloodBank: {screen: SelectedBloodBank},
    DonorsNearMe: {screen: DonorsNearMe},
    BloodStocks: {screen: BloodStocks},

});
const App = createAppContainer(MainNavigator);

export default App