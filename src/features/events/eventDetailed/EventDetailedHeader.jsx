import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
import {
  addUserAttendance,
  cancelUserAttendance,
} from "../../../app/firestore/firestoreService";

const eventImageStyle = {
  maxHeight: "400px",
};

const eventContentStyle = {
  padding: "2em",
  width: "100%",
  height: "auto",
};

export default function EventDetailedHeader({ event, isHost, isGoing }) {
  const [loading, setLoading] = useState(false);

  async function handleUserJoinEvent() {
    setLoading(true);
    try {
      await addUserAttendance(event);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserLeaveEvent() {
    setLoading(true);
    try {
      await cancelUserAttendance(event);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

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
                Hosted by{" "}
                <strong>
                  <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
                </strong>
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

      <Segment attached='bottom' clearing>
        {!isHost && (
          <>
            {isGoing ? (
              <Button onClick={handleUserLeaveEvent} loading={loading}>
                Cancel My Place
              </Button>
            ) : (
              <Button
                onClick={handleUserJoinEvent}
                loading={loading}
                color='teal'
              >
                JOIN THIS EVENT
              </Button>
            )}
          </>
        )}

        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color='orange'
            floated='right'
          >
            Manage Event
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
}
