import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styles from "../../styles/Hero.module.css";
import Team from "../../pages/team";

type Props = {
  onScroll: () => void;
  title: string;
  description: string;
};

const Hero: FC<Props> = ({ onScroll, title, description }) => {
  return (
    <>
      <div className={styles.herobg}>
        {/* <Image layout="fill" src="/hero.png" alt="hero" /> */}
      </div>
      <div className={styles.hero}>
        <nav>
          <Link href="/">
            <Image src="/logo-L.png" alt="Logo" width={190} height={24} />
          </Link>
          <div>
          <Link href="#join" passHref>
            <a className={styles.button}>about</a>
          </Link>
          <Link href="#join" passHref>
            <a className={styles.button}>team</a>
          </Link>
          <Link href="#join" passHref>
            <a className={styles.button}>rewards</a>
          </Link>
          <Link href="#join" passHref>
            <a className={styles.github}>
              <p>signin with</p>
              <Image src="/github.png" alt="github" width={28} height={28} />
            </a>
          </Link>
          </div>
        </nav>
        <h1>
        Earn <i>GitBucks</i><br></br> for commits to<br></br> <i>open-source</i>
        </h1>
        <h2>Powered by <b>Solana</b></h2>
        <Link href="#join" passHref>
          <a className={styles.button2}>try now</a>
        </Link>
        <div></div>
      </div>
      <div className={styles.info}>
        <div className={styles.info1}>
          <h1>
            Get recognised for <br /> your <i>contribution</i>
            </h1>
          <p>
            join open source, climb our leaderboards and showcase your contributions. 
          </p>
        </div>
        <div className={styles.dummy}></div>
        <div className={styles.info2}>
          <h1>
            Get<i>Rewards</i>
            <br />
            for your commits.
          </h1>
          <p>
            contribute to open source and earn coins, redeem then with offers from top brands. Coz every commit matters!!! 
          </p>
        </div>
      </div>
      <img className={styles.mockupbg} src="/hero-2.png" alt="features" />
      {/* <div className={styles.mockups}>
        <div className={styles.mockup1}>
          <div>
            <h1>Fitness</h1>
            <p>
              Complete challenges, Claim Daily Rewards, Maintain Streaks, Win
              1v1 Battles and more... to earn Hustle Coins and XP.
            </p>
          </div>
          <img src="/mockup-1.png" alt="" />
        </div>
        <div className={styles.mockup2}>
          <img src="/mockup-2.png" alt="" />
          <div>
            <h1>Rewards</h1>
            <p>
              Use these hard earned coins to get free products and crazy
              discounts on curated products from top brands.
            </p>
          </div>
        </div>
      </div> */}
      <Team />
    </>
  );
};

export default Hero;
