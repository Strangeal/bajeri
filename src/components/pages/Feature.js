import styles from "../../styles/feature.module.scss";
import bgEffect from "../../img/bg-effect-1.png";
import db from '../../db/db';

const feature = () => {

  return (
    <section
      className={styles.Feature__container}
      style={{ backgroundImage: `url(${bgEffect})` }}
      >
      <div className={styles.Head}>
        <h3>Features</h3>
        <h2>What i do</h2>
      </div>
      <div className={styles.body}>
        {db.features.map((each, index) => (
          <div
            className={styles.Feature__card}
            key={index}
            style={{ backgroundColor: each.color }}
          >
            <span>{each.icon}</span>
            <div className={styles.content}>
              <h3>{each.name}</h3>
              <p>{each.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default feature;
