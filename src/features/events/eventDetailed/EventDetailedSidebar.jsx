import React from "react";
import { Image, Item, Segment } from "semantic-ui-react";

export default function EventDetailedSidebar() {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='green'
      >
        Location
      </Segment>
      <Segment attached style={{ padding: "0" }}>
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
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item style={{ position: "relative" }}>
            <Item.Image size='tiny' src='/assets/user.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <span>Tom</span>
              </Item.Header>
            </Item.Content>
          </Item>
          <Item style={{ position: "relative" }}>
            <Item.Image size='tiny' src='/assets/user.png' />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <span>Bob</span>
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </>
  );
}
