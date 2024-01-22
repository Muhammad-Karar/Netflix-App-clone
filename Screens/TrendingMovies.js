
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { image500 } from './MovieDb';
// import { useSelector, useDispatch } from 'react-redux';

var {width, height} = Dimensions.get('window');

const MovieCard = ({ item, handleClick }) => {
  // console.log('item.poster_path: ',item.poster_path);
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image source={{uri: image500(item.poster_path)}} 
      style={{
        width: width*0.88,
        height: height*0.3,
        borderRadius: 12,
      }} resizeMode='contain'/>
    </TouchableWithoutFeedback>
  );
};

export default function TrendingMovies({data}) {
  // const count = useSelector(state => state.counter.value);
  // const trenMoveData = useSelector(state => state.counter.trendingMovieState)
    const navigation = useNavigation();
    const handleClick = (item) =>{
        navigation.navigate('Movie', item);
    }
  return (
    <View style={styles.container}>

      <Text style={styles.text1}>Trending</Text>

      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick}/>}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.87}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1, `
    // backgroundColor: 'white', 
    // alignItems: 'center', 
    // justifyContent: 'center',
    marginBottom: 8,
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
  text1: {
    color: 'white',
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 4,
    fontWeight: 'bold'
  }
});




// import React from 'react';
// import { Text, StyleSheet, View, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
// import Video from 'react-native-video';
// import { image500 } from './MovieDb';

// var { width, height } = Dimensions.get('window');

// const MovieCard = ({ item, handleClick }) => {
//   const isVideoAvailable = typeof item.videoUri === 'string' && item.videoUri.trim() !== '';

//   return (
//     <TouchableWithoutFeedback onPress={() => handleClick(item)}>
//       <View>
//         {isVideoAvailable ? (
//           <Video
//             source={{ uri: item.videoUri }}
//             style={styles.video}
//             resizeMode="contain"
//             controls={true}
//           />
//         ) : (
//           <Image
//             source={{ uri: image500(item.poster_path) }}
//             style={styles.image}
//             resizeMode="contain"
//           />
//         )}
//         <Text style={styles.title}>
//           {item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title}
//         </Text>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default function TrendingMovies() {
//   const navigation = useNavigation();
//   const [trendingMovies, setTrendingMovies] = React.useState([]);

//   React.useEffect(() => {
//     const fetchTrendingData = async () => {
//       const trendingData = await fetchTrendingMovies();
//       const moviesWithVideos = await Promise.all(
//         trendingData.results.map(async (movie) => {
//           const videos = await fetchMovieVideos(movie.id);
//           const videoUri = videos.results[0]?.key || null;
//           return { ...movie, videoUri };
//         })
//       );
//       setTrendingMovies(moviesWithVideos);
//     };

//     fetchTrendingData();
//   }, []);

//   const handleClick = (item) => {
//     navigation.navigate('Movie', item);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>Trending</Text>
//       <Carousel
//         data={trendingMovies}
//         renderItem={({ item }) => (
//           <MovieCard item={item} handleClick={handleClick} videoUri={item.videoUri} />
//         )}
//         firstItem={1}
//         inactiveSlideOpacity={0.60}
//         sliderWidth={width}
//         itemWidth={width * 0.87}
//         slideStyle={{ display: 'flex', alignItems: 'center' }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 8,
//   },
//   text1: {
//     color: 'white',
//     fontSize: 20,
//     marginBottom: 15,
//     marginLeft: 15,
//     marginRight: 4,
//     fontWeight: 'bold',
//   },
// });
