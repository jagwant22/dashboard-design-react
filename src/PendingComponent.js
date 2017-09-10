import React from 'react';
import ReactDOM from 'react-dom';
import './sidebar.css';
import './index.css';

function showPop(e){
    alert('Pop');
    console.log(e);
}


class PendingComponent extends React.Component{
        
        render(){
            
            return(
            <div className='row componentObj'>
                <div className='col-sm-12'>
                <div className='row'>
                    <div className='col-sm-12 myComp-header'>Pending Orders</div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 myComp-body'>
                        <table className='table table-responsive'>
                            <thead>
                                <tr>
                                    <th>Table Number</th>
                                    <th>Order Details</th>
                                    <th>Incomplete Items</th>
                                </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td>14 </td>
                                <td><a href='#'>Details</a></td>
                                <td>2</td>
                            </tr>
                            
                            </tbody>
                            
                        </table>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}


export default PendingComponent;
