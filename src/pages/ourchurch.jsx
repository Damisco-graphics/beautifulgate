
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar,NavbarBrand, Offcanvas,Container, Nav, NavLink, NavItem} from 'react-bootstrap'

import {useState} from 'react'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import '../css/pastors.css'
import '../css/church.css'
import '../App.css'

import rccg_logo from '../images/rccg_logo.png'
import ctl_outside2 from '../images/ctl_outside2.jpg'




function Ourchurch (){
    const [show, setShow]=useState(false);
    const handleClose = ()=> setShow(false)
    const handleShow =()=> setShow(true);

    return (
        <div style={{minHeight:'69vh'}}>
        <Navbar expand='md'  variant='dark'  fixed='top' style={{background: 'purple', marginBottom:'2px'}} bg='secondary'>
<Container>
<NavbarBrand className='brand' ><img src={rccg_logo} width='40px' alt='RCCG logo' />   CTL Beautiful Gate</NavbarBrand>
<NavbarToggle className="d-md-none" aria-controls="basic-navbar-nav" onClick={handleShow} />
<Offcanvas  show ={show} onHide={handleClose} responsive='md' variant='dark' placement= 'end' id='offcanvas' >
<Offcanvas.Header  className='offcanvas-header' closeButton >
    <Offcanvas.Title></Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body  id='offcanvas-color'>
<Nav  className="me-auto justify-content-end">
    <NavItem>
    <NavLink href='ourchurch'> RCCG</NavLink>
    </NavItem> 
    <hr/>
<NavItem>
<NavLink href='/beautifulgate'>Home</NavLink>
</NavItem>
</Nav>
</Offcanvas.Body>
</Offcanvas>
    </Container>
</Navbar>

            <h1>ABOUT US</h1>
            <div id='pastors' style={{width:'95%'}} >
            <div className='aboutus' style={{height:'70vh'}}>
            <img src={ctl_outside2} alt='ctl outside' />
<div className='aboutus-text'>
<div className='box'>
<div className='smallbox'><h2>RCCG CTL Beautiful Gate</h2>
</div>
</div>
    RCCG Christ the Lord Beautiful Gate is a church founded by The Redeemed Christian Church of God. It was establised in the year 20.. under the leadership of our then provincial PAstor Pastor ....
    It has since the garnered members from across the Lagos Metropolis, the Lekki-Epe Suburb precisely.

</div>
            </div>
            </div>
        </div>
    )
}


export default Ourchurch;