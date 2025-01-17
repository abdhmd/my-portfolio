import styles from "../styles/Contact.module.css"

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>contact me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Your Name</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        <p>
          <label htmlFor="youremail">Your Email</label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
        <p>
          <label htmlFor="yourmessage">Message</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

export default Contact;
