

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
      this.nombre='';
      this.apellido=''
      this.cedula=''
      this.genero=''
      this.ciudad=''
      
   }
   
   }
})

app.mount('#myAppEstu')