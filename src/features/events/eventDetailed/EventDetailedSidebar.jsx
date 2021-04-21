import React from "react";
import { Image, Item, Segment } from "semantic-ui-react";

export default function EventDetailedSidebar({ attendees }) {
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
      <Segment attached style={{ padding: "0", border: "none" }}>
        {/* NEED TO BE CHANGE TO MAP */}
        <Image
          src={
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          fluid
        />
      </Segment>

      <Segment
        textAlign='center'
        style={{ border: "none" }}
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
