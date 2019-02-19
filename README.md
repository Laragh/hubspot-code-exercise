# HubSpot Web Team Exercise - Instructions

##Candidate Note:

### Exercise was initially provided at https://github.com/HubSpotWebTeam/CodeExercise, unfortunately project couldn't be npm installed or run and proved problematic to update within a short time frame. So it was rebuilt in React. In terms of reusable code, no third party css libraries, scss preprocessor, Webpack dev/prod builds and filter requirements it meets below requirements.

###Exception to not removing / adding elements due to time constraint and loss of time on legacy project.


## Setup

1. Clone or download this repository (do not fork it).
2. Install [Node.js](https://nodejs.org/en/download/) and then run `npm install` on your project. We've included recommended packages in `package.json` for you to use, but feel free to add or remove any packages.
3. Set up a build tool (Gulp, WebPack, Grunt, etc.) to compile from the existing `/src` folder to a `/build` directory and run your site locally. If you prefer Gulp, we've included recommended tasks in `gulpfile.js` for you to use, but that file can be modified as much as you see fit.

If everything is set up properly, anyone should be able to fork your project, run `npm install`, and issue a start command (we recommend `npm start`) command from the command line to run your build tool and view your site from `localhost`.

**Spending too much time on step #3?** Skip it and focus on the exercises. When you submit your final assessment, please let us know why you skipped this build tool setup step in the `submission.md` file.

---

## Mockups

This code assessment is broken up into two exercises. All exercises should display on the same page.

### Mockup with collapsed filter

The mockup with all filters collapsed. See the section below for how the expanded filter dropdowns should appear.

<a href="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise_3.png" target="_blank">
    <img src="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise_3.png" alt="Mockup" width="600" />
</a>

### Mockup with expanded filter

<details><summary><strong>View mockup with expanded filter</strong></summary>
    <br />
    <p>Note the filter dropdown outlined in red.</p>
    <p><a href="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise-v2_expanded.png" target="_blank">
        <img src="https://cdn2.hubspot.net/hubfs/53/web_team/web-team-test/web-team-exercise-v2_expanded.png" alt="Mockup_Hover" width="600" />
    </a></p>
</details>

---

## Requirements

1. Without adding or removing HTML elements, style each of the following modules to match the above mockup. Fonts have been provided for you and can be found in the accompanying `/src/views/partials/_fonts.ejs` file. Do not change the DOM structure in the `/src/views/partials/_testimonial.ejs` or `/src/views/partials/_filterable-content.ejs` files. You may add attributes to the existing HTML elements, but don't add or remove any DOM elements, and don't edit a DOM element's tag name. Feel free to use CSS pseudoelements. All other files may be edited (e.g. `/src/views/pages/index.ejs`).
2. The page should be responsive. Use your best judgment for how narrow viewports should look.
3. Don't use any CSS frameworks (e.g. Bootstrap). You should use a preprocessor, such as Sass.
4. Focus on writing clean, reusable code.
5. While all the modules should be styled to match the mockup, some require some additional functionality:

   - **Exercise 1 - Filterable Content:**
     1. Use the provided `/src/js/data/data.json` file to generate filterable categories as well as the individual content elements within the `/src/views/partials/_filterable-content.ejs` HTML. The items should be alphabetized by title.
     2. **Dropdowns:** If multiple checkboxes are checked (e.g. _Mystery_ and _Drama_), items from **_both_** categories should display (e.g. all items tagged with either _Mystery_ or _Drama_).
     3. The `Clear Filters` functionality is mandatory.
   - **Exercise 2 - Testimonial Block:**
     1. When clicking `Tell Me More`, fetch text from an API of your choice and update the text within the quote to the left of `Tell Me More`. We recommend [the Random Quotes API](https://talaikis.com/api/quotes/random/), but there are other fun APIs like the [Chuck Norris jokes API](http://www.icndb.com/api/). We're flexible.

6. Have fun with it! If you get stuck, that's OK. Get as far as you can.
7. Before submitting, answer the questions in `submission.md`.

#### Bonus Point Suggestions

Want an extra challenge? Add some pizzazz to your page. **Note:** These steps are optional, but encouraged. :star2:

1. Feeling particularly good? Use ES6, React, or Vue components.
2. Replace Gulp and use WebPack or Parcel as your build tool.
3. Add a search field and functionality to the filter module (example in mockup).
4. Add some of your favorite node modules to the project, or modify your build tool with anything that strikes your fancy.
5. Add linting.

#### Grading

We recommend focusing on `Exercise 1 — Filterable Content` as it is graded more heavily. It's a good indicator of your attention to user experience and how you approach data puzzles.

`Exercise 2 — Testimonial Block` is a more of a CSS challenge, so being visually precise while not touching the markup is key.

Remember the `submission.md` file — this is your chance to tell us what you thought about the activity and what else you would have done. It's a good way for us to get to know you and your process. We want to hear from you!

## Submission

Be sure to fill out the `submission.md` file before submitting. Once complete, email either a) a zip of your work or b) a link to your GitHub repository to your recruiting specialist so they can send to the team.

