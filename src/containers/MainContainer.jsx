import { messages } from "@/utils/constants";
import styles from "./maincontainer.module.css";
import Footer from "@/components/footer/Footer";

const images = [
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
  {
    path: "",
    height: "",
    width: "",
  },
];
const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>{messages.title}</div>
      <div class={styles.bodyContent}>
        {/* {
            images.map((el,i)=>{
                return (
                <div className={styles.cardImage}>

                </div>
                )
            })
        } */}
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;
