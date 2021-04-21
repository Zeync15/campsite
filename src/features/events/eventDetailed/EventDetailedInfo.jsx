import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function EventDetailedInfo() {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>Event Date</span>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>Event Description</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}
