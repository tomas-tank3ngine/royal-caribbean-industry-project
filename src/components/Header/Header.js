import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col} from "react-bootstrap"
import logo from "../../assets/images/royal-caribbean-logo-border.svg"
import "./Header.scss"
import SideNav from "../SideNav/SideNav"


const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
            <Container style={{ marginRight: 0}} className="mw-100">
                <Row className="pr-0">
                <Col xs={2} md={1}className="header__menu">
                        <SideNav/>
                        </Col>
                    <Col className="header__container py-3" xs={8} md={10}>
                        <a href={"https://www.royalcaribbean.com/"}><img className="header__logo" src={logo} alt="Royal Caribbean Logo"></img></a>
                    </Col>
                    <Col xs={2} md={1} className="header__search">
                        <button className="search__button search__buton--hidden"><FontAwesomeIcon icon={faSearch} className='fa-lg' style={{color : "white"}}/></button>
                    </Col>
                    </Row>
                </Container>    
            </nav>
        </header>
    )
}

export default Header;