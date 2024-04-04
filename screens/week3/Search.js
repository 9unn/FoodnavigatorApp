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
      { id: 1, name: 'Restaurant A', latitude: 37.78825, longitude: -122.4324 },
      { id: 2, name: 'Restaurant B', latitude: 37.7749, longitude: -122.4194 },
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
    borderRadius: 20,
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
