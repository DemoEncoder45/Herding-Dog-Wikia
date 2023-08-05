import { useState } from 'react'
import {PARTNERS} from "../shared/facts"
import { Card } from 'react-native-elements'
import {ARTICLE} from '../shared/newsArticles'
import { CAMPSITES } from '../shared/campsites'
import { PROMOTIONS } from '../shared/newsArticles'
import {TouchableOpacity, ScrollView, StyleSheet, Linking, Text, View} from 'react-native'


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

const FeaturedArticle = ({article}) => {
    if (article) {
        return (
            <Card containerStyle={{padding:1, borderRadius: 10}}>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontFamily:'Underdog-Regular', fontSize: 18, margin: 5}}>Featured Article</Text>
                </View>

                <Card.Divider/>

                <TouchableOpacity>
                    <Card.Image containerStyle={{borderRadius: 5, padding: 0, marginLeft: 10, marginRight: 10}} source={article.image} onPress={() => Linking.openURL('https://www.akc.org/sports/herding/articles/livestock-and-your-puppy/')} />
                </TouchableOpacity>
                <Text style={styles.cardTextHeader}>{article.articleTitle} </Text>

                <Text style={{fontFamily: 'GoodDog', textAlign:'center'}}>{article.description}</Text>

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
    const [articles, setArticles] = useState(ARTICLE)


    const featCampsites = campsites.find((item) => item.featured)
    const featPartners = partners.find((item) => item.featured)
    const featArticles = articles.find((article) => article.featured)


    return (
        //Scrollview will load all of its child components at once
        //Unlike Flatlist which is called lazy loading.
        //Lazy loading will only load a part of the list at a time.
        //Which are things that are on the screen or about to be on the screen.
        //Things off screen will be expunged from the memory for better and effiecient loading.
        <ScrollView >

            <Card >
                <Card.Title>Welcome To Herding Wikia!</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/logos/png/logo-color.png')} style={{borderRadius: 4, padding: 5}}/>
                <Text style={styles.cardStyle}>
                    Hello! Welcome to the Herding Wikia and small 
                    site for your informational needs on canines that 
                    herd by day and guard by night! Take a look around why dontcha!
                </Text>
            </Card>

            <FeaturedArticle article={featArticles}/>

            <Card>
                <Card.Title style={styles.cardHeader}>Pooch of The Month</Card.Title>
                <Card.Divider/>
            </Card>

            
            <FeaturedItem item={featPartners} />
            <FeaturedItem item={featCampsites} />
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 5,
        flex: 1,
        fontFamily: 'GoodDog'
    },
    cardHeader: {
        fontFamily: 'GoodDog'
    },
    cardTextHeader: {
        padding: 0,
        margin: 5 ,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Underdog-Regular'
    }
})

export default HomeScreen