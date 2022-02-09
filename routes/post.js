const express =  require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send(data)
});

let data = [
    {
        id:1,
        name: "peter",
        text: "lorem"
    },
    {
        id:2,
        name:"faith",
        text: "lorem ipsum"
    }
];

module.exports = router;