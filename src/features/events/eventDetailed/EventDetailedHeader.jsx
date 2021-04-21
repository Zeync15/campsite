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

export default function EventDetailedHeader() {
  return (
    <Segment.Group>
      <Segment attached='top' style={{ padding: "0" }}>
        <Image
          src={
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          fluid
          style={eventImageStyle}
        />
      </Segment>

      <Segment style={eventContentStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header size='huge' content='Event Title' />
              <p style={{ marginTop: 3, marginLeft: 2 }}>
                Hosted by <strong>Bob</strong>
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment attached='bottom'>
        <Button>Cancel My Place</Button>
        <Button color='teal'>JOIN THIS EVENT</Button>

        <Button as={Link} to={`/manage/`} color='orange' floated='right'>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
}
