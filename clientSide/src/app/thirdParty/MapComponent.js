// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapComponent = ({ latitude, longitude }) => {
//   useEffect(() => {
//     // Ensure Leaflet icons work correctly by adjusting their paths
//     delete L.Icon.Default.prototype._getIconUrl;

//     L.Icon.Default.mergeOptions({
//       iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
//       iconUrl: require("leaflet/dist/images/marker-icon.png").default,
//       shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
//     });
//   }, []);

//   const position = [latitude, longitude];

//   return (
//     <div className="map-container" style={{ height: "200px", width: "100%" }}>
//       <MapContainer
//         center={position}
//         zoom={15}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={position}>
//           <Popup>{`Latitude: ${latitude}, Longitude: ${longitude}`}</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  useEffect(() => {
    // Ensure Leaflet icons work correctly by adjusting their paths
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);
  const customIcon = new L.Icon({
    iconUrl:
      "data:image/png;base64,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",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const position = [latitude, longitude];

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{`Latitude: ${latitude}, Longitude: ${longitude}`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
