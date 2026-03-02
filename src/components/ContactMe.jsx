import React from "react";
import styles from "./ContactMe.module.css";
import emailIcon from "/assets/email.png";
import instagramIcon from "/assets/instagram.png";
import linkedinIcon from "/assets/linkedin.png";

const ContactMe = () => {
  const contacts = [
    {
      icon: emailIcon,
      alt: "email logo",
      link: "mailto:sharathchandra7060@gmail.com",
      text: "sharathchandra7060@gmail.com",
      type: "Email"
    },
    {
      icon: linkedinIcon,
      alt: "linkedin logo",
      link: "https://www.linkedin.com/in/rekhandar-sharathchandra",
      text: "LinkedIn Profile",
      type: "LinkedIn"
    },
    {
      icon: instagramIcon,
      alt: "instagram logo",
      link: "https://www.instagram.com/sharathchandra_._/",
      text: "Instagram Profile",
      type: "Instagram"
    }
  ];

  return (
    <section className={styles.container} id="contact">
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Let’s create something extraordinary together
      </p>

      <div className={styles.contactWrapper}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconBox}>
              <img src={contact.icon} alt={contact.alt} />
            </div>

            <div className={styles.contactInfo}>
              <span className={styles.contactType}>{contact.type}</span>
              <span className={styles.contactText}>{contact.text}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;