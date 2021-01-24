import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Home = () => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  }, []);

  const onSuccess = (e) => {
    setResult(e);
    setScan(false);

    if (e.data.substring(0, 4) === 'http') {
      alert(e.data);
    }
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

  return !scan ? (
    <View style={styles.container}>
      {result && (
        <View>
          <Text>Data Dari QR code</Text>
          <Text>{JSON.stringify(result, null, 2)}</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>Temukan Penguna Lain</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <QRCodeScanner
      onRead={onSuccess}
      ref={scanner}
      reactivate={true}
      showMarker={true}
      bottomContent={
        <>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => scanner.current.reactive()}>
            <Text style={styles.buttonText}>SCAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTouchable2}
            onPress={() => setScan(false)}>
            <Text style={styles.buttonText2}>KEMBALI</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#32CB52',
  },
  textBold: {
    fontWeight: '500',
    color: '#324FFF',
  },
  buttonText: {
    fontSize: 21,
    color: '#fff',
  },
  buttonText2: {
    fontSize: 21,
    color: '#32CB52',
  },
  buttonTouchable: {
    padding: 16,
    backgroundColor: '#32CB52',
    borderRadius: 50,
    marginTop: 20,
  },
  buttonTouchable2: {
    padding: 8,
    borderColor: '#32CB52',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
  },
});

export default Home;
