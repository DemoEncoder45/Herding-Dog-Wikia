import { useState } from "react";
import {CAMPSITES} from '../shared/campsites'
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = ({navigation}) => {

    //The campsites array is the starting point and intial value
    const [campsites, setCampsites] = useState(CAMPSITES)


    //We create a function called renderDirectoryItem, we destructre the item
    //property in the parameter list and the rename it campsite since we
    //are using campsite data
    const renderDirectoryItem = ({item: campsite}) => {
        return (
            //the navigate methid helps use the navigation parameter and allows us to
            //navigate throguht the different screens, the first argument sends us to the screen
            //we want to go to (WHich must be named the exact same as the screen where the data is being sent
            //)and the second argument sends over any additional data.
            <ListItem onPress={() => navigation.navigate('Dogs', {campsite})} >
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>
                        {campsite.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    } 



    return(
        <FlatList
            //We change "props.campsites" to just the campsites state variable
            //Because we are no longer getting any campsite data through props.
            data={campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;