import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/P1.PNG",
    title: "Full Stack Real Estate Application",
    desc: "FULLSTACK MERN APPLICATION",
    link: "https://mearn-estate.onrender.com/",
    github:"https://github.com/OlawuniTemitope/mearn-estate"
  },
  {
    
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "NEXT JS APPLICATION WITH ADVANCED ROLE BASE NEXT AUTH BETA",
    link: "https://school-management-bay-seven.vercel.app/",
    github:"https://github.com/OlawuniTemitope/School_management"
     },
  {
     id: 3,
    img: "/P3.PNG",
    title: "Full Stack Tourist Application",
    desc: "COPLETE NODE JS  APLLICATION WITH ALL IMPORTANT FEATURES ON NODE JS AND EXPRESS",
    link: "https://tourist-4hfd.onrender.com/",
    github:  "https://github.com/OlawuniTemitope/tourist"
  },
  {
    id: 4,
    img: "/P4.PNG",
    title: "E-commerce website",
    desc: "Next js Ecommerce Application with all important features of next js",
    link: "https://e-commerce-kappa-woad.vercel.app/",
    github:"https://github.com/OlawuniTemitope/e-commerce"
  },
  {
    id: 5,
    img: "/P5.PNG",
    title: "Advanced Next Auth beta",
    desc: "Everything about next js authentication",
    link: "https://next-14auth.vercel.app/",
    github:"https://github.com/OlawuniTemitope/next-14auth"
  },
  {
    id: 6,
    img: "/P6.PNG",
    title: "Animated Portfolio Website",
    desc: "Visit For My Past Project",
    link: "https://myportfoliopage-roan.vercel.app/",
    github:"https://github.com/OlawuniTemitope/myportfoliopage"
  },
  {
    id: 7,
    img: "/P7.PNG",
    title: "E-commerce Market Place Admin Dashboard",
    desc: "Admin Dashboard Using ShadcnUI",
    link: "https://e-commer-store.vercel.app/",
    github:"https://github.com/OlawuniTemitope/e-commerce-admin-dashboard"
  },
  {
    id: 8,
    img: "/P8.PNG",
    title: "E-commerce Market Place Store",
    desc: "Seperate Store From Admin Dashboard",
    link: "https://e-commerce-admin-dashboard-azure.vercel.app/",
    github:"https://github.com/OlawuniTemitope/e-commer-store"
  },
  {
    id: 9,
    img: "/P9.PNG",
    title: "Library Management System",
    desc: "Next js Application",
    link: "https://library-management-taupe-iota.vercel.app/",
    github:"https://github.com/OlawuniTemitope/library_management"
  },
  {
    id: 10,
    img: "/P1.PNG",
    title: "Full Stack Real Estate Application",
    desc: "FULLSTACK MERN APPLICATION",
    link: "https://mearn-estate.onrender.com/",
    github:"https://github.com/OlawuniTemitope/mearn-estate"
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <div className="BSep">
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
        <motion.a variants={textVariants} href={item.github}>
          <button> <img src="/git.webp" width={40} height={40} alt="" /></button>
        </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
