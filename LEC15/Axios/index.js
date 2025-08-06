console.log(axios)

async function getComment(URL){
    //  axios.get(URL).then((data)=>{
    //     console.log(data)
    //  })
    //  .catch(err=>console.log(err))
    try{
    let comment = await axios.get(URL)
    console.log(comments);
    } catch(error){
        console.log(error)
    }
}

getComment("https://jsonplaceholder.typicode.com/comments")


addBlog("http://localhost:6665/blog","first blog" ,"first blog description")
 async function addBlog(URL,title,description){
    try{
    let newBlog={
        title:title,
         description:description 
    } 
    let response= await axios.post(URL,newBlog);
    console.log(response)
} catch(error){
    console.log(error)
}
}