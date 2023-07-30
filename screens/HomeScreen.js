import { useState } from 'react'
import {PARTNERS} from "../shared/facts"
import { Card } from 'react-native-elements'
import { CAMPSITES } from '../shared/campsites'
import { PROMOTIONS } from '../shared/newsArticles'
import {ScrollView, StyleSheet, Text, View} from 'react-native'

const FeaturedItem = ({item}) => {
    if (item) {
        return(
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={item.image}>
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text
                        
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                        
                        >

                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text>

                </Text>
            </Card>
        )
    }
    return <View/>
}


const HomeScreen = () => {

    //We use these to render the data since React will see them when it updates and
    //renders.
    const [partners, setPartners] = useState(PARTNERS)
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);

    const featPromotions = promotions.find((item) => item.featured)
    const featCampsites = campsites.find((item) => item.featured)
    const featPartners = partners.find((item) => item.featured)


    return (
        //Scrollview will load all of its child components at once
        //Unlike Flatlist which is called lazy loading.
        //Lazy loading will only load a part of the list at a time.
        //Which are things that are on the screen or about to be on the screen.
        //Things off screen will be expunged from the memory for better and effiecient loading.
        <ScrollView >

            <Card>
                <Card.Title>Welcome To Herding Wikia!</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/logos/png/logo-color.png')} style={{borderRadius: 4, padding: 5}}/>
                <Text style={styles.cardStyle}>
                    Hello! Welcome to the Herding Wikia and small 
                    site for your informational needs on canines that 
                    herd by day and guard by night! Take a look around why dontcha!
                </Text>
            </Card>

            <Card>
                <Card.Title>Featured Article</Card.Title>
                <Card.Divider/>
            </Card>

            <Card>
                <Card.Title>Pooch of The Month</Card.Title>
                <Card.Divider/>
            </Card>


            <FeaturedItem item={featPartners} />
            <FeaturedItem item={featCampsites} />
            <FeaturedItem item={featPromotions} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 5,
        flex: 1
    }
})

export default HomeScreen