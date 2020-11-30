import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeMainFeature'
import NotificationsScreen from '../../screens/Payment'

const Drawer = createDrawerNavigator();

class Drawerus extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        );
    }
}

export default Drawerus;