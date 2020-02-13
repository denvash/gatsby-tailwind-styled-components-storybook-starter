<h1 align="center">

<a href="https://gatsby-tailwind-styled-components-storybook-starter.netlify.com/">
<img src=".github/Banner.svg" alt="banner">
</a>

![SiteBuild](https://img.shields.io/netlify/6780c0f3-7b91-4108-8397-d6a0f93153d5?color=542C85&label=Gatsby&style=for-the-badge)
![StorybookBuild](https://img.shields.io/netlify/c376c6c6-eb6b-4d24-9577-17bc22ceb80c?color=FF4785&label=Storybook&style=for-the-badge)

</h1>

## 💄 Demo

- [Site](https://gatsby-tailwind-styled-components-storybook-starter.netlify.com/)
- [Storybook](https://storybook-gatsby-tailwind-styled-starter.netlify.com/)

## ✨ Motivation

- Use [Tailwind CSS v1](https://tailwindcss.com/) in [Styled-Components](https://www.styled-components.com/).
- Decouple developing with [Storybook](https://storybook.js.org/).
- Use [PostCSS](https://postcss.org/) to extend Tailwind's CSS.
- [PurgeCSS](https://purgecss.com/) out-of-the box.
- [PostCSS-Preset-Env](https://preset-env.cssdb.org/) out-of-the box.

```jsx
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

> 📦 What's this template solves?
>
> - Configure Tailwind to work with CSS-in-JS & PostCSS.
> - Configure Gatsby & Tailwind to work with Storybook.
> - Usage Examples (`IndexPage` component).
> - Deploy ready, either for Storybook.

## 🚀 Quick start

1. Get the repo with Gatsby CLI **or** clone from Github

   ```sh
   # Create a new Gatsby site using the Gatsby CLI
   gatsby new my-tailwind-styled-starter https://github.com/denvash/gatsby-tailwind-styled-components-storybook-starter
   cd my-tailwind-styled-starter/
   ```

   ```sh
   # Clone the repo
   git clone https://github.com/denvash/gatsby-tailwind-styled-components-storybook-starter.git
   cd gatsby-styled-tailwind-storybook-starter
   yarn install
   ```

2. Start Develop

   ```sh
   yarn develop
   yarn storybook
   ```

   > You must run develop once before storybook.
   >
   > Storybook must have access to `public` folder.

3. Deploy

   - [Deploy Gatsby App](https://www.gatsbyjs.org/docs/deploying-to-netlify/)
   - [Deploy Storybook](https://www.learnstorybook.com/intro-to-storybook/react/en/deploy/)
