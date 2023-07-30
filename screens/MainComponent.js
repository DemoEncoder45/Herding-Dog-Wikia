import * as Font from 'expo-font';
import {useFonts} from 'expo-font';
import HomeScreen from "./HomeScreen";
import  Constants  from "expo-constants";
import DogInfoScreen from "./DogInfoScreen";
import logo from '../assets/images/logo.png';
import { Icon } from "react-native-elements";
import DirectoryScreen from "./DirectoryScreen";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, Platform, StyleSheet, View } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";




const customFonts = {
    'Underdog-Regular': require('../assets/fonts/Underdog-Regular.ttf'),
    'GoodDog': require('../assets/fonts/gooddog.ttf')

}

//Similar to Stack Navi, the Drawer Navi returns an object that contains
//the navigation and screen componenets for configuring the Drawer Navi
const Drawer = createDrawerNavigator();



const screenOptions = {
    headerTitleStyle: {
        fontFamily: 'GoodDog',
    },
    headerStyle: {
        backgroundColor: "#33ccff"
    },
    headerTintColor: "#ffffff"
}

const drawerScreenOptions = {
   fontFamily: 'GoodDog'
}

const HomeNavigator = () =>{
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                //can also be set equal to a function that returns an object with all the options
                //in it. Need apply paranthesis so that the function doesnt get confused and think they
                //are for the object when they are for the function body.
                options={({navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon 

                            name="home"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                    headerRight: () => (
                        <Image
                        
                            style={styles.smallLogo}
                            source={require('../assets/dogimages/corgi.png')}
                        
                        />

                        
                    )
                
                })}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Directory"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={({navigation}) => ({
                    title: 'Dog Directory',
                    headerLeft: () => (
                        
                        <Icon 
                            name="dog-side"
                            type="material-community"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                        
                    )
                
                })}
            />

            <Stack.Screen
                name="Dogs"
                component={DogInfoScreen}
                //returns an object; we can return an object from this function
                //by covering the object literal with curly brackets, so the arrow function
                //isnt confused by us into thinking its creating a fucntion body.
                //We are deconstruct a parameter called route
                options={( {route} ) => ({
                    title: route.params.campsite.name
                })}
                //This will set the campsite name of every specific campsite
                //This will work because in the InfoScreen a navagtion param called campsite
                //with a name to the campsite that we are navagting to.
            
            />
        </Stack.Navigator>
    )
}


const CustomDrawer = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
                <Image source={require('../assets/dogimages/AustDog.png')} style={styles.drawerImage}/>
            </View>
            <View style={{flex:2}}>
                <Text style={{color: '#ffcc99', fontSize: 25, fontWeight:'bold'}}>Herding Wikia</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{fontWeight: "bold"}}/>

    </DrawerContentScrollView>
)


const Main = () => {

    
    const[fontsLoaded] = useFonts(customFonts);
    console.log(fontsLoaded)

    if(!fontsLoaded){
        return null;
    }
    return (

        
        
        //This will fill the vertical width of the screen
        <View style={{flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight}}>
            {/* <DirectoryScreen 
            
            campsites={campsites}
            onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            
            <DogInfoScreen
                campsite={
                    //We use the filter method since we are using an array of info;
                    //the method will filter out only the campsite that only user has selected
                    //we filter out the campsite with the matching campsite id to the campsite id that is selected
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            /> */}

            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={CustomDrawer}
                drawerStyle={{backgroundColor: '#CEC8FF'}}
                drawerType='slide'
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigator}
                    screenOptions={drawerScreenOptions}
                    options={{
                        title: "Home",
                        drawerIcon: ({ color}) => (
                            <Icon
                                name="home"
                                type="fontawesome"
                                size={24}
                                iconStyle={{width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Directory"
                    component={DirectoryNavigator}
                    options={{
                        title: "Dog Directory",
                        drawerIcon: ({ color}) => (
                            <Icon
                                name="dog"
                                type="material-community"
                                size={24}
                                iconStyle={{width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
        
    )
    //We are simply returning the Directory Screen with a single prop of our campsites

}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    smallLogo: {
        width: 50,
        height: 50
    },
    drawerHeader: {
        backgroundColor: "#33ccff",
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#ffcc99',
        fontSize: 25,
        fontWeight:'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    }
})

export default Main;