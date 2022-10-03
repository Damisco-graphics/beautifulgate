import {Navbar, Container,Offcanvas, NavbarBrand, Nav, NavItem, NavLink} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import '../css/pastors.css';
import {useState} from 'react';

import rccg_logo from '../images/rccg_logo.png'
import Pst_Opasanya from '../images/Pst_Opasanya.png'

function Ourpastors (){
    const [show, setShow]=useState(false);

    const handleClose = ()=> setShow(false)
    

    const handleShow =()=> setShow(true);

    return(
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


            <h1>Our Pastors</h1>

            <div id='pastors' >
            
            <div className='eachpastor'>
            <img src={Pst_Opasanya} alt="Pastor"
            />
            <div className='pastortext'>
            <h2>Pastor Oluseye</h2>
            <p>John Charles Hagee has served the Lord as a minister of the gospel for over 63 years. He is a fifth-generation pastor and the 47th descendent of his family to serve in the ministry since they immigrated to America in the mid-1700’s. Pastor Hagee is the founder and Senior Pastor of Cornerstone Church in San Antonio, Texas, a non-denominational evangelical church with more than 22,000 active members.</p>
            </div>
            </div>

            <div className='eachpastor'>
            <img src={Pst_Opasanya} alt="Pastor"
            />
            <div className='pastortext'>
            <h2>Pastor Matt Hagee</h2>
            <p>Pastor Matt Hagee is the Lead Pastor of the 22,000 member Cornerstone Church in San Antonio, Texas where he partners with his father, founder Pastor John Hagee. Pastor Matt and his wife Kendal are committed to sharing the Gospel of Jesus Christ with the nations of the world and committed to building bridges between generations.</p>
            </div>
            </div>

            <div className='eachpastor'>
            <img src={Pst_Opasanya} alt="Pastor"
            />
            <div className='pastortext'>
            <h2>Diana Hagee</h2>
            <p>Diana Hagee is the wife of Pastor John Hagee, founder and Senior Pastor of Cornerstone Church in San Antonio, Texas. Among her ministry duties are to coordinate all special events for Hagee Ministries, Cornerstone Church, Cornerstone Christian Schools, and Christians United for Israel. Diana, along with Kendal Hagee, leads the Women's Ministries at Cornerstone Church.</p>
            </div>
            </div>
            
                
            </div>

        </div>
    )
}



export default Ourpastors;