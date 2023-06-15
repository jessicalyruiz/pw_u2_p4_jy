
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
            let operacion = llenar('=');
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
            let numero1 = parseFloat(num1);
            let numero2 = parseFloat(num2);
            switch (simbolo) {
                case '/':
                    console.log('dividir')
                    let r = dividir(numero1, numero2)
                    console.log(r)
                    this.resultado = r
                    break;
                case '*':
                    this.resultado = multiplicar(numero1, numero2)
                    break;
                case '+':
                    this.resultado = sumar(numero1, numero2)
                    break;
                case '-':
                    this.resultado.value = restar(numero1, numero2)
                    break;
            }
        },
        /*
        const convertir=(idcampo)=>{
            return parseFloat(document.getElementById(idcampo).value);
        }*/

         llenar  (dato)  {
            console.log('llenar ' + dato)

            let prueba='';
            console.log(prueba)
            prueba+=dato;
            console.log(prueba)


            let operacion = this.pantalla
            console.log(operacion)
            operacion += dato;
            console.log(operacion)
            this.pantantalla+=dato
            return operacion
        },




         vaciar () {
            this.pantalla = '';
            this.resultado = ''
        },





    }



})



app.mount('#myCalcu')