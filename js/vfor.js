const estudiante={
   nombre:'Jessi',
   apellido:'Yanez'
}
const estudiante2={
   nombre:'Lore',
   apellido:'Yanez'
}
const estudiante3={
   nombre:'Taty',
   apellido:'Yanez'
}
const estudiante4={
   nombre:'Marilyn',
   apellido:'Yanez'
}
const estudiante5={
   nombre:'Jessi',
   apellido:'Ruiz'
}
const estudiante6={
   nombre:'Nancy',
   apellido:'Ruiz'
}
const estudiante7={
   nombre:'Pedro',
   apellido:'Lin'
}
const estudiante8={
   nombre:'Andres',
   apellido:'Viv'
}
const estudiante9={
   nombre:'dome',
   apellido:'Rodriguez'
}
const estudiante10={
   nombre:'joss',
   apellido:'monca'
}

const estudiantes=[estudiante, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10]

console.log('estudiantes'+ estudiantes)


const app=Vue.createApp({
  
   data(){
    return{
       arreglo:estudiantes,
       nombre:'',
       apellido:'',
      
    }
   },
   methods:{
   imprimir(){
      console.log(estudiantes)
   },
   ingresarEstu( event){
         //console.log('vamos a agregar: ')
         
         console.log(this.nombre)
         this.estudiantes


         console.log(event)
         console.log(event.charCode)
         if(event.charCode=='13'){
            console.log('presiono enter')
            const newStudent={
               nombre:this.nombre,
               apellido:this.apellido
            }
            this.arreglo.push(newStudent)
         }else {console.log('no enter')}

   },
   ingresarEstu( event){
      console.log('vamos a agregar: ')
      console.log(this.nombre)
         const newStudent={
            nombre:this.nombre,
            apellido:this.apellido
         }
         this.arreglo.push(newStudent)
     

}
   }
})

app.mount('#myAppFor')