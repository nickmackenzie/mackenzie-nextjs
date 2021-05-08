import Showcase from "../components/showcase";
function HomePage() {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>
              <a href="/about" class="navbar-item">
                Documentation
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-dark">Github</a>
                  <a class="button is-link">Linkdeink</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
        </div>
      </section>
      <Showcase />
    </>
  );
}

export default HomePage;
