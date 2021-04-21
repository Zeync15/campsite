import React from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Icon
            name='accusoft'
            size='massive'
            style={{ marginBottom: 12, marginRight: 20 }}
          />
          CampSite
        </Header>
        <Button onClick={() => history.push("/events")} size='huge' inverted>
          Get started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
  );
}
