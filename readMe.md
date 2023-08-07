# CariIn API

This repository contains the source code for the Cariin API, a backend application that supports the CariIn job posting application. It is built using Express.js, Node.js, bcrypt, Cloudinary, JSON Web Token (JWT), Sequelize, and PostgreSQL.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Related Project](#related-project)
- [Authors and Contact Info](#authors-and-contact-info)

## Introduction

CariIn API serves as the backend for the CariIn job posting application. It handles user authentication, job search, database operations, and more, ensuring a smooth and efficient experience for CariIn users. The API is secured using JSON Web Tokens for authentication and bcrypt for password hashing.

## Demo

Visit the link below for demo.

- :globe_with_meridians: [CariIn Webiste Demo](https://cariin.vercel.app/)
- :link: [CariIn API Demo](https://blush-cow-tux.cyclic.app/)

## Technologies Used

The project is built using the following stack:

- Express.js: A fast and minimalist web framework for Node.js, used for building the API endpoints.
- Node.js: The JavaScript runtime that allows executing server-side code.
- bcrypt: A password hashing library to securely store user passwords.
- Cloudinary: A cloud-based service used to manage and store images.
- JSON Web Token (jsonwebtoken): A standard for securely transmitting information between parties as a JSON object.
- Sequelize: An ORM (Object-Relational Mapping) for Node.js, used for interacting with the PostgreSQL database.
- PostgreSQL: A powerful open-source relational database for data storage.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/isnancahyadi/cariin-api-v2.git
cd cariin-api-v2
```

2. Install the required dependencies using npm:

```bash
npm install
```

3. Set up your database in `config` folder and `redis.js` in `utils` folder with your own

4. Set up sequelize and generate database using:

```bash
npm install sequelize-cli
sequelize db:migrate
```

## Configuration

Before running the application, you need to set up the configuration. Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
KEY=your_JWT_key

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

## Endpoints

| Method     | Endpoint         | Description                    | Requirement   | Opt Params |
| ---------- | ---------------- | ------------------------------ | ------------- | ---------- |
| **POST**   | /auth/register   | Create an account              |               |            |
| **POST**   | /auth/login      | Login to aplication            |               |            |
| **POST**   | /job             | Create a new job               | Authorization |            |
| **POST**   | /skills          | Create new skills              | Authorization |            |
| **POST**   | /contact/:id     | Send message via email         | Authorization |            |
| **GET**    | /profile         | Get detail profile             | Authorization |            |
| **GET**    | /job             | Get jobs with pagination       |               | page       |
| **GET**    | /job/filter      | Get all filtered jobs          |               | keyword    |
| **GET**    | /job/all         | Get all jobs                   |               |            |
| **PATCH**  | /profile         | Update my profile              | Authorization |            |
| **PATCH**  | /profile/picture | Update my image profile        | Authorization |            |
| **DELETE** | /skills/:id      | Delete an existing skill by ID | Authorization |            |
| **DELETE** | /job/:id         | Delete an existing job by ID   | Authorization |            |

If you want the details from this API, you can access the postman documentation below.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/16769588/2s9XxyStjz)

## Authentication

The API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, clients need to include a valid JWT token in the `Authorization` header of the request. The token can be obtained by authenticating with the API using the appropriate credentials.

## Related Project

- :desktop_computer: [CariIn Website](https://github.com/isnancahyadi/cariin)

## Authors and Contact Info

For more information about this project or have any question or need help for development, feel free to contact me.

Isnan Arif Cahyadi

<div id="badges">
  <a href="https://www.linkedin.com/in/isnanarifcahyadi/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="mailto:isnan.arifc@gmail.com">
    <img src="https://img.shields.io/badge/GMail-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
</div>
