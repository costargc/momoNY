import React, { Component } from "react";
import "./nav.css"
import { Link } from "react-router-dom";

import SideBar from "../SideBar/Sidebar";
import { slide as Menu } from 'react-burger-menu'


class Nav extends Component {


    componentDidMount() {
        console.log("test");
        console.log(this);
    }

    render() {
        return (

            <div className="fixed-top" id="topnav">
                <nav className="navbar navbar-expand-sm navbar-custom">
                    <Link className="navbar-brand" to="/">
                        {/* <img style={{ paddingBottom: 15, margin: "auto" }}
                            src={require("../../assets/logo.svg")}
                            width="80"
                            alt="logo"
                        /> */}
                    </Link>

                    {/* <button id="sidebarCollapse" className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar-sidebar" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span >
                            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                            <img
                                src={require("../../assets/logo.svg")}
                                width="20"
                                alt="logo"
                            />
                            <span id="menu">MENU</span>
                        </span>
                    </button> */}



                    <div className=" navbar-collapse" id="navbar">

                        <div id="dismiss">
                            <i className="fa fa-arrow-left"></i>
                        </div>

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Início</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/terapias">Terapias</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="https://www.youtube.com/channel/UCswQwL4QyKp59zg2k1mksdQ"> <i
                                    className="fab fa-youtube" ></i> Youtube</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/survey">Teste Depressão</Link>
                            </li>

                        </ul>

                    </div>




                </nav>
            </div>
        )
    }
}

export default Nav