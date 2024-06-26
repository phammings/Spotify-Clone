# Spotify Clone
<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Full Stack Spotify Clone</h3>

  <p align="center">
    A full stack music streaming application using Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe. This project replicates the core features and functionalities of Spotify, including user authentication, song uploading, playlist creation, and subscription management.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

The project focuses on creating a full stack music streaming application that replicates the core features of Spotify. The frontend is built with Next.js and React, providing a dynamic and responsive user interface. Tailwind CSS is used for styling to achieve a modern and sleek design.

The backend is powered by Supabase, an open-source Firebase alternative built on top of PostgreSQL. Supabase handles user authentication, song uploading, and database management. Stripe is integrated for payment processing, allowing users to subscribe to premium features.

This project aims to provide a comprehensive example of building a production-ready music streaming application, covering key aspects such as authentication, data management, and payment processing.

## [Live Demo 🔗](spotify.ryanlepham.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next.js][Next.js]][Next.js-url]
* [![React][React]][React-url]
* [![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]
* [![Supabase][Supabase]][Supabase-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Stripe][Stripe]][Stripe-url]
* [![Vercel][Vercel]][Vercel-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- ✔️ Implement user authentication with Supabase
- ✔️ Add song uploading functionality
- ✔️ Develop a dynamic frontend using Next.js and React
- ✔️ Build a robust backend with Supabase and PostgreSQL
- ✔️ Integrate Stripe for subscription management
- ✔️ Implement playlist creation and management
- ✔️ Test application features with Jest and React Testing Library
- ✔️ Utilize Tailwind CSS for modern styling and design
- ✔️ Deployed on Vercel with custom domain from AWS Route53


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- INSTRUCTIONS -->
## Instructions

#### Prerequisites

**Node version 14.x**

##### Cloning the repository

```shell
git clone https://github.com/phammings/Spotify-Clone.git
```

##### Install packages

```shell
npm i
```

#### Setup .env file from .env.example

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

#### Start the app

```shell
npm run dev
```

#### Testing with Stripe Payment

Credit Card Number:
```
4242 4242 4242 4242
```

For the rest of the payment method details: choose any valid details (i.e. expiry date must be a future date).

    


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next.js-url]: https://nextjs.org/
[Tailwind CSS]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=blue
[Tailwind CSS-url]: https://tailwindcss.com/
[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Stripe]: https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white
[Stripe-url]: https://stripe.com/en-ca
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://reactjs.org/