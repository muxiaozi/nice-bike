const MyPromise = require('./t1');

new MyPromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(11);
    }, 1000)
}).then((res) => {
    console.log(res);

    return new MyPromise((res, rej) => {
        res(12345);
    });
}).then(res=>{
    console.log(res);
    
});


// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(11);
//     }, 1000)
// }).then((res) => {
//     console.log(res);

//     return new Promise((res, rej) => {
//         res(12345);
//     });
// }).then(res=>{
//     console.log(res);
    
// });
