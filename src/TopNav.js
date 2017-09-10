import React from 'react';
import ReactDom from 'react-dom';
import './navBar.css';
import onIcon from './static/img/on.svg';
var navStyleVar = {
    
    "z-index":"0",
    "height":"5vh",
    "background": "rgb(0, 50, 74)",
    "color":"white",

}
function confirmLogout(){
    var a = alert('Want to LogOut??');
}
class TopNav extends React.Component{
    render(){
        return(
            <div style={navStyleVar} className='visible-lg visible-md visible-sm'>
                
                <img className = 'navButton' src={onIcon} style={{width:'24px', marginRight:'1%', marginTop:'.5%'}} onClick ={confirmLogout} />
                <span id='info_before'>Welcome! <span id='info'>Jon's Cafe</span></span>
            </div>
        );
    }
}

export default TopNav;