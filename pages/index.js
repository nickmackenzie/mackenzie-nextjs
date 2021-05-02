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
      <Hero isColor="info" isSize="medium">
        <HeroHeader>
          <Nav>
            <NavLeft>
              <NavItem isBrand>Bloomer</NavItem>
            </NavLeft>
            <NavCenter>
              <NavItem>
                <Icon className="fa fa-github" />
              </NavItem>
              <NavItem>
                <Icon className="fa fa-twitter" />
              </NavItem>
            </NavCenter>
            <NavRight isMenu>
              <NavItem>Home</NavItem>
              <NavItem>Documentation</NavItem>
            </NavRight>
          </Nav>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Title</Title>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive>
                  <TabLink>Overview</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Grid</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Element</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Components</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Layout</TabLink>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
      <Hero isColor="info" isSize="medium">
        <HeroHeader>
          <Nav>
            <NavLeft>
              <NavItem isBrand>Bloomer</NavItem>
            </NavLeft>
            <NavCenter>
              <NavItem>
                <Icon className="fa fa-github" />
              </NavItem>
              <NavItem>
                <Icon className="fa fa-twitter" />
              </NavItem>
            </NavCenter>
            <NavRight isMenu>
              <NavItem>Home</NavItem>
              <NavItem>Documentation</NavItem>
            </NavRight>
          </Nav>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Title</Title>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive>
                  <TabLink>Overview</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Grid</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Element</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Components</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Layout</TabLink>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
    </>
  );
}
