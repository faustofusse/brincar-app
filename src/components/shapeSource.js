import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { View } from "react-native";

const icon = {
  iconImage: require("./location.png"),
  iconAllowOverlap: false,
  iconSize: 0.1,
};
//-34.56591
//-58.473354
class ShapeSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceSave: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: "9d10456e-bdda-4aa9-9269-04c1667d4552",
            properties: {
              icon: "exampleIcon",
            },
            geometry: {
              type: "Point",
              coordinates: [-120.08499, 37.426929],
            },
          },
          {
            type: "Feature",
            id: "9d10456e-bdda-4aa9-9269-04c1667d4553",
            properties: {
              icon: "exampleIcon",
            },
            geometry: {
              type: "Point",
              coordinates: [-34.56591, -58.473354],
            },
          },
          {
            type: "Feature",
            id: "9d10456e-bdda-4aa9-9269-04c1667d45522",
            properties: {
              icon: "exampleIcon",
            },
            geometry: {
              type: "Point",
              coordinates: [-121.08499, 37.426929],
            },
          },
          {
            type: "Feature",
            id: "9d10456e-bdda-4aa9-9269-04c1667d45523",
            properties: {
              icon: "exampleIcon",
            },
            geometry: {
              type: "Point",
              coordinates: [-122.08499, 36.426929],
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <View>
        <MapboxGL.ShapeSource id={'exapmle'} hitbox={{width:20, height: 20}}
         onPress={()=>console.log('ICONOOOOO')} shape={this.state.dataSourceSave}>
             <MapboxGL.SymbolLayer id={'exampleIcon'}
              style={icon}>

             </MapboxGL.SymbolLayer>
         </MapboxGL.ShapeSource>
      </View>
    );
  }
}

export default ShapeSource;
