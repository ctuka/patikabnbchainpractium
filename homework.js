import axios from "axios"

 const getDatas = async (number)  => {
        return new Promise(async (resolve, reject) => {
            const {data : user} =  await axios 
            ("https://jsonplaceholder.typicode.com/users/" + number);
            
            resolve(user);
        })
    } 
    console.log("post:");

const getPost = async (postID) => {
    return new Promise(async (resolve, reject) => {
        const {data : post} =  await axios 
            ("https://jsonplaceholder.typicode.com/posts?userId=" + postID);

            resolve(post.find(item => item.id == postID));
           
    })
}
const getData = async (nbr) => {
    Promise.all([await getDatas(nbr),await getPost(nbr)]).then(console.log).catch(console.log);
}

export default getData;
