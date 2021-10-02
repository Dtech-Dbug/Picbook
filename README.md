# Picbook 🖼📕 :  Adding life to moments.

![IMG-20210729-WA0017](https://user-images.githubusercontent.com/74761990/135707296-6e49bfa2-e819-4bf8-8e98-d937797b810c.jpg)

## About

Picbook is an application that let's you store the most precious moments of your life in the clouds, miles away from getting deleted(by  mistake, ofcourse!)

## Stacks
- React , in the frontend.
- Firebase , in the backend as the service.

![IMG-20210730-WA0015](https://user-images.githubusercontent.com/74761990/135707320-80fc4f7d-3c4e-4ab4-adce-b1426be1e0a0.jpg)

**Introduction**
- This is a relatively easy and a fun way to getting started with hands on application with cloud services and integrating them with the view.
- Seamless full stack experience , without the hassles of creating your own server, controllers or data model.
- Why not? Becuase Firebase takes care of all those for us. It is a quite popular backend as a service platform, and experience w/ firebase gives you a competetive edge, in the cloud-driven tech space. ☁

*Note* : A Prior understanding of React is necessary to move forward, with this one.

## Guide

### 1. Contribution / Issues
*Anyone can contribute to this open source project. Also please feel free to raise any issues that you want to include , get solved or even to hang out online w/ us.💻*
- Fork this github repo onto your own github profile.
- Create a spearate branch , in the forked repo,
- Clone the forked project onto your local machine.
- Change directory to the project root directory and run ```npm i ```  to install all the project dependancies.
- Crush some codes ,preview them as well. 👩‍💻
- Once you have made the desired changes, push it to your origin, and create a PR. 🤝

### 2. Getting started w/ picbook codebase
***Project Dependancies***
- create-react-app : *CRA template to auto generate a react codebase* 
- firebase : *to be able to use firebase services* ``` npm i firebase ```
- framer-motion : *for adding quirk and fun animation* ``` npm i framer-motion ```
- Docs  : [framer-motion](https://www.framer.com/motion/) , [firebase](https://firebase.google.com/docs) , [React](https://reactjs.org/docs/getting-started.html)

***Services used from firebase***
- Firestore : *Like a database to store all the urls of the uploaded images. 🔥*
- Storage : *to store the uploaded images and get their URLS before adding the images to the firestore collection 💥*

***Initialising firebase services, after configuring firebase config with the sdk from firebase***


*Importing services we would use*
- ``` import firebase from 'firebase' ```
- ```import 'firebase/storage' ```
- ``` import firebase/firestore' ```


*Intiliasing the services*
- ``` let projectStorage(any name) = firebase.storage() ```
-  ``` let projectFirestore = firebase.firestore() ```
-  ``` export { projectStorage , projectFirestore} ``` : to be able to use the services, we need to export the variables which stores the invoked/initialised services

