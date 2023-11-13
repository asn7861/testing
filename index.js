const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ message: "success" });
});

app.post("/add", (req, res) => {

    let { email, password } = req.body;
    let data = {
        email,
        password
    }
    let token = jwt.sign(data, "12345678");
    return res.status(200).json({ token })
})

app.get("/getusers", (req, res) => {
    let authorization = req.headers['authorization']?.split(' ')[1];
    console.log(authorization);
    let mytoken = jwt.verify(authorization, "12345678");
    return res.status(200).json({ mytoken });
})

app.post("/new",(req,res)=>{
    console.log("add");
})

app.listen(4000, () => {
    console.log("server is running at port 4000");
});

