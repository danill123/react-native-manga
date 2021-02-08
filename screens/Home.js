import React from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    TouchableOpacity
  } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-paper';
import { Button } from 'react-native-paper';

// import actions
import { get_manga } from '../redux/actions/manga_actions';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      let { fetchManga } = this.props
      let { list_data } = this.props.mangaState
      if(list_data.length <= 0) {
        fetchManga(this.props.mangaState.endpoint)
      }
    }
    
    renderItem = ({item, key}) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => this.props.navigation.navigate('Detail', item)}
          >
            <Card style={{margin: 4.5, elevation: 3.5, width: 170, height: 264}}>
                <Card.Cover source={{uri: `${item["attributes"]["posterImage"]["small"]}`}} />
                <Card.Actions>
                    <Text>{`${item["attributes"]["titles"]["en_jp"]}`}</Text>
                </Card.Actions>
            </Card>
          </TouchableOpacity>
        );
    }

    render() {

        let { list_data , error, endpoint } = this.props.mangaState
        let { fetchManga } = this.props

        if(error == true) {
          return(
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
                  <Text>
                      Error when fetching the data! 
                  </Text>
                  <Button 
                    onPress={() => fetchManga(this.props.mangaState.endpoint) }
                    mode="outline"
                  >
                    Try Again
                  </Button>
             </View>
          );
        } else if(list_data.length > 0) {
          return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <FlatList 
                horizontal={false}
                numColumns={2}
                data={list_data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                />

                {/* add floating button */}
                <TouchableOpacity
                onPress={() => fetchManga(endpoint)}
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:55,
                    position: 'absolute',                                          
                    bottom: 10,                                                    
                    right: 10,
                    height:55,
                    backgroundColor:'#fff',
                    borderRadius:100,
                    elevation: 5
                  }} >
                    <Text style={{fontSize: 50, textAlign: 'center', textAlignVertical: 'center', marginBottom: 4}}>+</Text>
                </TouchableOpacity>
            </SafeAreaView> 
          );
        }

        return(
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Loading, Please Waiting
                </Text>
          </View>
        );
    }
}

const mapStateToProps = state => {
  return {
    mangaState : state.manga_state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchManga: (endpoint) => dispatch(get_manga(endpoint))
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);