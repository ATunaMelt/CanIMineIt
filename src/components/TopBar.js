import { Navbar, Nav } from 'react-bootstrap';

function TopBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Can I mine it?</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link target='_blank' href='https://bitcoin.org/en/'>
            Bitcoin
          </Nav.Link>
          <Nav.Link target='_blank' href='https://ethereum.org/en/'>
            Ethereum
          </Nav.Link>
          <Nav.Link target='_blank' href='https://dogecoin.com/'>
            Doge
          </Nav.Link>
          <Nav.Link target='_blank' href='https://litecoin.com/en/'>
            Litecoin
          </Nav.Link>
          <Nav.Link target='_blank' href='https://www.bitcoin.com/'>
            Bitcoin Cash
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
