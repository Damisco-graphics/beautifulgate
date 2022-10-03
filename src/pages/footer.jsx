import '../App.css'
import {Link} from 'react-router-dom'

function footer(){
    return(
        <div id='footer'>
        
        <table>
        <tr>
        <th>ABOUT US</th>            
        <th>EVENTS</th>
        </tr>
        
        
        <tr>
        <td><Link to='/ourchurch' className='link'>OUR CHURCH</Link></td>
        <td>WORD CONFERENCE</td>
        <td style={{fontStyle: 'italic', fontWeight: 'bold'}}>Address:</td>
        </tr>
        
        
        <tr>
        <td>OUR BRANCHES</td>
        <td>THE SPIRIT LIFE CONFERENCE</td>
        <td>Slot, Adeba, Lakowe, Ibeju-Lekki, Lagos </td>
        </tr>
        
        
        <tr>
        <td><Link to='/ourpastors' className='link'> OUR PASTORS</Link></td>
        <td></td>
        
        </tr>

        <tr>
            
            
            
        </tr>

    </table>
    <div className='copyright'>
        <div style={{display:'inline-flex', flexDirection:'row', margin:'auto'}}>Copyright 2022 © <p style={{color:'black', fontWeight:'bold', marginLeft:'5px'}}>Church Media Team</p> </div>
    </div>

        </div>
    )
}




export default footer;