---

## FAQs

<details>
    <summary><strong>When is the exercise due?</strong></summary>
    <p>Please submit your exercise within three (3) days of receiving it. Feel free to leave notes in <code>submission.md</code> to let us know what you would have done with more time — we'll appreciate the insight into your process!</p>
</details>
<br />
<details>
    <summary><strong>Do I have to setup a build tool (Gulp, WebPack, Grunt, etc.)?</strong></summary>
    <p>The build tool setup is part of the exercise, so we strongly encourage you to complete this step. If you absolutely can't set it up in time, skip that step and focus on the exercises in plain HTML/CSS/JS. When you submit your final assessment, please let us know why you skipped this build tool setup step in the <code>submission.md</code> file.</p>
</details>
<br />
<details>
    <summary><strong>What browsers should I support?</strong></summary>
    <p>We'll look for compatibility in the following browsers:</p>
    <ol>
        <li>Google Chrome (latest version)</li>
        <li>Mozilla Firefox (latest version)</li>
        <li>Microsoft Edge (latest version)</li>
    </ol>
</details>
<br />
<details>
    <summary><strong>What color values should I use?</strong></summary>
    <p>The exact color values don't matter; just match colors close enough to the mockup as they appear on your screen. You may use a Chrome extension such as <a href="https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en" target="_blank">ColorPick Eyedropper</a> or anything you're comfortable with to fetch the colors from the mockup.</p> 
</details>
<br />
<details>
    <summary><strong>I'm running out of time! May I skip one of the exercises?</strong></summary>
    <p>Although we expect you to finish all the exercises, life happens. If you aren't able to finish on time, focus on <code>Exercise 1 - Filterable Content</code> and start on the other exercise. Then give us some insight as to what you would have done in the <code>submission.md</code> file.</p>
</details>
<br />
<details>
    <summary><strong>Should I make a separate page for each exercise?</strong></summary>
    <p>No thanks — we'd like to see all the exercises on one page. This single page should look as similar to the mockup as possible.</p>
</details>
<br />
<details>
    <summary><strong>The instructions say to style the modules to match the mockups "without adding or removing HTML elements", but I need to add filters to the dropdown in <em>Exercise 1 — Filterable Content</em>. What should I do?</strong></summary>
    <p>You may add the filters dynamically anywhere you see fit in the existing markup. As long as the outer/non-dynamic structure (i.e. the original HTML) doesn’t change, that’s fine. It’s meant to be a tricky styling exercise.</p>
</details>
<br />
<details>
    <summary>
        <strong>Can I move the DOM elements into separate files?</strong>
    </summary>
    <p>Sure, organize your code however you see fit. Just don't modify the DOM structure itself. That restriction is intended to be a styling exercise — we want to see how you will style elements without modifying the HTML structure (aside from adding classes or other attributes).</p>
