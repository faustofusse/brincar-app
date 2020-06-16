import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapboxGL from '@react-native-mapbox-gl/maps';
import ShapeSource from './shapeSource';

MapboxGL.setAccessToken('pk.eyJ1IjoiZmF1c3RvZnVzc2UiLCJhIjoiY2s1bWw1NW83MDZ5ODNtdGY5YjhsMTNkciJ9.yCvuHxaKggPXQGemg5c2_A');

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    await ensureLocationPermission();
  }

  render() {
    return (
      <MapboxGL.MapView
        style={{ flex: 1, width: '100%' }}
        styleURL={MapboxGL.StyleURL.Street}
        logoEnabled={true}
        showUserLocation={false}>

        <MapboxGL.UserLocation />

        <MapboxGL.Camera
          // centerCoordinate={[-73.985353, 40.754073]}
          zoomLevel={5}
          animationMode={'flyTo'}
          animationDuration={6000}
          followUserLocation={true}
          followUserMode={'normal'} />

        <ShapeSource />

      </MapboxGL.MapView>
      // <View><Text>Hola soy fausto</Text></View>
    );
  }
}

async function ensureLocationPermission() {
  if (Platform.OS === 'web' || Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version < 23)) {
    return true;
  }
  const isGranted = await MapboxGL.requestAndroidLocationPermissions()
  console.log(isGranted ? 'Ubicacion permitida' : 'Ubicacion NO permitida');
  return isGranted
}

// const MapScreen = () => {
//   console.log(hasLocationPermission())

// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default MapScreen;
