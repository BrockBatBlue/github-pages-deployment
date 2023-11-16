import "../styles/AccordionList.css";

const AccordionList = () => {
  return (
    <div className="listBackground">
      <div className="accordion " id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Instructions Part 1: create-react-app
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Set up your development environment</strong>
              <ul>
                <li>
                  Make sure you have Node.js and npm installed on your computer.
                </li>
                <li>
                  create your react app using{" "}
                  <strong>npx create-react-app my-app</strong>
                </li>
                <li>
                  connect your new react app to a new github repository. If you
                  don't remember how to create a new repo, then go to{" "}
                  <a href="https://docs.google.com/document/d/1mjjqzJUH4-exiDMGnrgIrM1g_A4a8dLv6nNlMFhfnqA/edit?usp=sharing">
                    Setting Up GitHub
                  </a>{" "}
                  for a refresher.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Instructions Part 2: Build it
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Build your Project 3</strong>
              <ul>
                <li>
                  Build your project, committing often, and pushing to your
                  GitHub repo.
                </li>
                <li>
                  Once you feel good about your react app, then use{" "}
                  <strong>npm run build</strong> command to create an optimized
                  production build.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Instructions Part 3: Install Github Pages
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is a very important step.</strong>
              <ul>
                <li>
                  use the command{" "}
                  <strong>npm install gh-pages --save-dev</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Instructions Part 4: Configuring package.json
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>
                Any time you update your project after deployment, you will need
                to reconfigure here.
              </strong>
              <ul>
                <li>
                  To configure your package.json file, open the file and add the
                  following information:
                </li>
                <br />
                <img
                  style={{ height: 180, width: 600 }}
                  src="github-pages-deployment/homepage-packageJSON.png"
                  sr-only="homepage configuration: homepage: your-username.github.io/your-repo-name"
                  alt="homepage configuration: homepage: your-username.github.io/your-repo-name"
                ></img>
                <br />
                <br />
                <img
                  style={{ height: 200, width: 350 }}
                  src="github-pages-deployment/scripts-packageJSON.png"
                  sr-only="scripts configuration: scripts configuration for predeployment and deployment"
                  alt="scripts configuration: scripts configuration for predeployment and deployment"
                ></img>
                <li>
                  Don't forget to replace the default username and
                  your-repo-name with your username and repo name.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              Instructions Part 5: Run Deploy
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Time to Deploy your app</strong>
              <ul>
                <li>
                  Run this command in your terminal:{" "}
                  <strong>npm run deploy</strong>
                </li>
                <li>
                  This automatically creates a new branch called gh-pages.
                </li>
                <li>
                  Make sure you are on that branch, then push to that branch as
                  the final version of your website.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              Instructions Part 6: Enable GitHub Pages
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Back to your GitHub Repo</strong>
              <ul>
                <li>
                  Navigate from your GitHub repository to the settings page
                </li>
                <li>
                  Scroll to the "GitHub Pages" section and selege the gh-pages
                  branch as the source for your GitHub Pages site.
                </li>
                <li>
                  <strong>Deploy!</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              Instructions Part 7: Access Your App
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>The waiting game</strong>
              <ul>
                <li>
                  After waiting awhile - up to 10 minutes, check your deployed
                  site to make sure nothing is broken.
                </li>
                <li>
                  If you need to update your site, then you need to repeat
                  instructions 4-6 to rebuild and deploy
                </li>
                <li>
                  <strong>Enjoy your new site!</strong>😎
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionList;
