import { Text, StyleSheet, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { firebase } from '../Firebase/Config';
import { useNavigation } from '@react-navigation/native';
import { image342, image500 } from './MovieDb';

var { width, height } = Dimensions.get('window');
export default function TopRatedM({ title, data }) {
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.cont2}>
                <Text style={styles.text1}>{title}</Text>
                <TouchableOpacity>
                    <Text style={styles.Mtext}>see All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item)}>
                                <View style={styles.cont3}>
                                <Image source={{uri: image342(item.poster_path)}}
                                        style={{
                                            width: width * 0.36,
                                            height: height * 0.25,
                                            borderRadius: 12,
                                        }} resizeMode='contain' />
                                    <Text style={{ color: 'white', marginLeft: 15 }}>
                                        {
                                            item.title.length > 14 ? item.title.slice(0, 14) + '...' : movieName
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        // backgroundColor: 'white', 
        // alignItems: 'center', 
        // justifyContent: 'center',
        marginBottom: 8,

    },
    cont2: {
        marginLeft: 15,
        marginRight: 10,
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
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
        fontWeight: 'bold',

    },
    Mtext: {
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',

    },
    cont3: {
        marginRight: 4,
        marginTop: 10,    // Add vertical space at the top
        marginBottom: 10, // Add vertical space at the bottom
    },
});
