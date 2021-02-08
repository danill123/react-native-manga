import React, { Component } from 'react';
import {
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    View
  } from 'react-native';

  import { Title } from 'react-native-paper';
  import { Subheading } from 'react-native-paper'

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { attributes } = this.props.route.params;

        return(
            <ScrollView>
                <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image source={{uri : `${attributes.posterImage.tiny }`}} style={{width: 360, height: 150, top: 1, opacity: 0.2, backgroundColor: 'black'}}/>

                    <View style={{flex: 2, flexDirection: 'row', position: 'absolute', top: 70, left: 30}}>
                        <Image source={{uri : `${attributes.posterImage.small}`}} style={{width: 90, height: 140, borderRadius: 10}}/>
                        <View style={{ marginLeft: 5}}>
                            <Title style={{width: 230}}>{attributes.titles.en ? attributes.titles.en : attributes.titles.en_us}</Title>
                            <Subheading>Average Rating : {attributes.averageRating ? attributes.averageRating : 'non'}</Subheading>
                        </View>
                    </View>

                    <View style={{marginTop: 65}}>
                        <Title>Attributes</Title>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 8}}>
                                <Text>Start Date : {attributes.startDate ? attributes.startDate : 'unknown'}</Text>
                                <Text>End Date : {attributes.endDate ? attributes.endDate : 'unknown'}</Text>
                                <Text>Next Release : {attributes.nextRelease ? attributes.nextRelease : 'unknown'}</Text>
                            </View>
                            <View style={{marginLeft: 8}}>
                                <Text>Popularity Rank : {attributes.popularityRank ? attributes.popularityRank : 'unknown'}</Text>
                                <Text>Rating Rank : {attributes.ratingRank ? attributes.ratingRank : 'unknown'}</Text>
                                <Text>Ege Rating Guide : {attributes.ageRatingGuide ? attributes.ageRatingGuide : 'unknown'}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{padding: 20,}}>
                        <Title>Synopsys</Title>
                        <Text>
                            {attributes.description}
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}