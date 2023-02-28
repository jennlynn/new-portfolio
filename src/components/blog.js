import AnimateOnScroll from "../utils/animateOnScroll.js"
import "./blog.scss";

const Blog = () => {
  return (
    <section className="Blog-wrap">
      <div  className="Blog">
        <AnimateOnScroll > 
          <p className="Blog-description u-description">
            Reccently, for a variety of reasons, I decided it was a good time to start blogging. Through this blog, I'm going to explore a range of topics, from creativity and art to web development and design. I'll also be diving into the world of AI and AI ethics, as it's an area that fascinates me and that I think is crucial for us to address as a society.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll >     
        <div className="Blog-linkWrap">  
          <a className="Blog-link" href="">view my <span className="Blog-buttonEmph">blog</span></a>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Blog;
