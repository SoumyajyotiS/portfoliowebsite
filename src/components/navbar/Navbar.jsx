import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <div className="titleing">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Soumyajyoti Sarkar
        </motion.span>
        </div>
        <div className="social">
          <a href="https://github.com/Broken-Kaddu" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/soumyajyoti-sarkar-823496300/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
