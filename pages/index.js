function HomePage() {
  return (
    <>
      <section class="hero is-success is-halfheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="card">
              <div class="card-content ">
                <p class="title has-text-black">Nick MacKenzie</p>
                <p class="subtitle has-text-black">Web Developer</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on{" "}
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
    </>
  );
}

export default HomePage;
