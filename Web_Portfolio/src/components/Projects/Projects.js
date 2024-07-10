import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anyPost from "../../Assets/Projects/Any_Post.png";
import mangaMania from "../../Assets/Projects/Manga_Mania.png";
import cashRegisterManager from "../../Assets/Projects/Cash_Register_Manager.png";
import funWithTriangles from "../../Assets/Projects/Fun_With_Triangles.png";
import isYourBirthdayLucky from "../../Assets/Projects/Is_Your_Birthday_Lucky.png";
import palindromeBirthday from "../../Assets/Projects/Palindrome_Birthday.png";
import stockProfitAndLossCalculator from "../../Assets/Projects/Stock_Profit_and_Loss_Calculator.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anyPost}
              isBlog={false}
              title="Any Post"
              description="A Social Media App built with React.js and mockBee to connect and hang out with friends. Features include adding, deleting, and editing posts, as well as editing user profiles. This Social Media WebApp is designed for connecting people."
              ghLink="https://github.com/RaviYadav3003/Any-Post"
              demoLink="https://any-post.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mangaMania}
              isBlog={false}
              title="Manga Maina"
              description="Manga Maina is an E-Commerce app built with ReactJS, offering a wide range of book categories. Explore and choose your favorite manga from our extensive collection. Visit us now at Manga Maina and dive into your next great read!"
              ghLink="https://github.com/RaviYadav3003/Manga-Mania"
              demoLink="https://mangaa-maniaa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashRegisterManager}
              isBlog={false}
              title="CashRegister Manager"
              description="A cash register manager app that assists users in calculating the minimum number of notes needed to return change to customers. This tool simplifies transactions, ensuring quick and efficient cash handling for a smooth customer experience."
              ghLink="https://github.com/RaviYadav3003/Cash-register-manager"
              demoLink="https://cashregisterapp1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funWithTriangles}
              isBlog={false}
              title="Fun With Triangles"
              description="A simple website that helps you calculate the area of an equilateral triangle based on the side length you provide. Built with vanilla JavaScript, it offers an easy and interactive way to perform geometric calculations."
              ghLink="https://github.com/RaviYadav3003/Fun_With_Triangles"
              demoLink="https://funwithtrianglesapp1.netlify.app/aot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={isYourBirthdayLucky}
              isBlog={false}
              title="Is Your Birthday Lucky"
              description="Discover if your birthday is lucky with our fun and interactive website. By simply entering your birthdate, you can find out if it brings good fortune. Built with user-friendly features, this site provides an engaging way to explore the significance of your special day."
              ghLink="https://github.com/RaviYadav3003/BirthdayLucky"
              demoLink="https://birthday-lucky2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palindromeBirthday}
              isBlog={false}
              title="Palindrome Birthday"
              description="An app that checks whether your birthday is a palindrome, providing a fun way to see if your special day reads the same backward as forward. Built to deliver a unique and engaging user experience."
              ghLink="https://github.com/RaviYadav3003/Birthday-Palindrome"
              demoLink="https://birthdaypalindrome2.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockProfitAndLossCalculator}
              isBlog={false}
              title="Stock Profit And Loss Calculator"
              description="A website that helps users calculate their profit or loss in both percentage and absolute value. Built using HTML, CSS, and vanilla JavaScript, it provides a simple and intuitive way to track financial performance."
              ghLink="https://github.com/RaviYadav3003/Profit-LossApp"
              demoLink="https://profiandlossapp.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
