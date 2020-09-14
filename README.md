# Google Books Search

![npm](https://img.shields.io/npm/v/express?color=green&label=express&logo=NPM)
![npm](https://img.shields.io/npm/v/node?color=purple&label=node)
![npm](https://img.shields.io/npm/v/react?color=gray&label=react&logo=react)
![npm](https://img.shields.io/npm/v/react-router-dom?color=yellowgreen&label=react-router-dom&logo=npm)
![npm](https://img.shields.io/npm/v/axios?color=9cf&label=axios&logo=npm)
![npm](https://img.shields.io/npm/v/mongoose?color=yellow&label=mongoose&logo=npm)
![npm](https://img.shields.io/npm/v/google-books-search?color=blue&label=google-books-search&logo=npm)
![npm](https://img.shields.io/npm/v/antd?color=red&label=antd&logo=npm)

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
- [Demo](#demo)
- [Licensing](#licensing)

---

## Description

**Google Books Platform** allows the user search and view saved google books.

- _Search_ - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

- _Saved_ - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

---

## User Story

`As a user, I want to be able to search for books, view book details, and save it. `

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

The Google Books is based on MERN stack which is the combination of technologies used to create a web application. **MERN** includes four open-source components: _MongoDB_, _Express_, _React_, and _Node.js_ where:

- **MongoDB:** A cross-platform document database
- **Express:** A back-end web application framework, minimalist web framework for node.
- **React:** A JavaScript library for building user interfaces
- **Node.js:** A cross-platform JavaScript runtime environment

The dependencies listed below are all the NPM packages used throughout this project.

- `mongoose` - Object modeling tool designed to work in an asynchronous environment
- `antd` - Ant Design React UI CSS library
- `google-books-search` - A simple Node.js client for the Google Books API.
- `react-router-dom` - DOM bindings for React Router

---

## Demo

#### The following images demonstrates the application functionality:

<details>
<summary>Employee Directory Demo Images (click to expand)</summary>
<img src="./images/d1.png" width = "800px">
<img src="./images/d2.png" width = "800px">
<img src="./images/d3.png" width = "800px">
<img src="./images/d4.png" width = "800px">
</details>

<img src="readme/imgs/architecture-diagram.png" width = "800px">

## Licensing

"The code in this project is licensed under MIT license."

---

**developed with love by **@ystamaritq\*\*\*\*
