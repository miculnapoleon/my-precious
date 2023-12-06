import { messages } from "@/utils/constants";
import styles from "./maincontainer.module.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const images = [
  {
    path: "/images/1.jpg",
    height: 6016,
    width: 4016,
  },

  {
    path: "/images/3.jpg",
    height: 3841,
    width: 3436,
  },
  {
    path: "/images/4.jpg",
    height: 4016,
    width: 6016,
  },
  {
    path: "/images/2.jpg",
    height: 4016,
    width: 6016,
  },
  {
    path: "/images/5.jpg",
    height: 5524,
    width: 3225,
  },
  {
    path: "/images/6.jpg",
    height: 6016,
    width: 3333,
  },
  {
    path: "/images/5.jpg",
    height: 5524,
    width: 3225,
  },
  {
    path: "/images/2.jpg",
    height: 4016,
    width: 6016,
  },
];
const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>{messages.title}</div>
      <div class={styles.bodyContent}>
        <ResponsiveMasonry  columnsCountBreakPoints={{100: 1, 100: 2, 100: 3}}>
        <Masonry>
             {
            images.map((el,i)=>(
              <img key={i} src={el.path} style={{width: "100%", display: "block"}} />
            ))
        } 
        </Masonry>
    </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;
