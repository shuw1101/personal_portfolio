import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import frontend from "../assets/img/frontend2.svg";
import backend from "../assets/img/backend1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import ListGroup from 'react-bootstrap/ListGroup';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technical Skills</h2>
                        <p>I am skilled in platform development and am actively involved in all stages of development, including frontend and backend development, unit testing and system deployment. I have experience in the following areas: <br></br> Frontend Developing, Backend Developing, Cloud Computing and Service, Databases and Big Data </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <span className="skilltagline">Frontend Development</span>
                                {/* <ul className = "skilllist">
                                  <li>React.JS</li>
                                  <li>Angular.JS</li>
                                  <li>Vue.JS</li>
                                  <li>HTML5/CSS3</li>
                                </ul> */}

                            </div>
                            <div className="item">
                              <span className="skilltagline">Backend Development</span>
                              <ul className = "skilllist">
                                {/* <li>Spring Boot/Cloud(MVC)</li>
                                <li>Node.js/Express.js/Next.js</li>
                                <li>Flask & Django</li>
                                <li>Microsoft .NET</li> */}
                              </ul>
                            </div>
                            <div className="item">
                              <span className="skilltagline">Cloud Computing Platform</span>
                                <ul className = "skilllist">
                                  {/* <li>Amazon Web Service(AWS)</li>
                                  <li>Microsoft Azure</li>
                                  <li>Google Cloud Platform</li> */}
                                </ul>
                            </div>
                            <div className="item">
                              <span className="skilltagline">Databases & Big Data</span>
                                  {/* <ul className = "skilllist">
                                    <li>PostgreSQL & GraphQL</li>
                                    <li>Microsoft SQL Server & T-SQL</li>
                                    <li>MySQL</li>
                                    <li>Hadoop & HBase & Kafka</li>
                                    <li>Redis</li>
                                    <li>MongoDB</li>
                                    <li>Elastic Search</li>
                                  </ul> */}
                            </div>
                            {/* <div className="item">
                              <span className="skilltagline">Tools & Platforms</span>
                                  <ul className = "skilllist">
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>Kubernetes</li>
                                    <li>Nginx</li>
                                    <li>Selenium</li>
                                    
                                  </ul>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
