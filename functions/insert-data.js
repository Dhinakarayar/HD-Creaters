import "./database.js"
import { PostModel } from "./models.js"

import post from "./posts.json" with {type:"json"}

PostMode1.insertMany(post).then(()=>{
    console.log("inserted")
}).catch(error => {
    console.error("failed to insert",error)
});

