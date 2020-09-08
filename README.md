# 🐶 UPDOG!

**UPDOG!** is a web-based computer vision application that identifies the breed of a dog in an uploaded photo.

This is our revalida for the Google Cloud Platform Developer Stint of the AC2E program.

*Backend resources are currently deactivated.*

## 💻 Contributors

- [Kendrick Tan](https://github.com/saibunny) - AI/ML & Backend
- [Faust Roxas](https://github.com/faustroxas) - Architecture & Backend
- [Xyza Rivera](http://xyzarivera.com) - Frontend & Design

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this repository.

    ```shell
    # create a new Gatsby site
    git clone git@github.com:xyzarivera/doggo-classifier-ui.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd doggo-classifier-ui/
    npm install package.json
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🧐 What's inside?

### GCP & Firebase

Application Frontend is deployed in Firebase Hosting, while Backend Services are deployed in the Google Cloud Platform.

### GCP AutoML Vision

The Doggo AI classifier is trained using GCP's AutoML Vision with a dog breed dataset containing 9,229 labeled images.

### GastbyJS

Application Frontend is built using GatsbyJS. It is a React-based, GraphQL powered, static site generator.