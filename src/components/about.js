import AnimateOnScroll from "../utils/animateOnScroll.js"
import jennRabinSketch from "../assets/images/jenn_rabin_sketch.png";
import "./about.scss";


const About = () => {
  return (
    <section className="About">
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
              I am a frontend software engineer with a passion for creating
              user-friendly and visually appealing websites that are accessible to
              all. My love for software engineering, art, and design, combined with
              my drive for community building, makes me a unique and valuable asset
              to any team. My double major in Psychology and Philosophy in undergrad
              has given me unique insights into human behavior, which I apply to my
              work to create meaningful and impactful user experiences. I am
              currently seeking opportunities as a frontend engineer, frontend
              developer, or UX developer.
              <br />
              <br />
              In my software work, accessibility is a top priority. I understand the
              importance of creating websites that can be used by a diverse range of
              users, including those with disabilities. In my free time, I enjoy
              expressing my creativity through painting, drawing, crochet, and
              various other crafts. I am also passionate about spending time
              outdoors, hiking, kayaking, and exploring new towns and cities. These
              hobbies allow me to find inspiration and balance in my life. I am
              dedicated to using my skills and experiences to build communities and
              make a positive impact. I hope to share my projects, experiences, and
              insights through this site and I'm excited to continue growing as a
              software engineer, artist, and community builder.
        </AnimateOnScroll>
            </p>
       
      </div>
    </section>
  );
};

export default About;
