import React, { Component } from 'react'
import './Navbar.css'

export default class User extends Component {

    constructor() {
        super()

        this.state = {
            notifications: [
                "اطلاعیه شماره 1",
                "ثبت نام در سایت",
                "تصحیح برگه ها",
                "طراحی پروژه",
                "خرید مایحتاج"
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark" id="mainNav">

                <div className="container">

                    <a className="navbar-brand" href="/">Hello World</a>

                    <div className="collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {this.state.notifications.length > 0 && (
                                <li className="nav-item">
                                    <span className="badge">{this.state.notifications.length}</span>
                                    <a className="nav-link" href="/News/">News</a>
                                </li>
                            )}

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
