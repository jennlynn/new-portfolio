import AnimateOnScroll from "../utils/animateOnScroll.tsx"
import jennRabinSketch from "../assets/images/jenn_rabin_sketch.png";
import "./about.scss";


const About = () => {
  return (
    <section className="About" id="about">
      <div className="About-content">
        <h2 className="About-heading u-heading">About</h2>
        <img
          className="About-image"
          src={jennRabinSketch}
          alt="Jenn Rabin, senior frontend software engineer, artist, and community builder"
          width="300"
          height="400"
        />
        
          <p className="About-description u-description">
            <AnimateOnScroll> 

              I am a frontend software engineer with a passion for creating visually appealing, user-friendly, and accessible websites. As an artist, I enjoy expressing my creativity through painting, drawing, and other arts and crafts. I also love exploring the outdoors, hiking, and kayaking to find inspiration and balance in my life.
              <br />
              <br />
              In my software work, accessibility is a top priority. I understand the importance of creating websites that can be used by a diverse range of users, including those with disabilities. With a solid foundation in HTML, CSS, JavaScript, and React, I am always eager to learn new technologies and techniques to improve my skills.
              <br />
              <br />
              <span className="About-description-emphasis">Currently, I'm seeking opportunities as a frontend engineer, frontend developer, or UX developer.</span> With a background in design, development, and UX, combined with a drive for community building, I'm confident I can be a unique and valuable asset to any team.

            </AnimateOnScroll>
          </p>
       
      </div>
    </section>
  );
};

export default About;
