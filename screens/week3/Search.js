import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markers, setMarkers] = useState([]);

  const handleSearch = () => {
    // Perform search based on searchQuery (e.g., using an API)
    // Update markers state with search results
    // For demonstration purposes, let's assume we have a mock function
    // that returns food locations around a given area
    const searchResults = mockSearchLocations(searchQuery);
    setMarkers(searchResults);
  };

  const mockSearchLocations = (query) => {
    // Mock function to return search results (markers)
    // Replace this with your actual search implementation
    return [
      { id: 1, name: 'Glamper Coffee & Craft Beer', latitude: 13.673260432749112, longitude: 100.52497449587939 },
      { id: 2, name: 'HOLIDAY PASTRY Flagship Store', latitude: 13.724747981611884, longitude: 100.50509122471564},
      { id: 3, name: 'Sydny', latitude: 13.789965029054784, longitude: 100.42749007116454 },
      { id: 4, name: 'DROP BY DOUGH', latitude: 13.686702170854856, longitude: 100.6108058107995},
      { id: 5, name: 'TANGIBLE', latitude: 13.699418353624159, longitude: 100.49913624190508 },
      { id: 6, name: 'LYNX Coffee', latitude: 13.720885885356159, longitude: 100.47620114207831},
      { id: 7, name: 'Craftsman Roastery & Brew Bar', latitude: 13.69910811211287, longitude: 100.52874669403165 },
      { id: 8, name: 'Third House Cafe', latitude: 13.709413880692724, longitude: 100.39614992471537},
      { id: 9, name: 'Dawn to Dusk', latitude: 13.733934060497528, longitude: 100.58746745201755 },
      { id: 10, name: 'Brooks Brunch & Bar', latitude: 13.89858993995306, longitude: 100.55366839588314},
      { id: 11, name: 'Bees Thing and Flower', latitude: 13.738781332097986, longitude: 100.5151829985069 },
      { id: 12, name: 'Com’on Bar', latitude: 13.740387624075517, longitude: 100.51774826547087},
      { id: 13, name: 'Buddha & Pals', latitude: 13.760464939079633, longitude: 100.51341248359952 },
      { id: 14, name: 'Ang Yi', latitude: 13.739635773600314, longitude: 100.51039238465599},
      { id: 15, name: 'ICI.BKK', latitude: 13.738614533057952, longitude: 100.56535136127106 },
      { id: 16, name: 'Custard Nakamura', latitude: 13.732976784135017, longitude: 100.56834526931199},
      // Add more mock markers as needed
    ];
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 15.8700,
          longitude: 100.9925,
          latitudeDelta: 15,
          longitudeDelta: 100,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.name}
          />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 5,
    elevation: 4,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default SearchScreen;