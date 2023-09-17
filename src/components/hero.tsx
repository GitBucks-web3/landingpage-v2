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
        <img src="/hero.png" alt="hero" />
      </div>
      <p className={styles.subText}>
        A community to earn Gitbucks for contributing to OSS!!!
      </p>
      <a href="#join" className={styles.down}>
        <img
          id="roatatingText"
          className={styles.circle}
          src="/circle-text.svg"
          alt=""
        />
        <img className={styles.arrow} src="/circle-arrow.svg" alt="down" />
      </a>
      <div className={styles.hero}>
        <nav>
          <Link href="/">
            <Image src="/logo-L.png" alt="Logo" width={190} height={24} />
          </Link>
          <div>
            <Link href="#about" passHref>
              <a className={styles.button}>about</a>
            </Link>
            <Link href="#team" passHref>
              <a className={styles.button}>team</a>
            </Link>
            <Link href="#join" passHref>
              <a className={styles.button}>rewards</a>
            </Link>
            <Link href="#join" passHref>
              <a className={styles.github}>
                <p>sign-in with</p>
                <Image src="/github.png" alt="github" width={28} height={28} />
              </a>
            </Link>
          </div>
        </nav>
        <h1>
          Earn <i>GitBucks</i>
          <br></br> for commits to<br></br> <i>open-source</i>
        </h1>
        <h2>
          Powered by <b>Solana</b>
        </h2>
        <Link href="#join" passHref>
          <a className={styles.button2}>try now</a>
        </Link>
        <div></div>
      </div>
      <div id="about" className={styles.info}>
        <div className={styles.info1}>
          <h1>
            Get recognised for <br /> your <i>contribution</i>
          </h1>
          <p>
            join open source, climb our leaderboards and showcase your
            contributions.
          </p>
        </div>
        <div className={styles.dummy}></div>
        <div className={styles.info2}>
          <h1>
            Get <i>Rewards</i>
            <br />
            for your commits.
          </h1>
          <p>
            contribute to open source and earn coins, redeem then with offers
            from top brands. Coz every commit matters!!!
          </p>
        </div>
      </div>
      <img className={styles.mockupbg} src="/hero-2.png" alt="features" />
      <div className={styles.mockups}>
        <img src="/mockup-1.png" alt="mockup" />
      </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeS48pxhY2NQVwG06bMR2unVhd-Xlr9evlmE0ktpML257f_5w/viewform?embedded=true" width="240" height="1239" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </>
  );
};

export default Hero;
