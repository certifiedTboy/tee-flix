import { Link } from "react-scroll";
import "./BackToTop.css";

const BackToTop = ({ scrollTop }) => {
  return (
    <Link
      activeClass="active"
      className={`btn2 back-to-top ${scrollTop > 200 ? "fadeIn" : "fadeOut"} `}
      to="intro"
      spy={true}
      smooth={true}
      delay={500}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
    >
      <i className="fa fa-chevron-up"></i>
    </Link>
  );
};

export default BackToTop;
