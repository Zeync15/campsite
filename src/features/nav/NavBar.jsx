import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={Link} exact to='/' header>
          <Icon name='accusoft' size='large' />
          CampSite
        </Menu.Item>
        <Menu.Item as={Link} to='/events' name='Events' />
        {authenticated && (
          <Menu.Item as={Link} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
