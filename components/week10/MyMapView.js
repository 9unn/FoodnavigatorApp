import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import LocationService from "../../services/LocationService";
import Markers from "./Markers";

export default function MyMapView(props) {  
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height; 
  
  const [markers, setmarkers] = useState([]);
  const loadmarkers = async () => {
    let url_endpoint = "";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      //   console.log(items);
      setmarkers(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { loadmarkers(); }, []);


  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}   
        showsUserLocation={true} 
        onUserLocationChange={(event) => {
            // console.log("LOCATION CHANGED : " , event);
            if (event.nativeEvent.coordinate) {
              let new_location = {
                coords: event.nativeEvent.coordinate,
                mocked: false,
                timestamp: event.nativeEvent.coordinate.timestamp,
              };
              //SET LOCATION
              props.setLocation(new_location);  
              //SEND TO SERVER
              //if (props.recordLocation) {
            //   console.log("SEND TO SERVER");
            //   LocationService.storeItem({
            //     user_id: "Panicha Taechasettakul",
            //     latitude: event.nativeEvent.coordinate.latitude,
            //     longitude: event.nativeEvent.coordinate.longitude,
            //   });
            //}
      
            }
        }}


      >  
       <Marker
          coordinate={{
            latitude: Number(13.673260432749112),
            longitude: Number(100.52497449587939),
          }}
          title={"Glamper Coffee & Craft Beer"}
          key={"Glamper"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.724747981611884),
            longitude: Number(100.50509122471564),
          }}
          title={"HOLIDAY PASTRY Flagship Store"}
          key={"HP"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.789965029054784),
            longitude: Number(100.42749007116454),
          }}
          title={"Sydny"}
          key={"sydny"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.686702170854856),
            longitude: Number(100.6108058107995),
          }}
          title={"DROP BY DOUGH"}
          key={"DBD"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.699418353624159),
            longitude: Number(100.49913624190508),
          }}
          title={"TANGIBLE"}
          key={"TANG"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.720885885356159),
            longitude: Number(100.47620114207831),
          }}
          title={"LYNX Coffee"}
          key={"LYNX"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.69910811211287),
            longitude: Number(100.52874669403165),
          }}
          title={"Craftsman Roastery & Brew Bar"}
          key={"CR"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.709413880692724),
            longitude: Number(100.39614992471537),
          }}
          title={"Third House Cafe"}
          key={"TH"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.733934060497528),
            longitude: Number(100.58746745201755),
          }}
          title={"Dawn to Dusk"}
          key={"DTD"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.89858993995306),
            longitude: Number(100.55366839588314),
          }}
          title={"Brooks Brunch & Bar"}
          key={"BBB"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.738781332097986),
            longitude: Number(100.5151829985069),
          }}
          title={"Bees Thing and Flower"}
          key={"BTF"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.740387624075517),
            longitude: Number(100.51774826547087),
          }}
          title={"Com’on Bar"}
          key={"Comon"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.86279412667837),
            longitude: Number(100.55651244497547),
          }}
          title={"Summer Rain Café"}
          key={"SRC"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.760464939079633),
            longitude: Number(100.51341248359952),
          }}
          title={"Buddha & Pals"}
          key={"BnP"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.739635773600314),
            longitude: Number(100.51039238465599),
          }}
          title={"Ang Yi"}
          key={"AY"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.738614533057952),
            longitude: Number(100.56535136127106),
          }}
          title={"ICI.BKK"}
          key={"ICI"}
        />
         <Marker
          coordinate={{
            latitude: Number(13.732976784135017),
            longitude: Number(100.56834526931199),
          }}
          title={"Custard Nakamura"}
          key={"CN"}
        />      
        <Marker
          coordinate={{
            latitude: Number(13.777862965210092),
            longitude: Number(100.54124554603197),
          }}
          title={"Landhaus Bakery"}
          key={"LB"}
        />      
        <Markers items={markers} />
      </MapView>

    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}
