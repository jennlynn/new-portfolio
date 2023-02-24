import AnimateOnScroll from "../utils/animateOnScroll.tsx"
import "./blog.scss";

const Blog = () => {
  return (
    <section className="Blog">
      <AnimateOnScroll reappear> 
        <p className="Blog-description">
          For a variety of reasons, I recently decided it was a good time to start blogging. Through this blog, I'm going to explore a range of topics, from creativity and art to web development and design. I'll also be diving into the world of AI and AI ethics, as it's an area that fascinates me and that I think is crucial for us to address as a society.
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll reappear>       
        <button className="Blog-button">view my blog</button>
      </AnimateOnScroll>
    </section>
  );
};

export default Blog;
