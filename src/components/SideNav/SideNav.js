import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button, Container, Offcanvas } from 'react-bootstrap';  
import {useState} from 'react'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss'


const SideNav = () => {
    const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  
  return (  
    <>  
    <Container className='p-0 sidenav'>  
      <Button className='sidenav__button' onClick={showSidebar}>  
      <FontAwesomeIcon icon={faBars} className='fa-lg'/>
      </Button>  
      <Offcanvas placement='start' show={show} onHide={closeSidebar} className="sidenav__modal">  
        <Offcanvas.Header closeButton className='sidenav__modal--header'>  
          <Offcanvas.Title className='sidenav__modal--menu'>SIGN IN</Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body className='sidenav__modal--body'>
        <ul className='sidenav__list'>  
        <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/favorites"} className='sidenav__link'>Favorites & Watchlist</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/cruises"} className='sidenav__link'>Find a Cruise</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/cruise-deals"} className='sidenav__link'>Cruise Deals</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/cruise-ships"} className='sidenav__link'>Cruise Ships</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/cruise-destinations"} className='sidenav__link'>Destinations</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/account/signin"} className='sidenav__link'>Manage My Cruise​</a></li>
            {/* <li className='sidenav__item'><Link to={""} className='sidenav__link'>New to cruise!!</Link></li> */}
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/faq"} className='sidenav__link'>FAQ</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/cococay-cruises"} className='sidenav__link'>Perfect Day at CocoCay</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/utopia-of-the-seas"} className='sidenav__link'>The World’s Biggest Weekend</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/crown-anchor-society"} className='sidenav__link'>Crown & Anchor Society</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/guides"} className='sidenav__link'>Cruising Guides</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/programs/gift-cards"} className='sidenav__link'>Gift Cards</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/resources/contact-us"} className='sidenav__link'>Contact Us</a></li>
            <li className='sidenav__item'><a href={"https://www.royalcaribbean.com/?icid=hprylc_wrnssn_hpr_hm_other_3667"} className='sidenav__link'>Royal Caribbean Group</a></li>
        </ul>
        <div className='sidenav__logo--container'>
        
        </div> 
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>  
    </>  
  );  
}  

export default SideNav;
        
