// Funções retornam array e objetos 

    function myFunction(){
        return [1, 2, 3];
    };

    function myFunction(){
        return {
            prop1: 1,
            prop2: 'evandro',
            prop3: function(){
                return 'prop3';
            }
        }
    };

// executar a prop

    myFunction().prop1;

    var values = myFunction();

    console.log(values);
    console.log(values.prop2);
    console.log(values.prop3);
    console.log(values.prop3());

// array

    var arr = [1, 2, 3];
    function myFunction2(arg){
        return arg;
    }

    console.log(myFunction2());
    console.log(myFunction2(arr));

    function myFunction3(arg){
        return arg[1];
    };

    console.log(myFunction3(arr));
    console.log(myFunction3([1, 5, 7, 8]));
    console.log(myFunction2(['evandro', 1, true, 25]));

// objeto

    var obj = {
        propriedade: 'evandro',
        curso: 'Javascript Ninja',
        ninja: true
    };

    function myFunctionObj(arg){
        return arg;
    };

    console.log(myFunctionObj(1));
    console.log(myFunctionObj(obj));
    console.log(myFunctionObj(obj).ninja);

    function myFunction4(arg){
        return arg.curso;
    };

    console.log(myFunction4(obj));
    console.log(obj.curso);