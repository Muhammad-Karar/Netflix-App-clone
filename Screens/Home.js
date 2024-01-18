import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { firebase } from '../Firebase/Config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from 'react-native-vector-icons';
import { useEffect, useState } from 'react';
import TrendingMovies from './TrendingMovies';
import MovieList from './MovieList';
import TopRatedM from './TopRatedM';
import { fetchTrendingMovies } from './MovieDb';
import { fetchUpcomingMovies } from './MovieDb';
import { fetchTopRatedMovies } from './MovieDb';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [toprated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getTrendingMovies();
    getUpComingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    // console.log('got ', data);
    if(data && data.results) setTrending(data.results);
    setLoading(false);
  }

  const getUpComingMovies = async ()=>{
    const data = await fetchUpcomingMovies();
    // console.log('got ', data);
    if(data && data.results) setUpComing(data.results);
    setLoading(false);
  }

  const getTopRatedMovies = async ()=>{
    const data = await fetchTopRatedMovies();
    // console.log('got ', data);
    if(data && data.results) setTopRated(data.results);
    setLoading(false);
  }


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginBottom: 12 }}>

        <StatusBar style="light" />

        <View style={styles.topHeader}>

          <Image source={require('../assets/logo.png')} style={styles.logo} />

          <Text style={styles.headerText}> <Text style={styles.Mtext}>M</Text>ovies</Text>

          <TouchableOpacity>
            <FontAwesome name='search' size={30} color='white' />
          </TouchableOpacity>

        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>

      { trending.length>0 && <TrendingMovies data={trending}/>}

      <MovieList title="Upcoming" data={upcoming}/>

      <TopRatedM title="TopRated" data= {toprated}/>

      </ScrollView>

      {/* <TouchableOpacity style={styles.button} onPress={() => {firebase.auth().signOut()}}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(0, 0, 0, 0.9)`,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 4,
    borderRadius: 6,
    width: '95%',
    height: '10%',
    marginTop: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    // letterSpacing: 3,
  },
  Mtext: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',

  },
  topHeader: {
    position: 'relative',
    // marginTop: '10%',
    marginLeft: 4,
    marginRight: 10,
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // zIndex: 3,
    // height: '10%',
    // backgroundColor: 'white'
  },
  logo: {
    width: 50,
    height: 50,
    // marginLeft: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

});
