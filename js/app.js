console.log('vue:')
console.log(Vue)


const app=Vue.createApp({
    //opcion1
    template:`
    <h1> hello world </h1>
    <p> desde vue</p>
    `
})

app.mount('#myAppJessi')