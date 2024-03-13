import {Fragment, useEffect, useState} from "react";
import "./home.styles.css";
import Tooltip from "./tooltip";

const Home = () => {

    const [primeBg, setPrimeBg] = useState('');
    const verbs = ["Innovation Revolutionized", "Invert Reality", "In the uniVerse"];

    const dateToday = new Date().toDateString();

    const scrollToDiv = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }

    useEffect(()=>{
        
        const randomBgPalleteGenerator = () => {

            const redMain = Math.round(Math.abs(Math.random() * (171 - 255) + 0));
            const greenMain = Math.round(Math.abs(Math.random() * (86 - 170) + 0));
            const blueMain = Math.round(Math.abs(Math.random() * (0 - 85) + 0));

            const bgPrime = `rgb(${redMain*0.7}, ${greenMain*0.7}, ${blueMain*0.7})`;
            const textPrime = `rgb(${255 - redMain}, ${255 - greenMain}, ${255 - blueMain})`
            document.getElementById("hero")!.style.backgroundColor = bgPrime;
            document.getElementById("hero")!.style.color = textPrime;
            document.getElementById("outro")!.style.backgroundColor = bgPrime;
            document.getElementById("outro")!.style.color = textPrime;

            setPrimeBg(bgPrime);

            
            const bgNav = `rgb(${redMain*0.4}, ${greenMain*0.4}, ${blueMain*0.4})`;
            const textNav = `rgb(${255 - redMain*0.4}, ${255 - greenMain*0.4}, ${255 - blueMain*0.4})`
            document.getElementById("sideNav")!.style.backgroundColor = bgNav;
            document.getElementById("sideNav")!.style.color = textNav;
            

            const bgBody = `rgb(${redMain*1.8}, ${greenMain*1.8}, ${blueMain*1.8})`;
            const textBody = `rgb(${255 - redMain*1.8}, ${255 - greenMain*1.8}, ${255 - blueMain*1.8})`
            document.getElementsByTagName("body")[0].style.backgroundColor = bgBody;
            document.getElementsByTagName("body")[0].style.color = textBody;

            const pills = document.getElementsByClassName("navLink");
            for(let i=0; i<pills.length; i++){
                //pills[i].style.backgroundColor = textNav;
                console.log(pills[i])
            }
            
        }

        randomBgPalleteGenerator();

    }, [])

    function showTooltip(arg0: string): void {
        document.getElementById(arg0)!.style.display = 'block';
    }

    function hideTooltip(arg0: string): void {
        document.getElementById(arg0)!.style.display = 'none';
    }

    return(
        <Fragment>
            <span id="top"></span>
            <div className="heroWrapper gridRow" id="hero">
                <div className="logoWrapper">
                    <p className="title colWd-9-ld colWd-12-sm">INVRZ</p>
                </div>
                <div className="textWrapper">
                        <span>{verbs[0]}</span>
                        <span style={{cursor: 'pointer'}} onClick={()=>{location.reload()}}>Color ?</span>
                        <span>{dateToday}</span>
                </div>
            </div>
            <div className="aboutWrapper gridRow rowCenter" id="about">
                <div className="colWd-10-ld colWd-12-sm">
                    <h1 className="fontUnica" style={{fontSize: '5.6rem', margin: '2rem'}}>who we are</h1>
                    <p className="fontArchivo" style={{fontSize: '1.8rem', lineHeight: 1.5, letterSpacing: '1.6px', margin: '2rem'}}>
                        We are an indie app studio based in Bharat which specializes in crafting meaningful brands via digital media. We are passionate about creating unique experiences tailored to express their own unique stories.
                        <br/><br/>
                    </p>
                </div>
            </div>
            
            <div className="servicesWrapper pageView" id="services">
                <div className="gridRow rowCenter">
                    <div className="colWd-6-ld colWd-12-sm card">
                        <h1 className="fontUnica">RESILIENT</h1>
                        <p className="fontArchivo">
                            Building scalable and robust PWAs
                        </p>
                        <div className="img" style={{backgroundColor: `${primeBg}`, backgroundImage: "url('./assets/pwa.avif')"}} />
                    </div>
                    <div className="gutterWd-1 colWd-0-sm"></div>
                    <div className="colWd-3-ld colWd-12-sm card">
                        <h1 className="fontUnica">VERSATILE</h1>
                        <p className="fontArchivo">
                            Producing cross platform native apps
                        </p>
                        <div className="img" style={{backgroundColor: `${primeBg}`, backgroundImage: "url('./assets/cpa.avif')"}} />
                    </div>
                </div>
                <br/>
                <div className="gridRow rowCenter">
                    <div className="colWd-3-ld colWd-12-sm card">
                        <h1 className="fontUnica">INNOVATIVE</h1>
                        <p className="fontArchivo">
                            Unique experiences
                        </p>
                        <div className="img" style={{backgroundColor: `${primeBg}`, backgroundImage: "url('./assets/port.avif')", backgroundSize: '260%'}} />
                    </div>
                    <div className="gutterWd-1 colWd-0-sm"></div>
                    <div className="colWd-6-ld colWd-12-sm card">
                        <h1 className="fontUnica">DYNAMIC</h1>
                        <p className="fontArchivo">
                            Deliverting success
                        </p>
                        <div className="img" style={{backgroundColor: `${primeBg}`, backgroundImage: "url('./assets/dyn.avif')" }} />
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
                            <li onMouseOver={()=> showTooltip('ctn')} onMouseOut={()=> hideTooltip('ctn')}>
                                <h2 className="itemName fontArchivo">Clutch Time Network</h2>
                                <p className="timeFrame fontArchivo">Ongoing</p>
                                <Tooltip bgcol={primeBg} data={{'pId': 'ctn', 'pName': 'Clutch Time Network', 'pDesc': 'A sports agency covering primarily cricket through an instagram page which uses assets created by Invrz Studios'}} />
                            </li>
                            <li onMouseOver={()=> showTooltip('luna')} onMouseOut={()=> hideTooltip('luna')}>
                                <h2 className="itemName fontArchivo">Lunasyz</h2>
                                <p className="timeFrame fontArchivo">2024</p>
                                <Tooltip bgcol={primeBg} data={{'pId': 'luna', 'pName': 'Lunasyz', 'pDesc': 'A native android app made using React Native to track lunar events show current lunar calender cycle'}} />
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Invrz Keyboard</h2>
                                <p className="timeFrame fontArchivo">2024</p>
                            </li>
                            <li>
                                <h2 className="itemName fontArchivo">Rukkus Coffee</h2>
                                <p className="timeFrame fontArchivo">2023</p>
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
            <div className="outroWrapper" id="outro">
                <div className="gridRow rowCenter">
                    <div className="colWd-10-ld colWd-12-sm">
                        <br/><br/>
                        <br/><br/>
                        <div className="textGroup">
                            <p className="fontUnica">we transform ideas into apps</p>
                            <p className="fontUnica">we build platform agnostic apps</p>
                            <p className="fontUnica">we flip reality</p>
                        </div>
                        <br/><br/>
                        <div className="buttonGroup">
                            <a target="_blank" className="fontArchivo" href="https://github.com/invrz">Star on GitHub</a>
                            <a target="_blank" className="fontArchivo" href="https://www.instagram.com/clutchtimenetwork/">Follow CTN</a>
                            <a className="fontArchivo" onClick={() => scrollToDiv("hero")} >Back to top</a>
                        </div>
                        <br/><br/>
                        <br/><br/>
                        <label>images cc unsplash.com</label><br/>
                        <label>website design by Shivendra Saurav</label><br/>
                        <label>&copy; invrz.com 2024</label>
                        <br/><br/>
                        <br/><br/>
                    </div>
                </div>
            </div>

            
            <div className="sideNavWrapper" id="sideNav">            
                <a onClick={() => scrollToDiv("hero")} className="navLink hero">H</a>
                <a onClick={() => scrollToDiv("about")} className="navLink about">A</a>
                <a onClick={() => scrollToDiv("services")} className="navLink services">S</a>
                <a onClick={() => scrollToDiv("projects")} className="navLink projects">P</a>
                <a onClick={() => scrollToDiv("outro")} className="navLink outro">O</a>
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