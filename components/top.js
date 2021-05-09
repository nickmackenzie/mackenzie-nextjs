import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Top() {
  const [active, setActive] = useState("about");
  return (
    <section class="hero has-background-dark has-text-white is-halfheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="card has-background-dark has-text-white is-shadowless">
            <div class="card-content ">
              <p class="title has-text-white is-size-1 is-uppercase">
                Nick MacKenzie
              </p>
              <p class="subtitle has-text-white is-size-4 is-uppercase">
                Web Developer
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  <a href="https://twitter.com/codinghorror/status/506010907021828096">
                    <img
                      class="m-2 has-text-info"
                      width="32px"
                      src="/github.svg"
                    />
                    <img class="m-2" width="32px" src="/linkedin.svg" />
                  </a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  Share on <a href="#">Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>{" "}
      <div class="tabs is-centered is-size-4 ">
        <ul>
          <li
            onClick={() => setActive("about")}
            class={`has-text-white  ${active === "about" ? "is-active" : ""}`}
          >
            <Link href="/">
              <a class="has-text-white">About</a>
            </Link>{" "}
          </li>
          <li
            class={`has-text-white  ${
              active === "projects" ? "is-active" : ""
            }`}
          >
            {" "}
            <Link href="/projects">
              <a class="has-text-white">Projects</a>
            </Link>
          </li>
          <li
            onClick={() => setActive("contact")}
            class={`has-text-white  ${active === "contact" ? "is-active" : ""}`}
          >
            <Link href="/contact">
              <a class="has-text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
