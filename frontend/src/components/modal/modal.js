import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import "./modal.css"

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    
    close(){
        this.props.closeModal()
    }

    render(){
        const { modal } = this.props

        if (!modal) {
            return null;
        }
          
        let form;
        switch (modal) {
            case 'signup':
                form = <SignupFormContainer />;
                break;
            case 'login':
                form = <LoginFormContainer />;
                break;
            default:
                return null;
        }
          
        return (
            <div className="modal-background" onClick={this.close}>
                <div className={`${modal}-modal-child`} onClick={e => e.stopPropagation()}>
                    { form }
                </div>
            </div>
        );
    }
}

export default Modal;