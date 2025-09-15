import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Gilan", "Tehran", "Orumiah", "Yazd", "Shiraz"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            defaultCities: [],
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            phoneData: '',
            booked: false,
            allValid: false
        }

        this.bookHandler = this.bookHandler.bind(this)
        this.firstNameValidation = this.firstNameValidation.bind(this)
        this.lastNameValidation = this.lastNameValidation.bind(this)
        this.emailValidation = this.emailValidation.bind(this)
        this.phoneValidation = this.phoneValidation.bind(this)
        this.countryValidation = this.countryValidation.bind(this)
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

    countryValidation (event) {
        let defaultCountry = event.target.value

        if (defaultCountry === -1) {
            this.setState({
                defaultCities: []
            })
        } else {
            let defaultCities = this.state.countriesData[defaultCountry]

            this.setState({
                defaultCities: defaultCities
            })
        }
    }

    bookHandler(event) {
        event.preventDefault()

        this.setState({
            booked: true
        })

        if (this.state.firstNameData.length !== 0 && this.state.lastNameData.length !== 0 && this.state.emailData.length !== 0 && this.state.phoneData.length !== 0 && this.state.defaultCities.length !== -1) {
            this.setState({
                allValid: true
            })

            setTimeout(() => {
                this.setState({
                    allValid: false
                })
            }, 3000);
        }

        console.log(event);
    }


    render() {
        return (
            <>
                <form className="container" onSubmit={this.bookHandler} autoComplete="off">
                    {this.state.booked && this.state.allValid && (
                        <div className="success-message">Success! Yore Ticket booked</div>
                    )}
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
                        <select className="countrySelect" onChange={this.countryValidation}>
                            <option value="-1">Please Select ...</option>
                            <option className="option" value="Iran">Iran</option>
                            <option className="option" value="Turkey">Turkey</option>
                            <option className="option" value="US">United State</option>
                        </select>
                        {this.state.booked && this.state.defaultCountry === -1 && (
                            <span id="country-select-error">Please select your country</span>
                        )}
                    </div>
                    <div className="col-md-6 box">
                        <select className="citySelect">
                            {this.state.defaultCities.length ? this.state.defaultCities.map(city => (
                                <option value={city} key={city}>{city}</option>
                            )) : (
                                <option value="-1">Please Select City</option>
                            )}
                        </select>
                    </div>
                    <div className="col-md-12 box">
                        <button className="btn" type="submit">
                            Book a ticket
                        </button>
                    </div>
                </form>
            </>
        )
    }
}
console.log(this.state.countriesData)