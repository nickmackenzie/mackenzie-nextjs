import Layout from "../../components/layout";
function Projects() {
  return (
    <Layout>
<section class="hero is-white is-halfheight">
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
Projects          </a>
         
        </div>
        <div >
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Project #1
            </a>
            <a class="navbar-item">
              Project #2
            </a>
            
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Peoject #3</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  <div class="hero-body">
<div class="columns">
  <div class="column 

is-three-fifths
">
    
    <div class="container is-fluid has-text-left ml-6">
      <p class="title">code(save)</p>
      <p class="subtitle">A full-stack app that saves user's code "snippets" utilizing nodeJs, Express Framework And using MongoDB for a database.</p>
   <div class='columns'>
   <button class='button column m-1 is-primary'>Github</button>
<p class='button column m-1 is-primary'>Live Site</p></div>
      
    </div>
  </div>
  <div class="column m-6">
<img src='https://nickmackenzie.dev/imgs/screenshot2.png'/>  </div>
  </div>





  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    </Layout>
  );
}

export default Projects;
