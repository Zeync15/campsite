import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

const eventImageStyle = {
  maxHeight: "400px",
};

const eventContentStyle = {
  padding: "2em",
  width: "100%",
  height: "auto",
};

export default function EventDetailedHeader({ event }) {
  return (
    <Segment.Group>
      <Segment attached='top' style={{ padding: "0", border: "none" }}>
        <Image src={event.photo} fluid style={eventImageStyle} />
      </Segment>

      <Segment style={eventContentStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header size='huge' content={event.title} />
              <p style={{ marginTop: 3, marginLeft: 2 }}>
                Hosted by <strong>{event.hostedBy}</strong>
              </p>
              <p
                style={{
                  marginTop: 3,
                  marginLeft: 2,
                  color: "blue",
                  textTransform: "uppercase",
                }}
              >
                {event.category}
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>

        <Button
          as={Link}
          to={`/manage/${event.id}`}
          color='orange'
          floated='right'
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
}
