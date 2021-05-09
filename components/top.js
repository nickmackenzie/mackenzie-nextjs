import React, { useState } from "react";
import Link from "next/link";

export default function Top() {
  const [active, setActive] = useState("about");
  return (
    <section class="hero has-background-black is-halfheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="card has-background-black has-text-white is-shadowless">
            <div class="card-content ">
              <p class="title has-text-white">Nick MacKenzie</p>
              <p class="subtitle has-text-white ">Web Developer</p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View on
                  <a href="https://twitter.com/codinghorror/status/506010907021828096">
                    Twitter
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
            class={`has-text-white  ${
              window.location.pathname === "/about" ? "is-active" : ""
            }`}
          >
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
          </li>
          <li
            class={`has-text-white  ${
              window.location.pathname === "/projects" ? "is-active" : ""
            }`}
          >
            <a class="has-text-white">
              {" "}
              <Link href="/projects">
                <a class="has-text-white">Projects</a>
              </Link>{" "}
            </a>
          </li>
          <li>
            <a class="has-text-white">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
}