</details>
<br />
<details>
    <summary><strong>The instructions mention that I can use ES6 and React or Vue components, but the project itself uses EJS files. Normally, I would just build the page with React components and style them to match the mockup, but the instructions also say not to add or remove any of the HTML in the partials. Can I use the HTML that is in the EJS files, but as React or Vue components?</strong></summary>
    <p>It's fine to use the HTML that’s in the EJS files — as long as the structure and HTML tags don’t change for each component, we’ll accept that. It’s meant to be a styling challenge, so maintaining the structure is essential. Just add a note for us in the <code>submission.md</code> file saying you didn’t use the EJS files themselves but, instead, maintained the original EJS markup in the React or Vue components.</p>
</details>
<br />
<details>
    <summary><strong>Instead of Gulp, can I use [insert build tool here]?</strong></summary>
    <p>Yes! Use any build tool you want. We should be able to install your project with npm and run it locally. Just drop us a line in your <code>submission.md</code> file explaining why you deviated. We don't mind you getting creative — just keep us posted with what you changed and why!</p>
</details>
<br />
<details>
    <summary><strong>Other questions?</strong></summary>
    <p>Ultimately, we want you to use good judgement for how you code this exercise, but still abide by the basic requirements. If you make a judgement call that differs from the directions, let us know why in your <code>submission.md</code> file. Just like the real world, you have a lot of say in architectural decisions, provided you have valid reasons, and we're curious to hear why you made certain calls. (After all, chances are they could be better than our bonus point suggestions!) That's what the <code>submission.md</code> file is for.</p>
</details>


# hubspot-code-exercise

This is a boilerplate to build a full stack web application as a hubspot-code-exercise using React, Node.js, Express and Webpack. It uses an open-source boilerplate by Sandeep Raveesh at https://github.com/crsandeep/simple-react-full-stack which is customised for this project. It is configured with webpack-dev-server, eslint, prettier and babel.

## Introduction

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/).

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/crsandeep/simple-react-full-stack

# Go inside the directory
cd simple-react-full-stack

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Babel

[Babel](https://babeljs.io/) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel. Below is the .babelrc file which I am using.

```javascript
{
    "presets": ["env", "react"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which I am using.

```javascript
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "react/jsx-filename-extension": "off"
  }
}
```

[I am using Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide. Since we are going to write both client (browser) and server side (Node.js) code, I am setting the **env** to browser and node. Optionally, we can override the Airbnb's configurations to suit our needs. I have turned off [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack. Below is the webpack.config.js file which I am using.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
```

1.  **entry:** entry: ./src/client/index.js is where the application starts executing and webpack starts bundling.
    Note: babel-polyfill is added to support async/await. Read more [here](https://babeljs.io/docs/en/babel-polyfill#usage-in-node-browserify-webpack).
2.  **output path and filename:** the target directory and the filename for the bundled output
3.  **module loaders:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://github.com/babel/babel-loader) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://github.com/webpack-contrib/css-loader) and [style-loaders](https://github.com/webpack-contrib/style-loader) to load and bundle CSS files. Fonts and images are loaded through url-loader.
4.  **Dev Server:** Configurations for the webpack-dev-server which will be described in coming section.
5.  **plugins:** [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**Port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to true, it will automatically open the home page on startup. [Proxying](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which I am using.

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.

### Express

Express is a web application framework for Node.js. It is used to build our backend API's.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

```javascript
const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(8080, () => console.log("Listening on port 8080!"));
```

This starts a server and listens on port 8080 for connections. The app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.

#### Installation guide

1.  Install [VSCode](https://code.visualstudio.com/)
2.  Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3.  Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4.  Modify the VSCode user settings to add below configuration

    ```javascript
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
    ```

Above, we have modified editor configurations. Alternatively, this can be configured at the project level by following [this article](https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99).
