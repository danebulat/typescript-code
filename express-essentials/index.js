import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();

const PORT = 3000;

//Using the public folder at project root
app.use(express.static("public"));

//Using images folder at /images route
app.use("/images", express.static("images"));

//Make requests JSON encoded
//app.use(express.json());

// Make requests url-encoded
app.use(express.urlencoded({extended: true}));

//GET
app.get("/", (request, response) => {
  response.json(data);
});

//POST - express.json and express.urlencoded
app.post("/item", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

//GET - download method 
app.get("/download", (request, response) => {
  response.download("images/mountains_2.jpeg");
});

//GET - redirect method
app.get("/redirect", (request, response) => {
  response.redirect("https://linkedin.com");
  //response.redirect("/");
});

//Route chaining 
//For /class path
app
  .route("/class")
  .get((request, response) => {
    //response.send("Retrieve class info");
    throw new Error();
  })
  .post((request, response) => {
    response.send("Create class info");
  })
  .put((request, response) => {
    response.send("Edit class info");
  })
  .delete((request, response) => {
    response.send("Delete class info");
  });

//GET with next()
app.get("/next", (request, response, next) => {
  console.log("The response will be sent by the next function.");
  next();
}, (request, response) => {
  response.send("I just set up a route with a second callback.");
});

//GET with routing parameters
app.get("/class/:id", (request, response) => {
  //Middleware: Access the routing parameters
  const studentId = Number(request.params.id);
  const student = data.filter(student => student.id === studentId);
  // Everything above this line is middleware
  response.send(student);
});

//POST
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});

//PUT
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});

//DELETE
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

//Error handling
app.use((err, req, res, next) => {
  // err.stack represents stack trace
  console.error(err.stack);
  res.status(500).send("Something is broken!");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});

