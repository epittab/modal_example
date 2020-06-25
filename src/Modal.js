import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';


class Modal extends React.Component {
    
    render() {       
        return ReactDOM.createPortal(
        this.props.display ?
        (<div className = 'modal-container'> 
            <div className = 'modal-background' onClick={this.props.toggle}></div>
            <div className = 'modal-content'>
                <h3>Warning:</h3>
                <p>New skills under construction</p>
            </div>
        </div> ): 
        (null)
        , document.getElementById('portal'))
    }
}

export default Modal;