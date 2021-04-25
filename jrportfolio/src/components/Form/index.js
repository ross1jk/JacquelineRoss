import React from "react";
import { Container } from "../Grid";
import "./style.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    submitName(event) {
        this.setState({ name: event.target.value })
    }

    submitEmail(event) {
        this.setState({ email: event.target.value })
    }

    submitMessage(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const maillink = "mailto:jacqueline.ross09@gmail.com?subject=Portfolio Response From:"+this.state.email+"&body="+this.state.message+" - "+this.state.name+", "+this.state.email
        window.location.href = maillink; 
        this.clearForm()
    }

    clearForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return (
            <div>
                <article className="card" id="contact">
                    <Container>

                        <div className="App">
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div className="form-group">
                                    <label for="name"><i className="far fa-user"></i> Your Name</label>
                                    <input type="text" className="form-control" placeholder="First Last" value={this.state.name} onChange={this.submitName.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="far fa-envelope"></i> Email Address</label>
                                    <input type="email" className="form-control" placeholder="name@example.com" aria-describedby="emailHelp" value={this.state.email} onChange={this.submitEmail.bind(this)} />
                                </div>
                                <div className="form-group">

                                    <label for="message"><i class="far fa-comment-alt"></i> Message</label>
                                    <textarea className="form-control" rows="3" value={this.state.message} onChange={this.submitMessage.bind(this)} />

                                </div>
                                <button type="submit" className="btn btn-custon">Submit</button>
                            </form>
                        </div>

                    </Container>
                </article>


           </div>
        );
    }
};

export default Form;