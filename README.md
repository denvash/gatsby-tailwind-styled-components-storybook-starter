<h1 align="center">
<img src=".github/Banner.svg">
</h1>

## 💄 Demo

- Application
- Storybook

## Motivation

- Use [Tailwind CSS v1](https://tailwindcss.com/) in [Styled-Components](https://www.styled-components.com/).
- Decouple developing with [Storybook](https://storybook.js.org/).

```javascript
// More Tailwind examples https://tailwindcss.com/components/

import tw from 'tailwind.macro';

// Standalone Tailwind Classes
const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

// Keep the power of styled-components
const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col h-screen`}
  color: ${({ isClicked }) => (isClicked ? 'red' : 'blue')}
`;

// Develop and test with storybook v5
import React from 'react';
import IndexPage from './IndexPage.react';

export default {
  title: 'IndexPage',
};

export const Default = () => <IndexPage />;
```

## What this template solves

- Configure Tailwind to work with CSS-in-JS.
- Configure Gatsby & Tailwind to work with Storybook.
- Usage Examples (`IndexPage` component).
- Deploy ready, either for Storybook.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the `gatsby-tailwind-emotion-starter` starter.

    ```shell
    # create a new Gatsby site using the gatsby-tailwind-emotion-starter
    gatsby new my-gatsby-tailwind-emotion-starter https://github.com/pauloelias/gatsby-tailwind-emotion-starter
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-tailwind-emotion-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-gatsby-tailwind-emotion-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ✨ Features?

This starter contains has the following features enabled by default:

- **Tailwind CSS**: The full power of Tailwind is at your fingertips. Style your components using `tailwind.marco` to add Tailwind classes to your project.
- **Emotion**: Best-in-class CSS-in-JS support with [Emotion](https://emotion.sh). Write your own custom styled components with Emotion or use `tailwind.macro` inside your styled components to add Tailwind CSS classes alongside your custom styling.
- **PostCSS**: Use the flexibility of [PostCSS](https://postcss.org/) to extend Tailwind's CSS or write your own CSS. [Postcss-Preset-Env](https://preset-env.cssdb.org/) is enabled out-of-the box allowing you to write tomorrow's CSS today!

## 📦 Example components

To use Tailwind CSS classes inside of your components you use the `tailwind.macro` package. You can also create richer styled components using a combination of both Tailwind's classes and your own custom CSS with Emotion.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── babel-plugin-macros.config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    └── tailwind.config.js

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.babelrc`**: This configuration file allows us to fine-tune [Babel's configuration settings](https://babeljs.io/docs/en/configuration). In this starter we are adding the [`babel-preset-gatsby`](https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby) preset to allow us to customize Babel as needed.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierignore`**: This file allows us to specifiy files that we want to exclude from formatting with Prettier.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`babel-plugin-macros.config.js`**: This file helps us configure Tailwind CSS macros to be used with [Emotion](https://emotion.sh), our CSS-in-JS tool of choice.

8.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. By default we are injecting Tailwind's [base styles](https://tailwindcss.com/docs/adding-base-styles/#app) into the browser.

9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

10. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

11. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

12. **`LICENSE`**: Gatsby is licensed under the MIT license.

13. **`package-lock.json`**: (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

14. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

15. **`postcss.config.js`**: This configuration file allows us to customize our [PostCSS](https://postcss.org/) settings. PostCSS is used to compile the custom css we write outside of Emotion.

16. **`README.md`**: A text file containing useful reference information about your project.

17. **`tailwind.config.js`**: This is the default [Tailwind CSS configuration](https://tailwindcss.com/docs/configuration/) file.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pauloelias/gatsby-tailwind-emotion-starter)
