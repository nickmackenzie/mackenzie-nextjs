import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Hero,
  Nav,
  NavLeft,
  NavCenter,
  HeroHeader,
  NavItem,
  Icon,
  NavRight,
  HeroBody,
  Container,
  Title,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
} from "bloomer";
export default function Home() {
  return (
    <>
      <Head>
        <title>MacKenzie Photography</title>
        <meta name="description" content="MacKenzie Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
