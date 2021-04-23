import React from "react";
import { Item, Segment } from "semantic-ui-react";
import EventDetailedMap from "./EventDetailedMap";

export default function EventDetailedSidebar({ attendees, event }) {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        Location
      </Segment>

      <EventDetailedMap latLng={event.venue.latLng} />

      <Segment
        textAlign='center'
        style={{ border: "none", marginTop: "2em" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees.length} {attendees.length > 1 ? "People" : "Person"} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <Item key={attendee.id} style={{ position: "relative" }}>
              <Item.Image
                size='tiny'
                src={attendee.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{attendee.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
