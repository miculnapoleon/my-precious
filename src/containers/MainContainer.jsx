import { messages } from "@/utils/constants";
import styles from "./maincontainer.module.css";

const MainContainer = () => {
  return (
    <div>
      <div className={styles.title}>{messages.title}</div>
      <div class={styles.bodyContent}>
      </div>
      <div className={styles.footer}>
        {messages.footerCopyright}
      </div>
    </div>
  );
};

export default MainContainer;
