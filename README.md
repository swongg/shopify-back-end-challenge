# shopify-back-end-challenge

## About the project
This is my submission to Shopify's Back End Developer Intern Challenge for Summer 2022! 
- [challenge specifications](https://docs.google.com/document/d/1z9LZ_kZBUbg-O2MhZVVSqTmvDko5IJWHtuFmIu_Xg1A/edit#)

### Features
- CREATE/READ/UPDATE/DELETE operations on inventory items
- Supports image upload and storage

### Screenshot

**App**\
![shopify-backend-challenge](https://user-images.githubusercontent.com/46267622/149686278-43fbc0ec-9fc4-4c7f-b0b2-f6875de12537.jpg)

**MongoDB**\
![image](https://user-images.githubusercontent.com/46267622/149705170-2203b9a2-1cb9-4e54-8837-17f9abb88d4d.png)


### Demo
![Demo](https://user-images.githubusercontent.com/46267622/149700902-246db545-09e0-43ee-a572-740d3ed14324.gif)

### Technologies used:
- Node/Express backend
- AWS S3 for storing image thumbnails
- MongoDB for storing inventory items

## Getting Started
- ```/server``` contains the backend code
- ```/client``` contains the frontend code

### Requirements
- Node v14.17.1
- [AWS S3 Bucket](https://aws.amazon.com/s3/)  // make sure the _ACLs enabled_ option is selected
- An available [MongoDB cluster](https://www.mongodb.com/atlas/database)

### Installation and set up
Clone the project ```git clone https://github.com/swongg/shopify-back-end-challenge.git```
\
\
**Backend**
1. In the project's ```/server``` directory, run ```npm install```
2. In the ```/server/db``` directory, create a file named .env and add\
```DB_URL="mongodb+srv://<username>:<password>@cluster0.xfgzh.mongodb.net/databasename?retryWrites=true&w=majority"```
\
Please note to replace **username**, **password** and **databasename** with your db cluster's actual values
3. In the ```/server/controllers``` directory, create a .env file and add ```AWS_ACCESS_KEY_ID=""``` and ```AWS_SECRET_ACCESS_KEY=""```. Replace the empty strings with your AWS credentials which can be found by following these [instructions](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)
4. Download the [AWS CLI](https://aws.amazon.com/cli/) and in your favourite terminal, run ```aws configure```. Enter your AWS Access Key ID and AWS Secret Access Key from step 3
5. In the ```/server``` directory, run ```npm run start```

**Frontend**
1. In the project's ```/client``` directory, run ```npm install```
2. In the same directory, run ```npm run start``` to start the React application


