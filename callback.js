import axios from "axios";

(async () => {
    const {data : user} = await axios 
    ("https://jsonplaceholder.typicode.com/users");
    console.log(user);

})();

const getCommands = (number) => {
    return new Promise((resolve, reject) => {
        if(number === 1) {
            resolve({text:"Selam"}); 
        }
            reject("Bir problem olustu")

    });
};
