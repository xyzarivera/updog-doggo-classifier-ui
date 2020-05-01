# 🐶 Doggo Classifier

Doggo Classifier is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.

This is our revalida project for the Google Cloud Platform Developer Stint of the AC2E program.

## 💻 Contributors

- AI/ML - [Kendrick Tan](https://github.com/saibunny)
- Architecture & Backend - [Faust Roxas](https://github.com/randito-roxasjr)
- Frontend - [Xyza Rivera](https://github.com/xyzarivera)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this repository.

    ```shell
    # create a new Gatsby site
    gatsby new doggo-classifier-ui https://github.com/xyzarivera/doggo-classifier-ui
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd doggo-classifier-ui/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

### Frontend

Frontend is built using GatsbyJS, a React-based, GraphQL powered, static site generator. It's CI/CD is built using GCP Cloud Build and is hosted at Firebase.

### AI/ML - Computer Vision

An AI model is trained using GCP AutoML Vision with a dog classification dataset.