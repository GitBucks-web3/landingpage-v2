import type { NextPage } from "next";

import styles from "../styles/Hero.module.css";

import Head from "next/head";

import NavBar from "../src/components/navBar";
import Hero from "../src/components/hero";

import { PreRegister } from "../src/components/preRegister";
import { Footer } from "../src/components/footer";
import { createRef } from "react";

const Home: NextPage = () => {
	const preRegisterRef = createRef<HTMLInputElement>();

	const scroll = () => {
		if (preRegisterRef.current != null) {
			preRegisterRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/logo.png" />
				<title>
					GitBucks
				</title>
				<meta name="" />
				<meta
					name="description"
					content="Earn GitBucks for commits to open-source"
				/>
				{/* twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:card" content="summary_small_image" />
				<meta name="twitter:site" content="@_GitBucks" />
				<meta name="twitter:creator" content="GitBucks" />
				<meta name="twitter:title" content="Earn GitBucks for commits to open-source" />
				<meta
					name="twitter:description"
					content="Earn GitBucks for commits to open-source"
				/>
				<meta name="twitter:image" content="/hero.png" />
				{/* facebook */}
				<meta property="og:url" content="https://www.gitbucks.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Earn GitBucks for commits to open-source" />
				<meta
					property="og:description"
					content="Earn GitBucks for commits to open-source"
				/>
				<meta property="og:image" content="/hero.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="stylesheet" href="https://unpkg.com/blocks.css/dist/blocks.min.css" />

				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Hero
				onScroll={scroll}
				title={"Reimagine."}
				description="Earn GitBucks for commits to open-source"
			/>
			<PreRegister ref={preRegisterRef} />
			<Footer />
		</div>
	);
};

export default Home;
