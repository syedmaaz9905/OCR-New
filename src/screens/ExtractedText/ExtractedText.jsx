import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const test = `یہ مذاکرات ہفتہ کو ہونا تھے لیکن اسے صبح تک ملتوی کر دیا گیا۔ دونوں جماعتوں نے جلد مذاکرات کرنے پر اتفاق کیا ہے۔

اس بات چیت میں سربراہی اجلاس پر بھی اتفاق کیا گیا ہے۔

باخبر سیاسی ذرائع نے دی نیوز کو بتایا کہ قومی اسمبلی کے تین آزاد ارکان کی شمولیت اور ہفتہ کی شام کراچی سے لاہور مذاکرات کے لیے ایم کیو ایم پاکستان کے اعلیٰ سطحی وفد کی شمولیت نے مسلم لیگ (ن) کو اخلاقی تقویت فراہم کی ہے۔`

const ExtractedText = () => {
  return (
    <View style={styles.container}>
      {/* Dotted box with white content */}
      <View style={styles.dottedBox}>
        <View style={styles.innerBox}>

          <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 18, fontFamily: 'Inter', fontWeight: '400', color: '#000000' }}>Image Preview</Text>
          </View>

          <SafeAreaView>
            <View style={styles.innerInnerBox}>


              <View style={styles.innerTextContainer}>
                <TextInput
                  style={styles.previewText}
                  value={test}
                  multiline
                />
              </View>

              <View style={{display: 'flex', flexDirection: 'column'}}>
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Copy Text</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Download</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                  <View style={styles.buttonTextAudio}>
                    <Text style={styles.buttonText}>Text Audio</Text>
                    <View style={styles.playPauseContainer}>
                      <TouchableOpacity style={styles.playPauseButton}>
                        {/* Your Play Icon */}
                        <Icon name="play-circle" size={25} color="#FFFFFF" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.playPauseButton}>
                        {/* Your Pause Icon */}
                        <Icon name="pause-circle" size={25} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>


                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.buttonFirst}>
                    <Image
                      source={require('./../../assets/images/buttonhome.png')}
                      style={styles.buttonImageFirst}
                      resizeMode="contain"
                    />
                    <Text style={styles.buttonTextFirst}>Home</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonSecond}>
                    <Image
                      source={require('./../../assets/images/buttonexit.png')}
                      style={styles.buttonImageSecond}
                      resizeMode="contain"
                    />
                    <Text style={styles.buttonTextSecond}>Exit</Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>
          </SafeAreaView>
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
    height: '95%',
    borderRadius: 16,
    padding: 10,
  },
  innerTextContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    height: 350,
    padding: 15,
    borderRadius: 16,
    flex: 1
  },
  previewText: {
    // width: '100%',
    color: '#000',
    // height: 420,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7B7B7B',
    borderRadius: 10,
    padding: 7,
    width: '47%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  buttonTextAudio: {
    backgroundColor: '#C1C1C1',
    borderRadius: 10,
    padding: 7,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  playPauseContainer: {
    flexDirection: 'row',
  },
  playPauseButton: {
    marginLeft: 5,
  },
  buttonFirst: {
    backgroundColor: '#7B7B7B',
    borderRadius: 10,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
    // marginTop: 10,
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
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '47%',
    // marginTop: 10,
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

export default ExtractedText