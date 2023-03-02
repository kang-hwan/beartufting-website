import React from "react";
import "./home.css";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import TuftRug from "../../images/TuftRug.png";
import FluidArt from "../../images/FluidArt.png";
import PunchNeedle from "../../images/PunchNeedle2.png";

function Home() {
  return (
    <div className="home-container">
      <HeroCarousel />
      <section className="section-introduction">
        <h2>Special Memories, Special Rugs.</h2>
        <div className="intro-caption">
          <h4>
            "Are you looking for some special activity to enjoy with your
            lovers?{" "}
          </h4>
          <h4>We have everything here for you!"</h4>
        </div>
        <p>
          Tufting may seems difficult but do not afraid! Everyone can easily
          create their own rugs. Our friendly staffs will teach you loads of
          tips and they will be on your side to help you if you are stuck
          somewhere!
        </p>
      </section>
      <section className="section-classes">
        <h2>Our Classes</h2>
        <div className="card-container">
          <div class="card" style={{ width: 330 }}>
            <img src={TuftRug} class="card-img-top" alt="Tuft Rug" />
            <div class="card-body">
              <h5 class="card-title">Tufting</h5>
              <p class="card-text">
                You can make your own rug with your own designs. Depends on the
                size, it may take up to 3-4 hours or even days.
              </p>
            </div>
          </div>
          <div class="card" style={{ width: 330 }}>
            <img src={FluidArt} class="card-img-top" alt="Fluid Art Painting" />
            <div class="card-body">
              <h5 class="card-title">Fluid Art Painting</h5>
              <p class="card-text">
                No tools in hand. Simply just pour it and paint it! Strongly
                recommend for kids under 10 years old.
              </p>
            </div>
          </div>
          <div class="card" style={{ width: 330 }}>
            <img src={PunchNeedle} class="card-img-top" alt="Punch Needle" />
            <div class="card-body">
              <h5 class="card-title">Punch Needle</h5>
              <p class="card-text">
                Are you looking for home interior gadgets? Go for punch needle!
                You can hang them or place them on anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="google-embed">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2468303824453!2d151.08138571624477!3d-33.83174462457032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a5cc91613f57%3A0x529e982c457ddc3e!2sBear%20Tufting!5e0!3m2!1sen!2sau!4v1677678858337!5m2!1sen!2sau"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="GoogleMapsLocation"
        ></iframe>
      </section>
    </div>
  );
}

export default Home;
