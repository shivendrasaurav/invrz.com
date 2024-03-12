import {Fragment, useEffect} from "react";
import "./home.styles.css";

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
                <a onClick={() => scrollToDiv("services")} className="navLink services">A</a>
                <a onClick={() => scrollToDiv("projects")} className="navLink projects">P</a>
            </div>
            <div className="heroWrapper gridRow" id="hero">
                <div className="logoWrapper">
                    <p className="title">INVRZ</p>
                </div>
                <div className="textWrapper">
                    <span>Innovation Revolutionzed</span>
                    <span style={{cursor: 'pointer'}} onClick={()=>{location.reload()}}>Color ?</span>
                    <span>{dateToday}</span>
                </div>
            </div>
            <div className="aboutWrapper gridRow rowCenter" id="about">
                <div className="colWd-5-ld colWd-12-sm">
                    <h1 className="fontUnica" style={{fontSize: '8.1rem', margin: '2rem'}}>who we are</h1>
                </div>
                <div className="gutterWd-1 colWd-0-sm"></div>
                <div className="colWd-5-ld colWd-12-sm">
                    <p className="fontArchivo taJustify" style={{fontSize: '1.8rem', lineHeight: 1.5, letterSpacing: '1.6px', margin: '2rem'}}>
                        invrz is an indie app studio based in Bharat which specializes in building responsive websites, progressive web apps, cross platform native apps and long form content. Our team has a unique knack for designing stuff that you can't help but fall in love with.
                        <br/><br/>
                    </p>
                </div>
            </div>
            
            <div className="servicesWrapper pageView" id="services">
                <div className="gridRow rowCenter">
                    <div className="colWd-6-ld colWd-12-sm card">
                        <h1 className="fontUnica">RESILIENT</h1>
                        <p className="fontArchivo">
                            We specialize in creating cutting-edge solutions that seemlessly blend the best of both worlds: The versatility of web applications and the robustness of platform-specific apps. Our forte lies in crafting resilient Progressive Web Apps which can work offline, update in background and allow faster response times.
                        </p>
                    </div>
                    <div className="gutterWd-1 colWd-0-sm"></div>
                    <div className="colWd-3-ld colWd-12-sm card">
                        <h1 className="fontUnica">VERSATILE</h1>
                        <p className="fontArchivo">
                            We recognize the importance of reaching a wider audience without compromising on quality. And our ability to build versatile Cross-platform native apps allows us to achieve just that.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="gridRow rowCenter">
                    <div className="colWd-3-ld colWd-12-sm card">
                        <h1 className="fontUnica">INNOVATIVE</h1>
                        <p className="fontArchivo">
                            Your portfolio is more than just a website to show your projects. We understand that and design every portfolio to set a narrative, make it come to life with interactive experiences and tell a unique story.
                        </p>
                    </div>
                    <div className="gutterWd-1 colWd-0-sm"></div>
                    <div className="colWd-6-ld colWd-12-sm card">
                        <h1 className="fontUnica">PROVEN</h1>
                        <p className="fontArchivo">
                            Our commitment to resilience, versatility, and innovation doesn’t end with development; it’s vividly reflected in the projects we bring to life. From the sleek design to the intuitive interfaces, we work on projects which are a testament to our dedication to excellence and diversity of abilities.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="projectsWrapper" id="projects">
                <div className="gridRow rowCenter">
                    <div className="colWd-5-ld colWd-12-sm">
                        <h1 className="fontUnica" style={{fontSize: '5.6rem', margin: '2rem', wordWrap: 'break-word'}}>the project showcase</h1>
                    </div>
                    <div className="gutterWd-1"></div>
                    <div className="colWd-5-ld colWd-12-sm">
                        <ul className="projectsList" style={{margin: '2rem'}}>
                            <li onMouseOver={()=>{alert('add tooltip here')}}>
                                <h2 className="itemName fontArchivo">Clutch Time Network</h2>
                                <p className="timeFrame fontArchivo">Ongoing</p>
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Lunasyz</h2>
                                <p className="timeFrame fontArchivo">2024</p>
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Invrz Keyboard</h2>
                                <p className="timeFrame fontArchivo">2024</p>
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Patterns UI</h2>
                                <p className="timeFrame fontArchivo">Under Development</p>
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Invrz Learn</h2>
                                <p className="timeFrame fontArchivo">Under Development</p>
                            </li>
                        </ul>
                    </div>
                </div>
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