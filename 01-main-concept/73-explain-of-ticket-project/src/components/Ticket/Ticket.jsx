import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: [],
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            phoneData: '',
            booked: false,
            allValid: false
        }
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

    phoneValidation(event) {
        this.setState({
            phoneData: event.target.value
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="col-md-6 box">
                        <input 
                            className="fnameInput"
                            placeholder="First Name"
                            onChange={this.firstNameValidation}
                            value={this.state.firstNameData}
                        />
                        {this.state.booked && this.state.firstNameData.length === 0 && (
                            <span id="first-name-error">Please enter a first name</span>
                        )}
                    </div>

                    <div className="col-md-6 box">
                        <input 
                            className="lnameInput"
                            placeholder="Last Name"
                            onChange={this.lastNameValidation}
                            value={this.state.lastNameData}
                        />
                        {this.state.booked && this.state.lastNameData.length === 0 && (
                            <span id="last-name-error">Please enter a last name</span>
                        )}
                    </div>
                    <div className="col-md-6 box">
                        <input 
                            className="emailInput"
                            placeholder="Email"
                            onChange={this.emailValidation}
                            value={this.state.emailData}
                        />
                        {this.state.booked && this.state.emailData.length === 0 && (
                            <span id="email-error">Please enter your email </span>
                        )}
                    </div>
                    <div className="col-md-6 box">
                        <input 
                            className="phoneInput"
                            placeholder="Phone Number"
                            onChange={this.phoneValidation}
                            value={this.state.phoneData}
                        />
                        {this.state.booked && this.state.phoneData.length === 0 && (
                            <span id="phone-error">Please enter your phone</span>
                        )}
                    </div>
                    <div className="col-md-6 box">
                        <select className="countrySelect">
                            <option value="-1">Please Select ...</option>
                            <option className="option" value="Iran">Iran</option>
                            <option className="option" value="Turkey">Turkey</option>
                            <option className="option" value="US">United State</option>
                        </select>
                    </div>
                    <div className="col-md-6 box">
                        <select className="citySelect">
                                <option value="-1">Please Select City</option>
                        </select>
                    </div>
                    <div className="col-md-12 box">
                        <button className="btn">Book a ticket</button>
                    </div>
                </div>
            </>
        )
    }
}
