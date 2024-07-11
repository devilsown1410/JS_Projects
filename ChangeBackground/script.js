// const hex='0123456789ABCDEF';

// const randomcolor=function(){
//     color='#';
//     for(let i=0;i<6;++i){
//         color+=hex[Math.floor(Math.random()*16)];
//     }
//     return color;
// }


// let s;
// const start=function(){
//     if(!s){
//     s=setInterval(bg,1000)
//     }
//     function bg(){
//         document.body.style.backgroundColor=randomcolor();
//     }
// }
// const stop=function(){
//     clearInterval(s);
//     s=null;
// }
// document.querySelector('#start').addEventListener('click',start)
// document.querySelector('#stop').addEventListener('click',stop)

const promise=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        resolve({user:"rahul",password:"123"});
    }else{
        reject("Error : JS went wrong");
    }
})

// async function consumepromise(){
//     try{
//         const response=await promise;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumepromise();
// promise
// .then((username)=>{
//     return username.user;
// }).then((user)=>{
//     console.log(user);
// })
// .catch((e)=>{
//     console.log(e);
// })
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log("Error")
})