import Image from "next/image";
import React from "react";
import styles from "../../styles/Footer.module.css";
// import { IconName } from "react-icons/io";

interface LinkProps {
  name: string;
  href: string;
}
interface SocialLinkProps {
  name: string;
  href: string;
}

const Link = (props: LinkProps) => (
  <a href={props.href} className={styles.link}>
    <h1>{props.name}</h1>
    <Image width={16} height={16} src="/icon.svg" alt="" />
  </a>
);
const SocialLink = (props: SocialLinkProps) => (
  <a href={props.href} className={styles.socialLink}>
    <Image width={54} height={54} src={props.name} alt={props.name} />
  </a>
);

export const Footer = () => {
  return (
    <div className={styles.parent} id="footer">
      <div className={styles.div1}>
        <img src="/logo-L.png" alt="" className={styles.logosm} />
        <div>
          <SocialLink
            href="https://twitter.com/_GitBucks"
            name="/twitter.png"
          />
          <SocialLink
            href="https://discord.gg/XuM4PC25FC"
            name="/discord.png"
          />
        </div>
        <h1>© 2023 | GitBucks labs</h1>
      </div>
      <div className={styles.div2}>
        <Link name="About" href="#about" />
        <Link name="Team" href="#team" />
        {/* <Link name="Pitch Deck" href="/pitch-deck.pdf" /> */}
      </div>
      <div className={styles.div3}>
        <Link name="Terms of service" href="#" />
        <Link name="Contact" href="#join" />
      </div>
    </div>
  );
};
