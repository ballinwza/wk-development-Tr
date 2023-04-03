import NavItemDropdown from "./NavItemDropdown"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarTypeA = () =>{
  const title = ['HOME', 'ABOUT US', 'NEWS', 'CONTACT US']
  const itemListInDropdownMenu = [
    [
      {itemLink : '/', itemTitle: 'Home A'},
      {itemLink : '/', itemTitle: 'Home B'}
    ],
    'ABOUT US'
    ,
    [
      {itemLink : '/', itemTitle: 'News A'},
      {itemLink : '/', itemTitle: 'News B'}
    ],
    [
      {itemLink : '/', itemTitle: 'Contact A'},
      {itemLink : '/', itemTitle: 'Contact B'}
    ]
  ]

  const handleScroll =()=> {
    const element = document.getElementById('ourService');
    element.scrollIntoView({ behavior: 'smooth' });
  }

    return(
      <div className="primary-navbar-container">
        <Navbar expand='lg' variant="dark">
          <div>
            <Navbar.Brand href='/'> {`</> Developer`} </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>

              {/* {itemListInDropdownMenu && itemListInDropdownMenu.map((item,index)=>{
                return(
                  <NavItemDropdown key={index} dropdownTitle={title[index]} dropdownItemList={item}/>
                )
              })} */}

              {
                itemListInDropdownMenu.map((item,index)=>{
                  if(item == title[1]){
                    return(
                      <Nav.Item key={index}>
                        <Nav.Link onClick={handleScroll}>{item}</Nav.Link>
                      </Nav.Item>
                    )
                  }else{
                    return(
                      <NavItemDropdown key={index} dropdownTitle={title[index]} dropdownItemList={item}/>
                    )
                  }
                })
              }

              

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}

export default NavbarTypeA