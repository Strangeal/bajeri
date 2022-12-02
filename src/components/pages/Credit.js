import styles from '../../styles/credit.module.scss';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Credit = () => {
  return (
    <div className={styles.Credit}>
      <div className={styles.socials}>
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
      {/* <div className="">
      <span>icon</span> */}
      <p>© 2022 copyright all right reserved</p>
    {/* </div> */}
    </div>
  )
}

export default Credit;