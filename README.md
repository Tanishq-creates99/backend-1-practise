Brief demo of backend aspect of MERN stack i.e MongoDb, Node.js , Express.js , by creating a fullfledge back end routes, controller , models .
<p>Along with JavascriptWeb Tokens for signin procedure using it as middleware in contollers .</p>
1 - Creating package.json by npm init and installing necessary f/w like express, mongoose , mongodb . \n
2 - Importing all necessary tools and listening server on any port 
3 - using .env for storing crucial ecrypted links and port number.
4 - define routes for backend for eg /products , /users
5 - Using Express routing to divert the requests ( get , post , delete ) on given route to a route file which holds the route module with request
    (router.post , router.get)  
6 - Requested route for products will be then addressed in products routes which will hold all methods along with their controller function for eg : router.post ('/' , createproduct)
7 - request will further reach the appointed controller to create , edit  , delete the file .
8 -  a middle will be added in same route structure to verify whether the request header has authorization or not , which will verify jwt token and process request further . 
