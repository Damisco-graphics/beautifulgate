import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar,NavbarBrand, Offcanvas,Container, Nav, NavLink, Button, NavItem, Carousel, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import '../css/custom.css'
import Pastor_Opasanya2 from '../images/Pastor_Opasanya2.PNG'
import Child_dedication from '../images/Child_dedication.jpg'
import bg from '../images/bg.png'
import ctl_inside2 from '../images/ctl_inside2.jpg'
import ctl_insidge1 from '../images/ctl_insidge1.jpg'
import ctl_outside1 from '../images/ctl_outside1.jpg'
import instagram_icon from '../images/instagram_icon.png'
import rccg_logo from '../images/rccg_logo.png'
import whatsapp_icon from '../images/whatsapp_icon.png'
import Pst_Opasanya from '../images/Pst_Opasanya.png'


function Home (){
    const [show, setShow]=useState(false);
    const handleClose = ()=> setShow(false)
    const handleShow =()=> setShow(true);

const [open, setOpen]=useState(false);
const handleNotopen=()=> setOpen(false);
const handleOpen=()=> setOpen(true)

    return (
        <div id= 'home'>
<Navbar expand='md'  variant='dark'  fixed='top' style={{background: 'purple', marginBottom:'2px'}} bg='secondary' className='Galaxyfoldscreen'>
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

<div id='carouselDiv'>
<div className='slightlyVisibleLogo'> 
 <img src={rccg_logo} alt='rotatingLogo' />
 </div>
<Carousel className='Carousel'>
<Carousel.Item className='Carouselitem'>
    <img className= 'd-block w-100'
    src={ctl_outside1}
    
    // width='300px'
    alt='First Slide'/>
    <Carousel.Caption className='Carouselcaption'>
        <h3>RCCG CTL Beautiful Gate</h3>
        <p>Lakowe, Ibeju-Lekki, Lagos.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className='d-block  w-100'
    src={Pastor_Opasanya2}
    
    // width='300px'
    alt='Pastor Opasanya'/>
</Carousel.Item>

<Carousel.Item>
    <img className='d-block  w-100'
    src={ctl_inside2}
    
    // width='300px'
    alt='CTL Inside'/>
</Carousel.Item>
<Carousel.Item>
    <img className='d-block  w-100'
    src={Child_dedication}
    
    // width='300px'
    alt='Ctl inside.jpg'/>
</Carousel.Item>
<Carousel.Item>
    <img className='d-block  w-100'
    src={ctl_insidge1}
    
    // width='300px'
    alt='Child_dedication.jpg'/>
</Carousel.Item>
<Carousel.Item>
    <img className='d-block  w-100'
    src={bg}
    
    // width='300px'
    alt='Beautiful gate Signboard'/>
</Carousel.Item>

</Carousel>
<div className='slightlyVisibleLogo'><img src={rccg_logo} alt='rotatingLogo' /></div>
</div>

<Navbar  className="me-auto secondnavbar"  variant='dark' >
    <Container className='secondcontainer' >
        <Nav className='secondnavbar-nav' fill variant='pills' >
           <Nav.Item className='secondnavbar-navitems'> 
           NEW HERE? <NavLink>
           <>
           <Button variant='info' style={{background: 'tan', border:'none' }} onClick={handleOpen} >MAIL US</Button>
           
           <Modal show={open} onHide={handleNotopen} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
           <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter" >Send us a mail</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control  as="textarea" label="Enter your message"  rows='10' placeholder='Kindly type your message...' className='textarea' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>           </Modal.Body>

           <Modal.Footer>
               <Button variant='primary' onClick={handleNotopen}>Close</Button>
           </Modal.Footer>
           </Modal>

           </>
           </NavLink>
           </Nav.Item>   <br/>
           <Nav.Item className='secondnavbar-navitems'>
           FIND PARISHES UNDER US <NavLink> <Button variant='info' style={{background: 'tan', border:'none', minWidth:"75px" }} >LOCATIONS</Button></NavLink>
           </Nav.Item>  <br/>
           <Nav.Item className='secondnavbar-navitems'>
           PARTNER WITH US <NavLink> <Button variant='info' style={{background: 'tan', border:'none' }} >GIVE</Button></NavLink>
           </Nav.Item>  <br/>
           <Nav.Item className='secondnavbar-navitems'>
           NEWSLETTER <NavLink> <Button variant='info' style={{background: 'tan', border:'none' }} >SIGN UP</Button></NavLink>
           </Nav.Item>  <br/>
        </Nav>
    </Container>
</Navbar>

        <div id='resources'>
            <h2 style={{color:'green'}} >Resources</h2><hr/>


            <div id='youtubeVideos' >
            <div>
            <iframe className='iframe' src="https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=RCCGBeautifulGateLakowe" frameborder="0" allowfullscreen title='Latest Video'></iframe>
            </div>
            <div> 
            <iframe className='iframe' src="https://www.youtube.com/embed/UV-kWtZ_7Og" allowfullscreen="allowfullscreen" title="Sunday 18th, September, 2022"></iframe>
            </div>
           <div>
           <iframe className='iframe' src="https://www.youtube.com/embed/c1n09U7_C50"  allowfullscreen="allowfullscreen" title="Sunday 9th, September, 2022"></iframe>
           </div>
            </div>
           <div className='moreVideos'>
           <Button variant='primary' href='https://www.youtube.com/c/RCCGBeautifulGateLakowe/videos' >More Videos</Button>
           </div>


            <hr/>
        </div>

           
    <div id='cws' >
    <img className='cws-img' src={Pst_Opasanya} alt='Pastor Opasanya' ></img>
    <div className='cws-text' >
    
<h1 className='big-title'>Connect with us</h1>
<p className='cws-pstOpasanya' >PASTOR OPASANYA</p>
<div ><p className='stayconnect'>Stay connected and join our conversations via social media on Facebook, Twitter and Instagram.</p></div>
<Link to='/ourpastors'> <Button style={{background: 'tan',  border:'none', color: 'black', boxShadow:'0 0 5px black', marginBottom: '15px'}}>More on our Pastors</Button></Link>
<br/>
<span><img src={instagram_icon} width='50px' alt='instagram icon'></img><img src={whatsapp_icon} width='50px' alt='whatsap icon' ></img></span>
    </div>
    </div>
    <div id='fillupafterourprogrammes'>
<div id='ourprogrammes'>
     <div style={{display:'flex', justifyContent: 'spaceBetween', margin: "auto"}}>
    <div className='line'></div>
    <div className='ouprog' >
    <h1>Our Programmes</h1>
    </div>
    <div className='line' style={{ float:'right'}}></div>
    </div>

    
    <div className='programmes'>
    <div>
        <h3>Weekly Activities</h3>
        <p>Tuesdays:  Digging Deep (6:00pm)</p>
        <p>Thursdays: Faith Clinic (6:00pm)</p>
    </div>

    <div>
        <h3>Special Programmes</h3>
        <p>Vigil   (8:00am)</p>
        <p>Worship Service (8:45am)</p>
    </div>
    
    </div>
    <div id='SundayService'>
        <h3>Sunday Service</h3>
        <p>Sunday School   (8:00am)</p>
        <p>Worship Service (8:45am)</p>
    </div>
</div>
    </div>

        </div>
    )
}


export default Home;