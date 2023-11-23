import { messages } from "@/utils/constants";
import styles from "./maincontainer.module.css";
import Image from "next/image";


const images =[
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
    {
        path:"",
        height:"",
        width:""
    },
]
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
      <div className={styles.footer}>
        <Image
          src="icons/copyright.svg"
          alt="copyright"
          fill
          className={styles.image}
        />
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/spontaneous_catches/">
            <Image
              src="icons/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="https://500px.com/p/aaalexandra?view=photos">
            <Image src="icons/500px.svg" alt="500px" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
