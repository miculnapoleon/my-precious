import styles from './footer.module.css'
import Image from "next/image";

const Footer = () =>{
    return(
        <div className={styles.footer}>
        <Image
          src="icons/contact.svg"
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
    )
}

export default Footer;