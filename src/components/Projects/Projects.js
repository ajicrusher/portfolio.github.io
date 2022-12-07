import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Home from "../../Assets/Projects/Home.png";
import Belakang from "../../Assets/Projects/Belakang.png";
import billboard from "../../Assets/Projects/Billboard.png";
import sedekah from "../../Assets/Projects/Sedekah bumi.png";
import karnaval from "../../Assets/Projects/Karnaval.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="Red">PROJECT</strong>
          {/* My Recent <strong className="purple">Works </strong> */}
        </h1>
        <p style={{ color: "white" }}>
          Beberapa Project yang telah saya kerjakan.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Home}
              title="Virttual Classroom"
              description="Aplikasi Virtual Classroom yang digunakan untuk kegiatan belajar mengajar mahasiswa Teknik Informatika Universitas Bhayangkara Surabaya."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Belakang}
              title="Logo Farmasi"
              description="Pada project ini saya berpartisipasi dengan seorang karyawan Rs.Anwar Medika yang bertugas melakukan desain pada kaos pilihan seorang karyawan Rs.Anwar Medika."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billboard}
              title="Billboard"
              description="Pada project ini saya berpartisipasi sebagai desainer. Saya diberi tugas oleh seseorang untuk mendesain papan Billboard untuk meningkatkan penjualan produk"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sedekah}
              isBlog={false}
              title="Sedekah Bumi"
              description="Pada Project ini saya berkesempatan menjadi pengambil gambar dan video dari kegiatan Sedekah Bumi Dusun Tlogobedah, Hulaan, Menganti Gresik"
              ghLink=""
              demoLink="https://drive.google.com/file/d/1lICi6FZztH2kdtDKJf0IPMr9VKiNd5jr/view?usp=share_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karnaval}
              isBlog={false}
              title="Karnaval"
              description="Pada Project ini saya berkesempatan menjadi pengambil gambar dan video dari kegiatan Karnaval Dusun Tlogobedah, Hulaan, Menganti Gresik"
              ghLink=""
              demoLink="https://drive.google.com/file/d/1XsODPGDGpIQJtQOXpPMjhsPndnv2kgqY/view?usp=share_link" 
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
