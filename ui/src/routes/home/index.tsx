import {Fragment, useEffect, useState} from "react";
import "./home.styles.css";
import lunasyzImg from "../../assets/lunasyz.png";
import ctnImg from "../../assets/ctn.png";
import fdwebImg from "../../assets/fdweb.png";
import { NavLink } from "react-router-dom";

const Home = () => {

    const randomBgPalleteGenerator = () => {

        const redMain = Math.round(Math.abs(Math.random() * (171 - 255) + 0));
        const greenMain = Math.round(Math.abs(Math.random() * (86 - 170) + 0));
        const blueMain = Math.round(Math.abs(Math.random() * (0 - 85) + 0));

        const bgPrime = `rgb(${redMain*0.7}, ${greenMain*0.7}, ${blueMain*0.7})`;
        const textPrime = `rgb(${255 - redMain}, ${255 - greenMain}, ${255 - blueMain})`
        document.getElementById("hero").style.backgroundColor = bgPrime;
        document.getElementById("hero").style.color = textPrime;

        
        const bgNav = `rgb(${redMain*0.4}, ${greenMain*0.4}, ${blueMain*0.4})`;
        const textNav = `rgb(${255 - redMain*0.4}, ${255 - greenMain*0.4}, ${255 - blueMain*0.4})`
        document.getElementById("sideNav").style.backgroundColor = bgNav;
        document.getElementById("sideNav").style.color = textNav;
        

        const bgBody = `rgb(${redMain*1.8}, ${greenMain*1.8}, ${blueMain*1.8})`;
        const textBody = `rgb(${255 - redMain*1.8}, ${255 - greenMain*1.8}, ${255 - blueMain*1.8})`
        document.getElementsByTagName("body")[0].style.backgroundColor = bgBody;
        document.getElementsByTagName("body")[0].style.color = textBody;

        const pills = document.getElementsByClassName("navLink");
        for(let i=0; i<pills.length; i++){
            pills[i].style.backgroundColor = textNav;
        }
        
    }

    const dateToday = new Date().toDateString();

    const scrollToDiv = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }

    useEffect(()=>{

        randomBgPalleteGenerator();

    }, [])

    return(
        <Fragment>
            <span id="top"></span>
            <div className="sideNavWrapper" id="sideNav">            
                <a onClick={() => scrollToDiv("hero")} className="navLink hero">H</a>
                <a onClick={() => scrollToDiv("about")} className="navLink about">A</a>
                <a onClick={() => scrollToDiv("projects")} className="navLink projects">P</a>
            </div>
            <div className="heroWrapper" id="hero">
                <div className="logoWrapper">
                    <p className="title">INVRZ</p>
                </div>
                <div className="textWrapper">
                    <span>Innovation Revolutionzed</span>
                    <span>{dateToday}</span>
                </div>
            </div>
            <div className="aboutWrapper" id="about">
            </div>
            <div className="projectsWrapper" id="projects">
            </div>
            <div className="socialsWrapper">
            </div>
        </Fragment>
    );

};

export default Home;

/*
                <div className="navigationWrapper">
                    <a onClick={() => scrollToDiv("hero")} className="navLink">Hero</a>
                    <a onClick={() => scrollToDiv("about")} className="navLink">About</a>
                    <a onClick={() => scrollToDiv("projects")} className="navLink">Projects</a>
                </div>

*/