import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Headphones E-commerce Website",
    img: "/hoi/headphones.png",
    desc: "I enhanced the UI/UX of a headphones webstore by conducting user research, redesigning navigation, and creating a cohesive visual design. I streamlined the use process, ensured responsiveness, and optimized loading times. Through A/B testing, I refined the user experience, resulting in increased engagement, higher conversion rates, and greater customer satisfaction. This project highlights my ability to deliver intuitive and visually appealing digital experiences.",
    link: "https://www.figma.com/proto/Fzl8OyuHGeyWWIV0Q1bzM8/Headphones?node-id=1-839&t=d7gV37VxWf60svXJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "Donut Selection Website",
    img: "/hoi/donut.png",
    desc: "I enhanced a donut webstore's UI/UX by conducting user research, redesigning navigation, and implementing interactive sliders for product display. My cohesive visual design, streamlined checkout, and responsive optimization led to increased engagement, higher conversion rates, and improved customer satisfaction, showcasing my ability to create intuitive and appealing digital experiences.",
    link: "https://www.figma.com/proto/VluvdD9sOB54XHBrjNOSKv/donut?node-id=3-11&t=y7EA7VRlt78gZrI7-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 3,
    title: "Smart Student Program",
    img: "/hoi/smart_student.png",
    desc: "I enhanced the UI/UX of the Smart Student education program by conducting user research, redesigning navigation, and implementing interactive modules. My cohesive visual design, intuitive interface, and responsive optimization led to increased engagement, improved learning outcomes, and higher user satisfaction, showcasing my ability to create effective and appealing educational platforms.",
    link: "https://www.figma.com/proto/bDHlf8elxdYJBtUdUySKwM/Smart-student?node-id=1-263&t=Ghz8P4Xv2AznCUeG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: 4,
    title: "Pizza E-commerce Website",
    img: "/hoi/pizza.png",
    desc: "I enhanced the UI/UX of a pizza e-commerce website by conducting user research, redesigning navigation, and implementing cool interactive sliders for product display. My cohesive visual design, streamlined checkout process, and responsive optimization led to increased engagement, higher conversion rates, and improved customer satisfaction, showcasing my ability to create intuitive and appealing digital experiences.",
    link: "https://www.figma.com/proto/h2gwQHh5MUy3xi3pWNLF1U/Pizza-Website?node-id=4-2&starting-point-node-id=4%3A2&t=fQumfjuYb7qwVBwE-1",
  },
  {
    id: 5,
    title: "Pomodoro App",
    desc: "I enhanced the UI/UX of a Pomodoro timer app by conducting user research, redesigning navigation, and implementing a simple, task-oriented interface to avoid distractions. My cohesive visual design, streamlined functionality, and responsive optimization led to increased user focus, higher productivity, and greater user satisfaction, showcasing my ability to create intuitive and efficient digital experiences.",
    img: "/hoi/pomodoro.png",
    link: "https://www.figma.com/proto/ub5b1Rak37VJBTnDq9QiEz/Pomodoro?node-id=8-3&starting-point-node-id=8%3A3&t=nJwVJCag9R4mYLu2-1",
  },
  {
    id: 6,
    title: "Amazon Frontpage Clone",
    img: "/hoi/amazon.png",
    desc: "I attempted to enhance the UI/UX of Amazon's front page by conducting user research and attempting to redesigning the navigation. Despite my efforts to implement a cohesive visual design and streamlined interface, there were no significant improvements. This experience showcased my ability to approach complex projects and highlighted the challenges of optimizing a highly refined platform.",
    link: "https://www.figma.com/proto/rG9qwmKXANBxtiSMVgOqh5/Amazon?node-id=2-2&t=3kmeKEz2MTUGI2Y3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 7,
    title: "Music App",
    img: "/hoi/music.png",
    desc: "I attempted to redesign a calm and relaxing music app by focusing on minimizing distractions with a simple, serene interface. My approach included user research and a streamlined design to enhance the app's soothing experience. While improvements were limited, this project highlighted my commitment to creating focused and user-centric digital environments.",
    link: "https://www.figma.com/proto/T9MJfeJxFgCxuo896jAn6H/Music-Player-App?node-id=1-356&t=7Ri8RxKdS1FKxHHv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 8,
    title: "Finance Dashboard",
    img: "/hoi/finance.png",
    desc: "I developed a finance management dashboard with both dark mode and light mode options, emphasizing extensive user research and continuous improvement. By iterating on feedback and refining the design, I ensured a seamless and intuitive experience across different lighting conditions. This project highlights my commitment to user-centric design and ongoing enhancement for optimal usability and satisfaction.",
    link: "https://www.figma.com/proto/8Kj3YorqlwfDkca7Rr5GtW/Finance-Dashboard?node-id=1-2&t=iHpsgL2rhMfme6Oh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 9,
    title: "Air Jordan Mobile App",
    img: "/hoi/jordan.png",
    desc: "I developed one of the first drafts for the Air Jordan mobile app, focusing on integrating extensive user research and continuous improvement. My design emphasized a sleek, intuitive interface while incorporating feedback to refine the user experience. This project showcased my ability to create engaging digital experiences and adapt designs through iterative enhancements.",
    link: "https://www.figma.com/proto/H5DSJqYuzahSQowGWeDA8w/Mock-1?node-id=11-157&t=nizdAPJDiCwF8W0i-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleClick = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleClick} target="_blank">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
