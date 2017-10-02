import React, {Component} from "react";

class Footer extends Component{
        handleEmailTextChange = (e) => {
            this.props.onEmailTextChange(e.target.value);
        }

    render(){
        return(
            <footer>
                <div className = "footer__header">YVRUN</div>
                <div className = "footer__form">
                    <form onSubmit = {this.props.onEmailFormSubmit}>
                        <input className = "footer__form__text" 
                            type = "text"
                            value = {this.props.emailValue}
                            onChange = {this.handleEmailTextChange}
                            placeholder = "email@email.com"/>
                        <input className = "footer__form__submit" 
                            type = "submit" 
                            value = "Subscribe"/>
                    </form>
                </div>                                                
            </footer>
        );
    }
}

export default Footer;

    