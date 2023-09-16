import React from "react";
import styles from "../../styles/Team.module.css";
import Image from "next/image";

interface Props {
  name: string;
  role: string;
  img: string;
  twitter?: string;
}

// SubHero
const Member = (props: Props) => {
  return (
    <div className={styles.memberContainer} id="feature">
      <img width={150} height={150} src={props.img} alt="" />
      <div className={styles.memberSub}>
        <div className={styles.text}>
          <h1>{props.name}</h1>
          <h2>{props.role}</h2>
        </div>
        <a className={styles.twitter} href={props.twitter}>
          <Image width={18} height={18} src={"/../public/twitter.png"} alt="x" />
        </a>
      </div>
    </div>
  );
};

export default Member;
