import React from 'react';
import useToggle from "./helpers/useToggle"
import {
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  CloseButton,
} from 'reactstrap';
import "./NavBar.css"


// NavBar component takes in a function to logout, user data and an array of other animal data
// it renders a navbar based on if a user is logged in or not

function NavBar({ logout, user, other }) {
  const [isOCOpen, toggleOC] = useToggle()
  console.log(user)
  return (
    <div>
      {user ?
        <Navbar >
          <NavbarBrand href="/">Petly</NavbarBrand>

          <NavLink href="/user">My Account</NavLink>

          <NavLink onClick={logout}>Log out</NavLink>

          <div>
            <Button
              className="user-btn"
              color="primary"
              onClick={toggleOC}
            >
              Search
            </Button>
            <Offcanvas
              direction="end"
              isOpen={isOCOpen}
            >
              <OffcanvasHeader onClick={toggleOC}>
                <h2 className='oc-header'>
                  <NavLink href='/' >Petly</NavLink>
                </h2>
                <CloseButton className='oc-header'></CloseButton>
              </OffcanvasHeader>
              <OffcanvasBody>
                <div>

                  <h3>Welcome Back, {user.firstName}</h3>
                </div>
                <br />
                <h3>searchs</h3>

                <NavLink href="/search/Dogs">Dogs</NavLink>

                <NavLink href="/search/Cats">Cats</NavLink>
                <NavLink href="/search/Birds">Birds</NavLink>
                <NavLink href="/search/Rabbits">Rabbits</NavLink>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Barnyard
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.barnyard.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Reptile
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.reptile.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Small & Furry
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.smallfurry.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Scales, Shells & Other
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.scalesshellsother.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavLink href="/orgs">Organizations</NavLink>
              </OffcanvasBody>
            </Offcanvas>
          </div>


        </Navbar>
        :
        <Navbar >
          <NavbarBrand href="/">Petly</NavbarBrand>

          <NavLink href="/signup">Signup</NavLink>

          <NavLink href="/login">Login</NavLink>

          <div>
            <Button
              className="user-btn"
              color="primary"
              onClick={toggleOC}
            >
              Search
            </Button>
            <Offcanvas
              scrollable
              direction="end"
              isOpen={isOCOpen}
            >
              <OffcanvasHeader onClick={toggleOC}>
                <h2 className='oc-header'>
                  <NavLink href='/' >Petly</NavLink>
                </h2>
                <CloseButton className='oc-header'></CloseButton>
              </OffcanvasHeader>
              <OffcanvasBody>
                <div>

                  <h3>Welcome, Guest</h3>
                </div>
                <br />
                <h3>searchs</h3>

                <NavLink href="/search/Dogs">Dogs</NavLink>

                <NavLink href="/search/Cats">Cats</NavLink>
                <NavLink href="/search/Birds">Birds</NavLink>
                <NavLink href="/search/Rabbits">Rabbits</NavLink>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Barnyard
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.barnyard.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Reptile
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.reptile.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Small & Furry
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.smallfurry.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    Scales, Shells & Other
                  </DropdownToggle>
                  <DropdownMenu end>
                    {other.scalesshellsother.map((item, idx) => {
                      return (
                        <DropdownItem href={`/search/${item}`} key={idx}>{item}</DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavLink href="/orgs">Organizations</NavLink>

              </OffcanvasBody>
            </Offcanvas>
          </div>
        </Navbar>}

    </div>
  );
}

export default NavBar;