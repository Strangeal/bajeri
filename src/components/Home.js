import styles from "../styles/home.module.scss";
import homeBanner from "../img/home-banner.png";
import aboutBannner from "../img/aboutme-banner.png";
// import styles from './introduction.module.scss'

const Home = () => {
  return (
      <section className={styles.Home__container}>
        
        <div className={styles.Head}>
          <div className={styles.head__content}>
            <h1>👋, my name is Bajeri</h1>
            <h3>I'm a Developer</h3>
            <p>Based in Greater Accra, Ghana</p>
            <button>Contact Me</button>
          </div>
          <img src={homeBanner} alt="homeBanner" />
        </div>

        <div className={styles.home__action}>
        <h2>Interested in seeing my work?</h2>
        <button>Checkout now</button>
      </div>
        <div className={styles.Introduction}>
          <img src={aboutBannner} alt="aboutBannner" />
          <div className={styles.intro}>
            <h2>I'm a Fullstack Developer with over a year of experience</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quas at consectetur incidunt voluptates tenetur
              excepturi similique fugit repellat dolor atque illum hic ipsum id
              amet, officia iure culpa ea? Incidunt accusantium, voluptatem
              commodi fuga tempora distinctio a sit laboriosam esse eum quaerat
              inventore quae, nostrum tenetur officiis? Excepturi ipsum unde
              adipisci expedita accusantium exercitationem aliquid aliquam enim
              eaque quas!
            </p>
            <div className={styles.My__insight}>
              <div className="projects">
                <h3>245+</h3>
                <h5>Project Completed</h5>
                <button>Contact me</button>
              </div>
              <div className={styles.Clients}>
                <h3>95+</h3>
                <h5>Happy Clients</h5>
                <button>portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
