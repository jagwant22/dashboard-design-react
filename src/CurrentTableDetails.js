import React from 'react';
import ReactDOM from 'react-dom';


class CurrentTableDetails extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='row myComp-header'>
                        <div className='col-sm-12'>
                            Current Table Status
                        </div>
                    </div>
                    <div className='row currentTable-body'></div>
                </div>
            </div>
        );
    }
}
export default CurrentTableDetails;