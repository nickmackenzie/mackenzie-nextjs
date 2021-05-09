import Layout from "../../components/layout";
function Projects() {
  return (
    <Layout>
      <section class="hero is-white is-halfheight">
        <div class="container my-5 mx-5 px-5">
          <h2 class="title is-2 is-capitalized">Contact Us</h2>
          <form action="" method="post">
            <div class="field">
              <label for="name" class="label is-size-4 has-text-weight-light">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="input"
                autofocus
              />
            </div>
            <div class="field">
              <label for="email" class="label is-size-4 has-text-weight-light">
                Email:
              </label>
              <input type="email" name="email" id="email" class="input" />
            </div>
            <div class="field">
              <label
                for="message"
                class="label is-size-4 has-text-weight-light"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                class="textarea is-large"
              ></textarea>
            </div>
            <button type="submit" class="button is-success is-size-5">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
