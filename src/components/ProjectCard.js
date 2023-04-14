import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = ({ title, description, imgUrl, moreLink}) => {
  return (
    <Col size={12} sm={6} md={4} className="project-card">
          <Card className="project-card-view">
      <Card.Img variant="top" src={imgUrl} alt="card-img" />
      <Card.Body>
        <Card.Title style={{textAlign: "center"}}>{title}</Card.Title>
        <Card.Text style={{ width: "100%", textAlign:"left"}}>
          {description}
        </Card.Text>
        {/* <Button variant="primary" href={moreLink} target="_blank" style={{ marginLeft: "60px" }}>
          <BsGithub /> &nbsp;
          {"Code"}
        </Button>
        {"\n"}
        {"\n"} */}

          <Button
            variant="primary"
            href={moreLink}
            target="_blank"
            style={{ marginLeft:"30%",backgroundColor:"#623686",borderColor:"#623686"}}
          >
            <CgWebsite /> &nbsp;
            {"Learn More"}
          </Button>
        
      </Card.Body>
    </Card>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 onClick={() => goToDetails(1)}>{title}</h4>
          <h5 style={{marginTop:"30px"}}>{description}</h5>
          
        </div>
      
      </div> */}
    </Col>
  )
}
