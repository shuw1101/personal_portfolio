import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import bike_manage_img from "../assets/img/bike_manage_img.png";
import movie_img from "../assets/img/movie_reco.png";
import blog_img from "../assets/img/blog.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const platform_projects = [
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation platform providing personalized movie recommendations to users based on their preferences and allow users to sort and filter movies based on various criteria such as genre and release date.",
      imgUrl: movie_img,
      moreLink:"https://github.com/shuw1101/Movie_Recommendation_Platform"
    },
    {
      title: "Bike Rental Management System",
      description: "The bike rental management system, which enables administrators to manage rental orders and customers information, as well as check bike location distribution and investigate statistics on past orders.",
      imgUrl: bike_manage_img,
      moreLink:"https://github.com/shuw1101/React_BikeManage_System"
    },
    {
      title: "Blog Platform",
      description: "The blog platform comprises two websites: one for administrators to manage blogs, and the other for the public to read them. It enables various functions like blog posting, deletion, comment management, and keyword-based article search.",
      imgUrl: blog_img,
      moreLink:"https://github.com/shuw1101/Personal_Blog_Platform"
    },
   
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Experience</h2>
                <p>
                I am a highly motivated software engineer with a passion for exploring and learning new technologies. I am constantly seeking to expand my knowledge and skills in order to create innovative and efficient solutions. 
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">System & Platform</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Plugins</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        </Row>
                      <Row>
                        {
                          platform_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be added in the future.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be added in the future.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
