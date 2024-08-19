# CRUD_1

All about RESTful CRUD (Create, Read, Update, Delete) API using Express.js, Node.js and mongoDB.
Using Postman to test the API and MongoDb to store data.

there are files that have been created for index, userRoute, userModel and userController.
Whats the use of these files?
- index.js for initializing express application and handle json request.
- userModel.js for defining schema and model for user data in mongodb.
- userController.js for handelling the logic and userModel.
- userRoute.js is for defining routes mapping them to usercontroller and mapping them to appropriate user data.

Schema is a json object that contains structure and contents of our data(document) in our collection.

Additional changes:
- .env file to connect via available port and to initialize localhost.
- changes made to the package.json file, "type":"module" and "scripts"{"start":"node index.js"}
  for mode about why to use "type":"module" [see more](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling))".
