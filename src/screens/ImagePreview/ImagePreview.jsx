import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ImagePreview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Dotted box with white content */}
      <View style={styles.dottedBox}>
        <View style={styles.innerBox}>

          <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: '400', color: '#000000' }}>Image Preview</Text>
          </View>

          <View style={styles.innerInnerBox}>

            <View style={styles.previewImageContainer}>
              <Image
                source={require('./../../assets/images/imagepreviewscreen.png')}
                style={styles.previewImage}
                resizeMode="contain"
              />
            </View>

            {/* <View style={styles.previewImageContainer}>
              <Image
                source={require('./../../assets/images/imagepreviewscreen.png')}
                style={styles.previewImage}
                resizeMode="contain"
              />
            </View> */}



            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonFirst}
                onPress={() => {
                  navigation.navigate('ExtractedText')
                }}
              >
                <Image
                  source={require('./../../assets/images/buttongettext.png')}
                  style={styles.buttonImageFirst}
                  resizeMode="contain"
                />
                <Text style={styles.buttonTextFirst}>Get Text</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecond}
                onPress={() => {
                  navigation.navigate('MainScreen')
                }}
              >
                <Image
                  source={require('./../../assets/images/buttoncross.png')}
                  style={styles.buttonImageSecond}
                  resizeMode="contain"
                />
                <Text style={styles.buttonTextSecond}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF9FF',
  },
  dottedBox: {
    flex: 2,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 16,
    borderColor: '#FFFFFF',
    backgroundColor: '#DEF9FF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    backgroundColor: '#F0FCFF',
    width: '95%',
    height: '97%',
    borderRadius: 16,
    padding: 15,
  },
  innerInnerBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DEF9FF',
    height: 100,
    borderRadius: 16,
    padding: 10,
  },
  previewImageContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    // height: '100%',
    borderRadius: 16,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  // previewImageContainer: {
  //   width: '100%',
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  // previewImage: {
  //   width: 100,
  // },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  buttonFirst: {
    backgroundColor: '#7B7B7B',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonImageFirst: {
    marginRight: 10,
  },
  buttonTextFirst: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonSecond: {
    backgroundColor: '#EF3B3B',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonImageSecond: {
    marginRight: 10,
  },
  buttonTextSecond: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
    marginRight: 10,
  }
});

export default ImagePreview