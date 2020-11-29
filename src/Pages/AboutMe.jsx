import "./styles/AboutMe.css";

function AboutMe() {
  return (
    <div className=" container">
      <br />
      <div className="row">
        <div className="col-md mx-auto">
          <img
            src="https://pbs.twimg.com/profile_images/1329276813575536641/bzXMVAgE_400x400.jpg"
            alt="Foto de perfil"
            className="profile-picture mx-auto"
          />
          <h1 className="about-title">Alejandro Apodaca</h1>
        </div>

        <div className="col-md">
          <div className="info ">
            <h4>✉️ Alexlink2004@gmail.com</h4>
            <h4>📞6865729088</h4>
          </div>

          <br />

          <div className="info  ">
            <h4>Acerca de mi:</h4>
            <h5>
              Estudiante de bachillerato entusiasta y autodidacta en
              programación y automatización, apasionado por el desarollo de
              soluciones prácticas especialmente en aquellas que ayudan a las
              personas a mejorar su calidad de vida.
            </h5>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default AboutMe;
