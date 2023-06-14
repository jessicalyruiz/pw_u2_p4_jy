

const app=Vue.createApp({
  
   data(){
    return{
       nombre:'',
       apellido:'',
       cedula:'',
       genero:'',
       ciudad:'',
       estudiantes:[],
      
    }
   },
   methods:{
   ingresar(){
      console.log('ingresando');
      const newEstudiante={
         nombre: this.nombre,
         apellido: this.apellido,
         cedula:this.cedula,
         genero:this.genero,
         ciudad:this.ciudad,
      }
      this.estudiantes.push(newEstudiante);

 
   }
   
   }
})

app.mount('#myAppEstu')