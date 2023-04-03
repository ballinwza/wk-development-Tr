import Link from "next/link"
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavItemDropdown = ({dropdownTitle, dropdownItemList}) =>{

    const handleScroll =()=> {
        const element = document.getElementById('ourService');
        element.scrollIntoView({ behavior: 'smooth' });
      }

    return(
        <NavDropdown title={dropdownTitle} id="basic-nav-dropdown">
            {dropdownItemList && dropdownItemList.map((item,index)=>{
                return(
                    <NavDropdown.Item key={index} href={item.itemLink}>
                        {item.itemTitle}
                    </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    )
}

export default NavItemDropdown