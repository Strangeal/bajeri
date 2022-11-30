import styles from "../../styles/Skills.module.scss";
import skillImg from "../../img/skills.png";
import db from '../../db/db';

const Skills = () => {

  return (
    <section className={styles.skills__container}>
      <h2 className={styles.head}>MY SKILLS</h2>
      <div className={styles.my__skills}>
        <div className={styles.content}>
          {db.skillList.map((skill, index) => (
            <div
              key={index}
              className={styles.skills}
              style={{ backgroundColor: skill.color }}
            >
              <span>{skill.icon}</span>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
        <img src={skillImg} alt="skillImg" />
      </div>
      <div className={styles.skills__action}>
        <h2>Interested working with me?</h2>
        <button>Contact now</button>
      </div>
    </section>
  );
};

export default Skills;
