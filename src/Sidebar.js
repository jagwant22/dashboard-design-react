import React from 'react';
import ReactDOM from 'react-dom';
import foodLogo from './static/img/food.png';
import caret_down from './static/img/caret.png';
var divStyle = {

    color:'black',
    cursor:'pointer',
    'font-size' : '1.0em',
    'float':'right',
    'color':'white',
    'margin':'1%',
    'padding':'3%',
};


class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }
    render(){
        return(
            
            <div className='row' id='sidebar'>
                <div className='col-sm-12'>
                    <center>
                        <img src='favicon.ico'>
                        </img>
                        <h5>Restaurant Name </h5>
                        <hr id='nav_hr' />
                    </center>
                    <a className='sidenav_btn' style={divStyle}>Home</a>
                    <a className='sidenav_btn' style={divStyle}>Orders<img src={caret_down} style={{float:'right',width:'8%'}} /></a>
                    <a className='sidenav_btn' style={divStyle}>Menus<img src={caret_down} style={{float:'right', width:'8%'}} /></a>
                    <a className='sidenav_btn' style={divStyle}>Promotions and Offers</a>
                    <a className='sidenav_btn' style={divStyle}>Settings</a>
                                    
                    
                    
                    
                </div>
                <div className='col-sm-12'>
                <br /><br />
                    <hr />
                    <span id='current-time'>Current Time :  {this.state.date.toLocaleTimeString()}</span>
                </div>
            </div>
        );
    }
}

export default Sidebar