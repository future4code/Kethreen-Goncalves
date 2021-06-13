import app from "./app"


app.post("/users/signup")
app.post("/users/login")
app.get("/users/profile")
app.get("/users/:id/profile")

app.post("/recipe")
app.get("/recipe/:id")

