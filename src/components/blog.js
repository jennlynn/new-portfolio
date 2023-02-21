import "./blog.scss";

const Blog = () => {
  return (
    <section className="Blog">
      <button className="Blog-button">view my blog</button>

      <svg width="100%" height="100%" viewBox="0 0 680 300">
        <polygon
          className="Blog-mountain Blog-mountain--one"
          points="0,294 -1,117 38,62 61,128 147,10 218,146 248,109 311,170 417,86 496,177 513,153 579,210 637,179 696,221 694,297"
          strokeWidth="1"
        ></polygon>

        <polygon
          className="Blog-mountain Blog-mountain--two"
          points="696,298 700,110 675,23 562,186 545,123 522,151 489,76 425,162 393,98 304,186 201,137 66,237 42,208 0,244 0,299"
          strokeWidth="1"
        ></polygon>

        <polygon
          className="Blog-mountain Blog-mountain--three"
          points="-1,292 1,65 15,156 72,91 130,172 202,126 262,226 274,205 302,261 449,188 610,284 658,217 700,266 698,296"
          strokeWidth="1"
        ></polygon>

        <polygon
          className="Blog-mountain Blog-mountain--four"
          points="699,294 700,106 695,50 668,131 656,88 612,160 596,140 541,174 503,233 472,167 455,183 410,124 342,200 324,178 286,240 258,223 232,247 188,180 181,195 155,163 103,238 76,224 30,267 10,261 1,267 0,295 8,299 689,299"
          strokeWidth="1"
        ></polygon>
      </svg>
    </section>
  );
};

export default Blog;
