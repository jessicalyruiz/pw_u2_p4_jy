console.log('vue:')
console.log(Vue)


const app=Vue.createApp({
    //opcion1
   // template:`
    //<h1> hello world </h1>
   // <p> desde vue</p>
   // {{1+1}}
   // `

   //opcion2
   data(){
    return{
        namej:'jessi',
        apellido:'yanez',
        mensaje: 'hello world from data, vue.js'
    }
   },
   methods:{
    cambiarName(){
        console.log('metodo cambioar nombre')
        this.namej='Jessicaly'
    },
    changeApellido(){
        this.apellido='Ruiz'
    }
   }
})

app.mount('#myAppJessi')