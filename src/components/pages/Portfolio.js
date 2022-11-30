import styles from '../../styles/Portfolio.module.scss';
import db from '../../db/db';


const Portfolio = () => {
  return (
    <section className="portfolio__container">
      <div className={styles.head}>
        <h2>latest Projects</h2>
      </div>
      <div className={styles.portfolio__card}>
        {db.project.map((each, index) => (
          <div key={index} className={styles.card__insight}>
            <img src={each.image} alt="" />
            <div className={styles.content}>
              <h4>{each.category}</h4>
              <h3>{each.name}</h3>
              <p>{each.desc}</p>
              <button>View project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


