import { skills } from "../skillsdata";
import Social from "../components/Social";
import styles from "../styles/About.module.css";
function about() {
  return (
    <section className={styles.about}>
      <h1>about me</h1>
      <div className="about-desc">
        <h2>Hi, i'm abdelhamid</h2>
        <p>
          Frontend developer with 5 years experience,I create successful
          websites that are fast, easy to use, and built with best practices.
        </p>
        <p>
          I work to make a better web; one that is fast, easy to use, beautiful,
          accessible to all.
          <br />I use HTML, CSS, and JavaScript to produce responsive websites
          and web apps that provide users the best and most appropriate
          experience suited to their device and browser.
        </p>
        <p>
          I have a special interest in use of animation on the web. I
          particularly like working on websites that have seamless transitions
          and require high-level performance to maintain a smooth and appealing
          website.
        </p>
      </div>
      <div className={styles.skills}>
        <h2>my skills</h2>
        <div className={styles.skills_desc}>
          {skills.map((skill) => {
            const styleItem = {
              width: skill.percentage,
            };
            return (
              <div className={styles.skill} key={skill.id}>
                <span>{skill.name}</span>
                <span>{skill.percentage}</span>
                <span style={styleItem}></span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.follow}>
        <h2>follow me</h2>
        <Social />
      </div>
    </section>
  );
}

export default about;
