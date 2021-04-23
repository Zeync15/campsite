import React from "react";
import { Icon, Segment } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

function Marker() {
  return <Icon name='marker' size='big' color='red' />;
}

export default function EventDetailedMap({ latLng }) {
  const zoom = 14;

  return (
    <Segment
      attached
      style={{
        padding: "0",
        border: "none",
        boxShadow: "0 1px 2.5px 0 rgba(34, 36, 38, 0.15)",
      }}
    >
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDCZZm-6IgPCn0h1YHSfcrRtVPk4aR6svM" }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
