# Google Books Search

### Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [MVP](#mvp)
- [Reference Links](#reference-links)
  - [Google Books Live App](https://books-search-platform.herokuapp.com)
  - [Google Books GitHub Repo](https://github.com/ystamaritq/books-search)
- [Installation Instructions](#installation-instructions)
  - [Project Technologies](#project-technologies)
  - [Node Dependencies](#node-depencencies)
- [Licensing](#licensing)

---

## Description

**Google Books** can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

---

## User Story

`As a user, I want to be able to search for a book, view, and save it. `

---

## Acceptance Criteria

- As a User I can search google books
- As a User I can view google book details page
- As a User I can save google books
- As a User I can delete google books

---

## MVP

- Allow user to be able to search google books
- Allow user to be able to view google book details page
- Allow user to be able to save google books
- Allow user to be able to delete google books

## Reference Links

Link to **Google Books** deployed on Heroku - [Google Books Live App](https://books-search-platform.herokuapp.com)

Link to **GitHub Repo** used for application development - [Google Books GitHub Repo](https://github.com/ystamaritq/books-search)

---

## Installation Instructions

To test this project, simply follow these steps:

**Pre-requirements:** `Have an available connection to Mongo database`

1. Make sure **node.js** is installed in your machine. If not is installed in your machine [click here](https://nodejs.org/en/) to download the application.

2. Run `npm install or npm i` in your terminal in order to install all required **node modules** listed in the package.json.

3. Clone the following project into a your local file system `git clone https://github.com/ystamaritq/books-search.git`

4. Then `run node server.js` in order to start locally the App/

### Project Technologies

Here is a list of all the core technologies / core dependencies used to develop this application.

- `Node.js - An asynchronous event-driven JavaScript runtime`
- `Express - Node.js web application framework that provides a robust set of features for web and mobile applications`
- `Deploy web app using Heroku`

### Node Dependencies

The **dependencies** listed below are all the `npm packages` used throughout the App.

- `express` - minimalist web framework for node.
- `morgan` - HTTP request logger middleware for node.js
- `mongoose` - object modeling tool designed to work in an asynchronous environment
- `dotenv` - loads environment variables from a .env file into process.env
- `antd Ant Design` - React UI CSS library

---

## Licensing

"The code in this project is licensed under MIT license."

---

**developed with love by **@ystamaritq\*\*\*\*
