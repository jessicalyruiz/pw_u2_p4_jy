
const app = Vue.createApp({

    data() {
        return {
            num1: 0,
            num2: 0,
            resultado: '',
            pantalla: '',
        }

    },

    methods: {

        sumar()  {
            return this.num1 + this.num2;
        },
        restar() {
            return this.num1 - this.num2;
        },
         multiplicar() {
            return this.num1 * this.num2;
        },
         dividir()  {
            return this.num1 / this.num2;
        },


         operarNumeros  ()  {
            console.log('operar numeros')
            this.llenar('=');
            let operacion = this.pantalla
            let num1 = '', num2 = '', simbolo = '';
            let op = false;
            for (let i = 0; i < operacion.length; i++) {
                console.log('for operar numeros : ' + i)
                if (operacion[i] !== '+' && operacion[i] != '-' && operacion[i] != '*' && operacion[i] != '/' && !op) {
                    num1 += operacion[i]
                    console.log('num1: ' + num1)
                } else {
                    if (op) {
                        if (operacion[i] == '=') break;
                        num2 += operacion[i]
                        console.log('num2 ' + num2)
                    } else {
                        console.log('operar numeros else, operacion ')
                        simbolo = operacion[i]
                        console.log('operacion ' + simbolo)
                        op = true;
                    }
                }
            }
            this.num1 = parseFloat(num1);
            this.num2 = parseFloat(num2);
            switch (simbolo) {
                case '/':
                    console.log('dividir')
                    let r = this.dividir()
                    console.log(r)
                    this.resultado = r
                    break;
                case '*':
                    this.resultado = this.multiplicar()
                    break;
                case '+':
                    this.resultado = this.sumar()
                    break;
                case '-':
                    this.resultado = this.restar()
                    break;
            }
        },

         llenar  (dato)  {
            console.log('llenar ' + dato)
            let operacion=this.pantalla
            operacion+=dato
            console.log('operacion: '+ operacion)
            this.pantalla=operacion
            console.log('pantalla'+this.pantalla)
           
        },




         vaciar () {
            this.pantalla = '';
            this.resultado = ''
        },





    }



})



app.mount('#myCalcu')