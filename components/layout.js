import Top from "../components/top";
import Head from "next/head";

export default function Layout({
  children,
  title = "Nick MacKenzie | Full-Stack Web Developer | Ontario,Canada",
  description = "A Full Stack Developer Proficient in the MERN Stack",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <header>
        <Top></Top>
      </header>

      {children}

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Design</strong> by Nick Mackenzie
          </p>
        </div>
      </footer>
    </div>
  );
}
