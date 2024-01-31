import {Fragment} from "react";
import "./home.styles.css";
import lunasyzImg from "../../assets/lunasyz.png";
import ctnImg from "../../assets/ctn.png";
import fdwebImg from "../../assets/fdweb.png";

const Home = () => {

    return(
        <Fragment>
            <span id="top"></span>
            <div className="heroWrapper" id="hero">
                <div className="navigationWrapper">
                    <a href="#hero" className="navLink">hero</a>
                    <a href="#about" className="navLink">about</a>
                    <a href="#projects" className="navLink">projects</a>
                </div>
                <div className="logoWrapper">
                    <p className="title">invrz.com</p>
                    <p className="tag">flip reality</p>
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
                    <a className="navLink" href="https://github.com/invrz" target="_blank">
                        Star On GitHub
                    </a>
                    <a className="navLink" href="#top">
                        Back To Top
                    </a>
                    <a className="navLink" href="https://www.instagram.com/clutchtimenetwork/" target="_blank">
                        Follow CTN
                    </a>
            </div>
        </Fragment>
    );

};

export default Home;