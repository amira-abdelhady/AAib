import React from "react";
import Link from './../link/link';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default class Header extends React.Component {
  constructor() {
    super();
    console.log("from constructor"); //1

    this.state = {
      name: "Mona",
      title: "Developer",
      id: 1,
      skills: [],
    };
  }

  componentDidMount() {
    console.log("from componentDidMount"); //3

   
  }

  componentDidUpdate() {
    //updating
    console.log("from componentDidUpdate");
  }

  componentWillUnmount() {
    //clean up method
    console.log("from componentWillUnmount");
  }

changeName(){

    this.setState({ name: "Hend" });

}

  
  render() {
    console.log("rendering ..................."); //2
    return (
      <>

{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">link1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">link2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">link3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}


        <h1>Hello from Navbar</h1>
        <h2>Hello {this.state.name}</h2>
         <Link name="Home" href="http://www.google.com"/>
         <Link name="github" href="http://www.github.com"/>
         <Link name="Contact us" href="http://www.twitter.com"/>
         <Link name="Hello" href="http://www.twitter.com"/>
         <Link name="massenger" href="http://www.massenger.com"/>
         <Link name="Login" href="http://www.linkedin.com"/>
         <h1>{this.props.x}</h1>

         <button onClick={()=>{this.changeName()}}>Change name</button>
      </>
    );
  }
}
