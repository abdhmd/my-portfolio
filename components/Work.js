import styles from "../styles/Works.module.css";
import Image from "next/image"
function Work({ repos }) {
  return (
    <div className={styles.works}>
      {repos.map((repo) => {
        const url = `https://hmd-${repo.name}.netlify.app`;
        const KEY_API = process.env.NEXT_PUBlIC_KEY;
        const date = new Date(repo.created_at);
        const dateText = date.toLocaleDateString();

        return (
          <div key={repo.id} className={styles.work}>
            <Image
              src={`https://api.thumbnail.ws/api/${KEY_API}/thumbnail/get?url=${url}&width=480`}
              alt={repo.name}
              layout="fill"
            />
            <div className={styles.work_desc}>
              <p>{dateText}</p>
              <h4>{repo.name.replace("-", " ")}</h4>
              <div>
                <a href={repo.html_url} target="_">
                  <i className="bx bxl-github"></i>
                </a>
                <a href={url} target="_">
                  <i className="bx bx-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;



