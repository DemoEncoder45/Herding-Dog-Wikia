import {Text, View} from "react-native"
import { Card } from "react-native-elements"


//we deconstruct the campsite property that we get from DogInfoScreen
const RenderDogs = ({campsite}) => {

    //We will use Conditional Rendering; this means that what we render 
    //will only be there if a condition is meet

    //This will return false if it is null or undefined
    if (campsite){
        return (
            //this gets rid of the padding around the card
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={campsite.image}>
                    <View style={{justifyContent: "center", flex: 1}}>
                        <Text
                            style={{
                                color:'white',
                                textAlign:'center',
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>

                    </View>
                </Card.Image>
                <Text style={{margin:20}}>
                    {campsite.description}
                </Text>
            </Card>
        )
    }
    //This is if the condition returns false.
    return <View/>
}

export default RenderDogs;