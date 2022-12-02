import styles from '../../styles/contact.module.scss';
import contactBg from '../../img/contact-bg.png';
import db from '../../db/db';


const Contact = () => {
  return (
    <section className={styles.contact__container}>
      <div className={styles.get__in__touch}>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you.</p>
        <form className={styles.form__container}>
          <div className={styles.form__group}>
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="First Name *" />
          </div>
          <div className={styles.form__group}>
          <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email *"/>
            </div>
          <div className={styles.form__group}>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Subject *" />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="message">Your message</label>
            <textarea name="message" cols="30" rows="6" placeholder="Your message *"></textarea>
          </div>
        <button>Send Message</button>
        </form>
      </div>

      <div className={styles.contact__me}>
        <img src={contactBg} alt="" />
        {db.contact.map((hitMe, index) => (
          <div key={index} className={styles.reach__us}>
          <span style={{backgroundColor: hitMe.color}}>{hitMe.icon}</span>
          <div className="content">
            <h3>{hitMe.mode}</h3>
            <h2>{hitMe.connect}</h2>
          </div>
        </div>
        ))}
      </div>
    </section>
   
  )
}

export default Contact;