import * as React from 'react';
import PharmacyCard from './PharmacyCard';
import MapMarker from './MapMaker';

const pharmacyData = {
  name: 'Daniel Pharmacy',
  reviews: 3,
  website: 'www.danielpharmacy.com',
  hours: '9:00am - 6:00am',
  phone: '+234 912 8937 948',
  location: 'Abc Mosan bus stop 5, st, Kasamu',
  imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/351a061a56e05c4400e48a2e1e48c7f2a768d654c431d1fa042a494956822156?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36'
};

const mapMarkers = [
  { id: 1, name: 'T.J Pharmacy' },
  { id: 2, name: 'De Royal Treat Pharmacy' },
  { id: 3, name: 'Daniel Pharmacy' },
];

function Pharmacy() {
  return (
    <div className="flex overflow-hidden flex-col px-6 pt-5 pb-9 bg-white max-md:px-5">
      <div className="mt-7 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="flex flex-col w-full text-xl tracking-tighter leading-tight text-black">
                <div className="w-full rounded-none max-md:pr-5">
                  Your Current location
                </div>
              </div>
              <PharmacyCard {...pharmacyData} />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow w-full text-xs tracking-tight bg-white max-md:mt-6 max-md:max-w-full">
              <div className="flex relative flex-col py-4 w-full rounded-xl min-h-[540px] min-h-[540px] max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0194ae181cf04c3928d61f24cb83e3b331393dde6ca0a642106e5e352d11b2b7?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
                  alt="Map view of pharmacy locations"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
                  {mapMarkers.map((marker) => (
                    <MapMarker
                      key={marker.id}
                      name={marker.name}
                      isSelected={marker.name === pharmacyData.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;

// import * as React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import PharmacyCard from "./PharmacyCard";

// // Define pharmacyData
// const pharmacyData = {
//   name: "Daniel Pharmacy",
//   reviews: 3,
//   website: "www.danielpharmacy.com",
//   hours: "9:00am - 6:00am",
//   phone: "+234 912 8937 948",
//   location: "Abc Mosan bus stop 5, st, Kasamu",
//   imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/351a061a56e05c4400e48a2e1e48c7f2a768d654c431d1fa042a494956822156?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
// };

// // Define mapMarkers
// const mapMarkers = [
//   { id: 1, name: "T.J Pharmacy", lat: 51.505, lng: -0.09 },
//   { id: 2, name: "De Royal Treat Pharmacy", lat: 51.51, lng: -0.1 },
//   { id: 3, name: "Daniel Pharmacy", lat: 51.495, lng: -0.08 },
// ];

// function Pharmacy() {
//   const [position, setPosition] = React.useState([51.505, -0.09]); // Default position

//   React.useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setPosition([position.coords.latitude, position.coords.longitude]);
//         },
//         (error) => {
//           console.error("Error fetching location", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   return (
//     <div className="flex overflow-hidden flex-col px-6 pt-5 pb-9 bg-white max-md:px-5">
//       <div className="mt-7 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col self-stretch my-auto max-md:mt-10">
//               <div className="flex flex-col w-full text-xl tracking-tighter leading-tight text-black">
//                 <div className="w-full rounded-none max-md:pr-5">
//                   Your Current location
//                 </div>
//               </div>
//               <PharmacyCard {...pharmacyData} />
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
//             <div className="flex overflow-hidden flex-col grow w-full text-xs tracking-tight bg-white max-md:mt-6 max-md:max-w-full">
//               <div className="flex relative flex-col py-4 w-full rounded-xl min-h-[540px] max-md:max-w-full">
//                 <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//                   <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   {mapMarkers.map((marker) => (
//                     <Marker key={marker.id} position={[marker.lat, marker.lng]}>
//                       <Popup>{marker.name}</Popup>
//                     </Marker>
//                   ))}
//                 </MapContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pharmacy;

// import React, { useState, useEffect } from "react";
// import PharmacyCard from "./PharmacyCard";
// import MapMarker from "./MapMarker";

// function Pharmacy() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [nearbyPlaces, setNearbyPlaces] = useState([]);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           fetchNearbyPlaces(position.coords.latitude, position.coords.longitude);
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   const fetchNearbyPlaces = async (lat, lng) => {
//     // This function should call an API (like Google Places API) to get nearby pharmacies/hospitals
//     // For demo purposes, we're using static data
//     const mockData = [
//       { id: 1, name: "T.J Pharmacy", lat: lat + 0.001, lng: lng + 0.001 },
//       { id: 2, name: "De Royal Treat Pharmacy", lat: lat - 0.001, lng: lng - 0.001 },
//       { id: 3, name: "Daniel Pharmacy", lat: lat + 0.002, lng: lng - 0.002 },
//     ];
//     setNearbyPlaces(mockData);
//   };

//   return (
//     <div className="flex flex-col px-6 pt-5 pb-9 bg-white max-md:px-5">
//       <div className="mt-7 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="flex flex-col w-[40%] max-md:w-full">
//             <div className="flex flex-col self-stretch">
//               <div className="text-xl font-bold">Your Current Location</div>
//               <PharmacyCard name="Daniel Pharmacy" location={userLocation ? `Lat: ${userLocation.lat}, Lng: ${userLocation.lng}` : "Fetching location..."} />
//             </div>
//           </div>
//           <div className="flex flex-col w-[60%] max-md:w-full">
//             <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
//               {userLocation ? (
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   style={{ border: 0 }}
//                   src={`https://www.google.com/maps/embed/v1/search?key=YOUR_GOOGLE_MAPS_API_KEY&q=pharmacy&center=${userLocation.lat},${userLocation.lng}&zoom=14`}
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <p>Loading map...</p>
//               )}
//               <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
//                 {nearbyPlaces.map((marker) => (
//                   <MapMarker key={marker.id} name={marker.name} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pharmacy;