import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../src/components/footer";
import Hero from "../src/components/hero";
import NavBar from "../src/components/navBar";
import { PreRegister } from "../src/components/preRegister";

import Member from "../src/components/teamMember";
import styles from "../styles/Team.module.css";

const Team: NextPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>meet our team.</h1>
      </div>
      <div className={styles.teamContainer}>
        <Member
          name="Toshita"
          role="Enginner"
          img="/toshita.jpg"
          twitter="https://twitter.com/toshitapandey"
        />
        <Member
          name="Sanketh"
          role="coke head"
          img="/sanketh.png"
          twitter="https://twitter.com/sankethchebbi"
        />
        <Member
          name="Suhas"
          role="Frontend Dev"
          img="/suhas.png"
          twitter="https://twitter.com/suhasasumukh"
        />
        <Member
          name="cx"
          role="Design Daddy"
          img="/chinmay.jpg"
          twitter="https://twitter.com/chinmay_x"
        />
        <Member
          name="Saksham"
          role="Blockchain Dev"
          img="/saksham.jpeg"
          twitter="https://twitter.com/RxW_777"
        />
      </div>
    </div>
  );
};

export default Team;
