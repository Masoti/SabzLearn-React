import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            submitted: false,
            allValid: false
        }
    }

    submitHandler(event) {
        event.preventDefault()

        this.setState({
            submitted: true
        })

        if (this.state.firstNameData.length !==0 && this.state.lastNameData.length !==0 && this.state.emailData.length !==0) {
            this.setState({
                allValid: true
            })

            setTimeout(() => {
                this.setState({
                    firstNameData: '',
                    lastNameData: '',
                    emailData: '',
                    submitted: false,
                    allValid: false
                })
            }, 3000);
        }

        console.log(event)
    }

    firstNameValidation(event) {
        this.setState({
            firstNameData: event.target.value
        })
    }

    lastNameValidation(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }

    emailValidation(event) {
        this.setState({
            emailData: event.target.value
        })
    }

    render() {
        return (
            <div className="form-container">
                <form className="register-form" onSubmit={(event) => this.submitHandler(event)} autoComplete="off">
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted && this.state.allValid && (
                        <div className="success-message">Success! Thank you for registering</div>
                    )}
                    <input
                        id="first-name"
                        className="form-field"
                        onChange={(event) => this.firstNameValidation(event)}
                        value={this.state.firstNameData}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.firstNameData.length ===0 && (
                        <span id="first-name-error">Please enter a first name</span>
                    )}
                    <input
                        id="last-name"
                        className="form-field"
                        onChange={(event) => this.lastNameValidation(event)}
                        value={this.state.lastNameData}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.lastNameData.length ===0 && (
                        <span id="last-name-error">Please enter a last name</span>
                    )}
                    <input
                        id="email"
                        className="form-field"
                        onChange={(event) => this.emailValidation(event)}
                        value={this.state.emailData}
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.emailData.length ===0 && (
                        <span id="email-error">Please enter an email address</span>
                    )}
                    <button className="form-field" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}