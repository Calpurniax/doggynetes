# Doggynetes

A containerized application with the front connected to Firebase DB and deployed in kubernetes 

![Screenshot of the web client, with the rendered results and the form for create a new dog](https://raw.githubusercontent.com/Calpurniax/doggynetes/master/doggynetes.png)

## Getting started

This project uses HTML, CSS and JS vanilla for the client side, which allows the user to read all the dogs in DB or create a new one. For backend we have an API with Python (fastAPI)  and firebase as Database. Each service is containerized in Docker, and was deployed in Kubernetes. 

The folder "k8s" contains the YAML for both services and their deployments, it requires a credentials.json file from firebase, Docker or Podman installed and a image repository.
The credentials.json file, has to be in an .env folder inside "back" folder. And create a secret to inject the credentials in the backend pod with the command:

`kubectl create secret generic --from-literal=credentials --from-file=.env/credentials.json`

With Docker the images were created and then pushed to quay.io, the url of those images are in each YAML deployment, and then running the YAML files will create the PODs.


**To run the project in your local machine**

Create a virtual env for Python

`py -3 -m venv .venv`

Run the virtual env

`.venv\Scripts\activate`

In "back" directory install dependencies by running

`pip install requirements.txt`

Run the main file, it will start the server

`python api.py`

Change to "front" folder, in api.js file change the URL from both fetch to your localhost

**To run the project in Kubernetes**

Create the image from both Dockerfiles. Run this command in "front" folder:

`docker build -t frontend .`

And again in "back" folder:

`docker build -t backend .`

Upload those images to your image repository and write their URLS in each YAML deployment.

*Dont forget to create the secret with the credentials!*

Run the following command to create the deployments and services  in the K8s folder:

`kubectl apply -f .`

## Architecture

Architecture diagram

    A front-end web app where you can consult the database or write in it.
    A Python backend that process the agent requests.    
    A firebase database where data is stored.

