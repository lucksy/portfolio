import React from 'react';
import { useInView } from "react-intersection-observer";

export default function Page({ menu, setVisibleSection }) {

    const { ref } = useInView({
        threshold: 0.1,
        // triggerOnce: true,
        onChange: (inView, entry) => {
          if (inView) {
            console.log(entry.target.id);
            setVisibleSection(entry.target.id);
          }
        }
      });


  return (
    <>

{ 
menu === 'home' &&  (
<section id={menu} className="page about" ref={ref}>

<h2 className="title--large main-title">About:</h2>
<div className="main-text">
    <h2 className="title--large main-title">Bridging Design & Code: Front-End Engineering for Impactful User Journeys.</h2>
  <p>As a talented Front-End Engineer and UX Designer, I specialize in creating user-friendly and visually appealing websites that are both functional and aesthetically pleasing.</p>

<p>Throughout my career, I have successfully collaborated on significant projects with renowned companies like <a href="https://wso2.com/">WSO2</a>, <a href="https://www.dialog.lk/">Dialog</a>, <a href="https://www.hiveage.com/">Hiveage</a>, and <a href="https://www.addiva.se/">Addiva AB</a>. In these roles, I have led Front-End Engineering, guided UX design initiatives, and played a pivotal role in delivering exceptional digital experiences.</p>

<p>I strive to deliver exceptional web solutions that are both functional and enjoyable. Eager to continuously innovate, create unforgettable digital experiences.</p>
</div>
</section>
)
}

{ 
menu === 'education' &&  (

<section id={menu} className="page education" ref={ref}>
    <hr className="separate" id="education-section" />
        <h2 className="title--large main-title">Education background:</h2>
        <div className="main-text">
            <div className="top--border box">
                <h2 className="title--large main-title">MSc. User Experience and Interactive Media Design.</h2>
                <p className="light--text mr-t-10">Södertörn University, Sweden. 2020 – 2022</p>
                </div>
                <div className="top--border middle--box box">
<h2 className="title--large main-title">Bachelor of Information Technology.</h2>
                <p className="light--text mr-t-10">Moratuwa University, Sri Lanka. 2004– 2008</p>
                </div>
                <div className="top--border box">
<h2 className="title--large main-title">Meta Front-End Developer Professional Certificate.</h2>
                <p className="light--text mr-t-10">By Meta Inc, on Coursera. 2023</p></div>

        </div>
</section>
)
}

{menu === 'work' &&  (
<section id={menu} className="page work" ref={ref}>
        <hr className="separate" id="work-section" />

        <h2 className="title--large main-title">Work Experience:</h2>
        <div className="main-text">
            <div className="work--box">
                <div className="work--title">
                    <h2 className="title--large main-title">Front-End Developer plus Senior UX Designer</h2>
                    <p className="light--text mr-t-10">Addiva AB, Sweden. 2022 – 2023</p>
                </div>
                <div className="work--body">
                    <ul className="note">
                    <li>I led the design and development of '<a href='#addflux'>Addflux</a>', an innovative HMI and SCADA-like energy management software platform.</li>
                    <li>Implemented a Design System to enhanced Addflux's user interface and user experience and developed components for the web app using React JS.</li>
                    <li>I designed and developed an intuitive navigation system as a component using React for <a href="#propmate">Propmate</a>. That enabled efficient state management of the web application, enhancing overall user experience and interaction.</li>
                    </ul>
                </div>
            </div>

            <div className="work--box middle">
                <div className="work--title">
                    <h2 className="title--large main-title mr-t-2r">Front-End Engineer plus UX Designer</h2>
                    <p className="light--text mr-t-10">Hiveage, Inc. Sri Lanka. 2014 – 2021</p>
                </div>
                <div className="work--body">
                    <ul className="note">
                    <li>Led front-end development at <a href='#hiveage'>Hiveage</a>, significantly enhancing the user experience for over 65,000 businesses on both web and mobile platforms.</li>
                    <li>Achieved a 40% reduction in user churn and a 30% increase in user engagement by diligently refining UX/UI elements, informed by extensive user research and feedback.</li>
                    <li>Designed and developed a comprehensive design system for web components, catering to a diverse range of product offerings and streamlining the user interaction process.</li>
                    </ul>
                </div>
            </div>

            <div className="work--box">
                <div className="work--title">
                    <h2 className="title--large main-title mr-t-2r">Front-End Engineer, Web Designer</h2>
                    <p className="light--text mr-t-10">Vesess (Pvt) Ltd. 2008 – 2014</p>
                </div>
                <div className="work--body">
                    <ul className="note">
                        <li>I led the front-end engineering team for <a href='https://www.dialog.lk/'>Dialog's website</a> redesign. My role was crucial in creating a visually appealing, functional, and user-friendly site.</li>
                        <li>I collaborated with WSO2 on the App Factory project, designing and delivering front-end templates. This role enhanced my grasp of cloud and enterprise software development, merging technical skills with UX insights.</li>
                    </ul>
                </div>
            </div>

        </div>
</section>

)
}

{menu === 'projects' &&  (

<section id={menu} className="page projects" ref={ref}>
    <hr className="separate" id="projects-section" />

        <h2 className="title--large main-title" id="addflux">Recent Projects:</h2>
        <div className="main-text top--border">
            <h2 className="title--large main-title">AddFlux: Renewable Energy Management (HMI) system</h2>
            <figure>
            <div className="embed-responsive embed-responsive-16by9">
					<video className="embed-responsive-item w-100 h-100" preload="metadata" poster="assets/images/addflux.png" controls loop muted>
                        <source src="assets/images/addflux.mp4#t=10" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                </div>
                <figcaption>Demo App (<a href="https://stockholmer.se/addflux/">Addflux Renewable Energy Management</a>)</figcaption>
            </figure>
                <p>In developing AddFlux, I engineered an advanced HMI/SCADA-like system for renewable energy management, emphasizing intuitive engagement, robust system control, and intelligent data utilization. Leveraging React, the system provides a dynamic HMI for real-time monitoring and interaction with energy processes, enhanced by AI and data analytics for predictive insights. This integration allows for sophisticated data visualization, presenting complex information in an accessible and actionable manner. The back-end, built with Node.js and Express.js, ensures seamless data acquisition and analytics processing, along with secure device communication via Modbus, MQTT, and Mosquitto. Tailored to meet the needs of building owners and small-scale solar producers, this system optimizes energy efficiency and operational decision-making.</p>

                <h4>System Highlights:</h4>
                <ul>
                <li className='mb-20'><strong>Intuitive HMI</strong>: Offers a user-friendly interface for easy access to energy data and controls, designed responsively for all devices.</li>
                <li className='mb-20'><strong>AI and Data Analytics</strong>: Integrates AI for predictive energy management, optimizing efficiency and cost.</li>
                <li className='mb-20'><strong>Energy and Power Management</strong>: Implements control strategies for smart energy distribution, enhancing grid stability and savings.</li>
                <li className='mb-20'><strong>Safety and Compliance</strong>: Ensures adherence to industry standards, safeguarding equipment and users.</li>
                </ul>
                <p>This streamlined HMI/SCADA-like solution elevates renewable energy management by combining user-centric design with powerful backend capabilities, setting a new standard in the field.
                </p>

                <dl>
                    <dt>For:</dt>
                    <dd><a href="https://addiva.se">Addiva AB</a></dd>
                </dl>

                <ul className="list">
                <li>Human-Computer Interaction (HCI)</li>
                <li>Human-Machine Interface (HMI)</li>
                <li>User Experience Design (UX)</li>
                <li>Real-Time Data Visualization</li>
                <li>Adaptive User Interfaces</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>C</li>
                <li>Modbus</li>
                <li>MQTT</li>
                <li>Mosquitto </li>
                <li>IOT</li>
                <li>Product Design</li>
                <li>Figma</li>
                <li>Front-End Development</li>
                <li>Responsive Design</li>
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Testing</li>
                <li>Git</li>
                </ul>
        </div>

        <h2 className="title--large main-title"></h2>
        <div className="main-text top--border topGap">
            <h2 className="title--large main-title">Integrating HCI and HMI in NextMind: Bridging Brain-Computer Interfaces with Tangible Interactions</h2>
            <figure>
                <div className="embed-responsive embed-responsive-16by9">
					<video className="embed-responsive-item w-100 h-100" controls loop muted>
                        <source src="assets/images/nextmind.mp4" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                </div>
                <figcaption>Demo video</figcaption>
            </figure>
                <p><strong>"Paint Of Mind"</strong>: Transforming Brainwaves into Art
In my exploration of the NextMind technology, I pioneered "Paint Of Mind," a project where I ingeniously reversed the traditional interaction flow from brain to digital device, creating a tangible interface that translates neural inputs into physical art. This endeavor not only showcased my capability to navigate and integrate HCI and HMI but also demonstrated my creativity in making abstract brain signals into concrete, visual art forms, expanding the horizon of digital interaction.</p>

<img src='assets/images/paint.png' alt='paint' />

<p><strong>"Play on Painting"</strong>: Synesthetic Experiences through Brain-Computer Interface
Building on the concept of multisensory integration, I developed "Play on Painting," a project that invites users to experience synesthesia by interacting with Wassily Kandinsky’s Composition IV through NextMind NeuroTags. By selecting different tags, users generate sounds of various instruments, blending visual stimuli with auditory experiences. This project exemplifies my innovative approach to HCI and HMI, creating a bridge between visual art and music, and offering a unique, immersive experience that demonstrates the potential of brain-computer interfaces in artistic expression.</p>

<img src='assets/images/paint-4.png' alt='paint-2' />

<p>Both projects underscore my contributions to advancing HCI and HMI technologies, highlighting my commitment to exploring and developing new ways for humans to interact with and control digital environments through intuitive, brain-driven interfaces.</p>

                <dl>
                    <dt>For:</dt>
                    <dd><a href="https://ar.snap.com/welcome-nextmind">NextMind</a></dd>
                </dl>
                <ul className="list">
                <li>Brain-Computer Interface (BCI)</li>
                <li>Human-Computer Interaction (HCI)</li>
                <li>Human-Machine Interface (HMI)</li>
                <li>SCADA</li>
                <li>Multisensory Interaction Design</li>
                <li>Tangible User Interfaces (TUI)</li>
                <li>User Experience Design (UX)</li>
                <li>Real-Time Data Visualization</li>
                <li>Adaptive User Interfaces</li>
                <li>C</li>
                <li>IOT</li>
                <li>Product Design</li>
                <li>Figma</li>
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                </ul>
        </div>

        <h2 className="title--large main-title" id="propmate"></h2>
        <div className="main-text top--border topGap">
            <h2 className="title--large main-title">Designed and Developed Propmate navigation system</h2>
            <figure>
                <div className="embed-responsive embed-responsive-16by9">
					<video className="embed-responsive-item w-100 h-100" controls loop muted>
                        <source src="assets/images/propmate.mp4" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                </div>
                <figcaption>Propmate dashboard (<a href="https://propmate.se/">https://propmate.se/</a>)</figcaption>
            </figure>
                <p>The PropMate application features detailed, drill-down data, and its navigation structure resembles folder access. To enhance user experience, I designed an intuitive navigation system. This system was developed as a navigation component using React, enabling efficient state management across various sections of the web application.</p>

                <dl>
                    <dt>For:</dt>
                    <dd><a href="https:addiva.se">Addiva AB</a></dd>
                </dl>
                <ul className="list">
                    <li>Front-End Engineering</li>
                    <li>Problem-solving</li>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>GraphQL</li>
                    <li>Product Design</li>
                    <li>Figma</li>
                </ul>
        </div>

        <h2 className="title--large main-title" id="hiveage"></h2>
        <div className="main-text top--border topGap">
            <h2 className="title--large main-title">Improving Custom Invoice Template System.</h2>
            <figure>
            <div className="embed-responsive embed-responsive-16by9 hiveage--video">
                    <iframe className="embed-responsive-item w-100 h-100" src="https://www.youtube.com/embed/kLib3HVYNPg?si=nVcltCqLCvtNY69n&amp;controls=0" muted title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <figcaption>Hiveage custom invoice template system (<a href="https://www.hiveage.com/">https://www.hiveage.com/</a>)</figcaption>
            </figure>
                <p>I led the enhancement of Hiveage's custom invoice template feature, focusing on front-end improvements while also collaborating closely with back-end technologies. My work involved utilizing React for a more interactive and user-friendly interface, and I integrated Node.js and GraphQL on the back-end for efficient data handling.</p>


                <dl>
                    <dt>For:</dt>
                    <dd><a href="https://www.hiveage.com/">Hiveage Inc.</a></dd>
                </dl>

                <ul className="list">
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>postgreSQL</li>
                <li>Git</li>
                <li>Product Design</li>
                <li>Front-End Development</li>
                <li>Figma</li>
                <li>Responsive Design</li>
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Testing</li>
                </ul>
        </div>


</section>

)
}

{menu === 'lab' &&  (

<section id={menu} className="page lab" ref={ref}>
        <hr className="separate" id="lab-section" />

        <h2 className="title--large main-title ">Experiments / Side projects:</h2>
        <div className="main-text top--border">
            <h2 className="title--large main-title">Play Peek-a-Boo with a cute one</h2>
            <figure>
                <img src="assets/images/peeka.gif" alt="peeka" />
                <figcaption>Playing Peek-a-Boo (<a href="https://peeka-boo.se">https://peeka-boo.se/</a>)</figcaption>
            </figure>
                <p><strong>Peeka-boo.se</strong> ~ Play Peek-a-Boo with adorable babies from all over the world! This is a fun way to connect across different languages and cultures.</p>
<p>I trained an AI model to recognize two states in the Peek-a-Boo game: "covered" and "not covered." This integration of AI brought a unique, interactive dimension to a traditional game.</p>

<p className="left"><a className="demo--link" href="https://peeka-boo.se">Check the Application</a></p>

        </div>

        <h2 className="title--large main-title topGap"></h2>
        <div className="main-text top--border topGap">
            <h2 className="title--large main-title">Google's shaka player themes and tool</h2>
            <figure>
                    <video className="embed-responsive-item w-100 h-100" controls loop muted>
                        <source src="assets/images/shaka.mp4" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                <figcaption>Tool Dashboard (<a href="https://lucksy.github.io/shaka-player-themes/">github.io/shaka-player-themes/</a>)</figcaption>
            </figure>
                <p><strong>Shaka Player</strong> ~ Google's open-source JavaScript library for adaptive media.</p>
                <p>I have designed and developed player theme library, and tool to create player themes easily.</p>

                <p className="left"><a className="demo--link" href="https://lucksy.github.io/shaka-player-themes/">Check the Application</a></p>

        </div>
</section>

)
}

{menu === 'contact' &&  (

<section id={menu} className="page contact" ref={ref}>
        <hr className="separate" id="contact-section" />
        <div className="footer topGap">
            <div>
            <h2 className="title--large main-title">Contact:</h2>
            <p className="left"><a className="demo--link" href="mailto:sam@webvitals.se">sam@webvitals.se</a></p>
            </div>
            <div className="middle">
            <h2 className="title--large main-title">Phone:</h2>
            <p className="left"><a className="demo--link" href="tell:+46 729 060 918">+46 729 060 918</a></p>
            </div>

            <div className="last">
            <h2 className="title--large main-title">Download:</h2>
            <p className="left"><a className="demo--link" href="assets/front-end-cv-Sampath.pdf">CV / Resume</a></p>
            </div>
        </div>
        <div className="footer--img">
            <img  src="assets/images/dog.png" alt="Logo" />
        </div>
</section>

)
}

    </>
  )
}

