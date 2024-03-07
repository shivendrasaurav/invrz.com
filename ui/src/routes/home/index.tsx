import {Fragment} from "react";
import "./home.styles.css";
import lunasyzImg from "../../assets/lunasyz.png";
import ctnImg from "../../assets/ctn.png";
import fdwebImg from "../../assets/fdweb.png";
import { NavLink } from "react-router-dom";

const Home = () => {

    const dateToday = new Date().toDateString();

    const scrollToDiv = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }

    return(
        <Fragment>
            <span id="top"></span>
            <div className="sideNavWrapper">            
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
                <div className="aboutCard">
                    <p className="aboutTitle">About invrz.com</p>
                    <p className="aboutText">
                        We're invrz.com, a tech collective where code hums alongside the roar of the crowd. We craft sleek apps that bring your digital world to life, from sleek interfaces to intuitive experiences. Whether it's a game that ignites your passion or a platform that connects you to the pulse of the latest sports headlines, we pour our energy into weaving technology with your aspirations.
                        <br/>
                        But what truly defines us is the thrill of pushing boundaries. We revel in the challenge of reimagining possibilities, flipping expectations on their heads, and weaving technology into experiences that transcend the ordinary.
                        <br/>
                        So, whether you're envisioning a groundbreaking app, a website that dances with elegance, or a platform that rewrites the rules of the game, invrz.com is your portal to a reality where technology bends to your will. Come, let's flip the script together.
                        <br/>
                    </p>
                </div>
            </div>
            <div className="projectsWrapper" id="projects">
                <div className="projectsCard">
                    <div className="projectsTitle">Projects</div>
                    <div className="projectsBento">
                        <div className="projectWrapper">
                            <img className="projectImg" alt="ctn" src={ctnImg} />
                            <p className="projectName">Clutch Time Network</p>
                        </div>
                        <div className="projectWrapper">
                            <img className="projectImg" alt="lunasyz" src={lunasyzImg} />
                            <p className="projectName">LunaSyz</p>
                        </div>
                        <div className="projectWrapper">
                            <img className="projectImg" alt="fdweb" src={fdwebImg} />
                            <p className="projectName">Fluent Design For Web</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialsWrapper">
                    <NavLink className="navLink" to="https://github.com/invrz" target="_blank">
                        Star On GitHub
                    </NavLink>
                    <a className="navLink" onClick={() => {scrollToDiv('top')}}>
                        Back To Top
                    </a>
                    <NavLink className="navLink" to="https://www.instagram.com/clutchtimenetwork/" target="_blank">
                        Follow CTN
                    </NavLink>
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