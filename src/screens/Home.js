import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const Home = () => {
  const postages = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={postages}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerOne}>
              <Text style={styles.containerTwo}>My Name</Text>
              <View style={styles.img}>
                <Text>{item.title}</Text>
              </View>
              <View style={styles.imgPlacing}>
                <Text>The picture comes here</Text>
                <Text>I Didn't put any picture</Text>
                <Text>So I'm putting some texts</Text>
                <Text>Maybe it can works for now</Text>
                <Text>It's a tiring woork, but...</Text>
                <Text>It's better than try to find</Text>
                <Text>Some other solution yet...</Text>
              </View>
              <View style={styles.imgBehavior}>
                <Text>donnot remember</Text>
              </View>
              <View style={styles.imgDescription}>
                <Text>Owner description</Text>
              </View>
              <View style={styles.imgTexts}>
                <Text>donnot remember</Text>
              </View>
              <View style={styles.evaluationText}>
                <Text>Photo evaluation (starting from 5 stars)</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerOne: {
    flex: 1
  },
  containerTwo: {
    height: 70,
    paddingTop: 30,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 275
  },
  imgPlacing: {
    flex: 1,
    backgroundColor: '#eee'
  },
  imgBehavior: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: 5,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  imgDescription: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgTexts: {
    padding: 5
  },
  evaluationText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Home;
