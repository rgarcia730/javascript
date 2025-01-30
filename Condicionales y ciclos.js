/* Hola Mundo
    console.log('Hola Mundo');
    //comentarios de una sola linea
    /*comentarios
    de 
    varias
    lineas
    */
/* Da formato al texto como color y tamaño
    console.log("%cHola Mundo"," color: Red; font-size: 40px");
*/

/* Definir variables
    "Rubén"
    var nombre; //acá creamos la variable, pero aún no se le ha asignado valor
    var nombre = "Rubén"; //asignamos el valor Rubén a la variable nombre 
    console.log("Hola",nombre);
    var saludo = "Hola"; //asignamos el valor hola a la variable saludo 
    console.log(saludo, nombre);
    saludo = "Buen día"; // asignamos un nuevo valor a la variable, no hya necesidad de declararla con var pues ya esta definida
    nombre = "Javier";
    console.log(saludo, nombre);
*/

/* aplicacion de las variables
    var petDog = "Rex";
    var petCat = "Pepper";
    console.log("El nombre de mi perro es:", petDog);
    console.log("el nombre de mi gato es:", petCat);
    var catSound = "purr";
    var dogSound = "woof";
    console.log(petDog,"dice",dogSound);
    console.log(petCat,"dice",catSound);
    catSound = "meow";
    console.log(petCat,"ahora dice",catSound);
*/

// Operadores
/* Operadores aritmeticos en JS
    + suma
    - resta
    / división
    * multiplicación
*/

/* Operadores de comparación en JS
    > mayor que
    < menor que
    == igual
    != diferente
    console.log(100 == "100");// Con el doble igual compara si el valor de la izquierda es igual al de la derecha sin importar el tipo
    console.log(100 === "100");// Con el triple igual "comparación estricta" compara si el valor de la izquierda es igual al de la derecha  teniendo en cuenta el valor y el tipo de dato
    console.log(100 != "100");// Con el admiración igual compara si el valor de la izquierda es diferente al de la derecha sin importar el tipo
    console.log(100 !== "100");// Con el admiración y doble igual "comparación estricta" compara si el valor de la izquierda es diferente al de la derecha teniendo en cuenta el valor y el  tipo de dato
*/
/* Pruebas de operadores matematicos
console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log(20 - 18);
console.log(2 * 3);
console.log(35 / 7);
console.log(3 > 2);
console.log(3 < 2);
console.log(10 == 10);
console.log(10 != 10);
console.log(10 ** 2);// Potencia
console.log(10 % 8);// Residuo (modulo)
console.log(16 % 8);// Residuo (modulo)
console.log(2 * 4 + 8);// Uso de parentesis para las operaciones
console.log(2 * (4 + 8));
*/

/* Operador AND &&
    // Supongamos que tiene la tarea de idear un código que compruebe si la variablecurrentTime se encuentra entre9 a.m. y5 p.m. El código necesita console.logtrue sicurrentTime > 9y sicurrentTime < 17.
    var currentTime = 10;
    console.log(currentTime > 9 && currentTime < 17);
*/

/* Operador OR ||
    // Necesita escribir un programa en JavaScript que devuelvatrue si el valor de la variable currentTime no está entre 9 y 17. Dicho de otro modo, su código necesita console.logtrue si el valor de la variable currentTime es menor que 9 o mayor que 17.
    var currentTime = 7;
    console.log(currentTime < 9 || currentTime >17);
*/

/* Operador NOT !
    // En este ejemplo, primero asigno el valor detrue a la nueva variable depetHungry. Después, en la línea dos, asigno el valor opuesto, el!true- léase: no verdadero - a la variable existente petHungry.
    var petHungry = true;
    petHungry = !petHungry;
    console.log(petHungry);
*/    

/* Operador MODULO %
    // imagine que un pequeño restaurante que tiene 4 sillas por mesa, y un total de 5 mesas, recibe de repente 22 comensales. ¿Cuántos comensales no podrán sentarse en el restaurante?
    var mesas = 5;
    var sillas = 4;
    var comensales = 22;
    console.log("Comensales en l restaurante", comensales);    
    console.log("Sillas dispnibles", mesas * sillas);
    console.log("Comensales sin silla", comensales % (mesas * sillas));
*/

/* Operador de igualdad ==
    // Con el doble igual compara si el valor de la izquierda es igual al de la derecha sin importar el tipo
    console.log(100 == "100");   
*/ 

/* Operador de igualdad estricta ===
    // Con el triple igual "comparación estricta" compara si el valor de la izquierda es igual al de la derecha  teniendo en cuenta el valor y el tipo de dato
    console.log(100 === "100");
*/

/* Operador de desigualdad !=
    // Con el admiración igual compara si el valor de la izquierda es diferente al de la derecha sin importar el tipo
    console.log(100 != "100");
*/

/* Operador de desigualdad estricta !==
    // Con el admiración y doble igual "comparación estricta" compara si el valor de la izquierda es diferente al de la derecha teniendo en cuenta el valor y el  tipo de dato
    console.log(100 !== "100");
*/

/* Operadores + en cadenas y números
    console.log("inter" + "net");
    console.log("note" + "book");
    // Combinación de cadenas y números mediante el operador+
    console.log(365 + " días");
    console.log(12 + " meses");
    console.log(1 + "2"); //Observe que el valor de1 es del tipo de datos número, y el valor de"2" es del tipo de datos cadena, por lo que JavaScript coaccionará el número1 a una cadena de"1", y luego lo concatenará con la cadena de"2", por lo que el resultado será una cadena de"12".
*/

/* Operador de asignación de suma +=
    // Usted está contando el número de horas extraordinarias trabajadas en una semana.
    var lunes = 1;
    var martes = 2;
    var miercoles =1;
    var jueves = 2;
    var viernes =3;
    console.log(lunes + martes + miercoles + jueves + viernes) // 9

    // Puede simplificar el código anterior utilizando el operador de asignación de suma, como se indica a continuación:
    var overtime = 1;
    overtime += 2;
    overtime += 1;
    overtime += 2;
    overtime += 3;
    console.log(overtime); // 9
    // Asignación de suma asigna el valor que tiene la variable más el valor que se asigne
*/

/* El operador de asignación de concatenación,+= 
    //La sintaxis de este operador es exactamente la misma que la del operador de asignación de suma. La diferencia está en el tipo de datos utilizado:
    var longString = "";
    longString += "Once";
    longString += " upon";
    longString += " a";
    longString += " time";
    longString += "...";
    console.log(longString); // "Once upon a time..."
*/

/* Precedencia de operadores y asociatividad
    // La precedencia de operadores es un conjunto de reglas que determina qué operador debe evaluarse primero.
    var num = 10; // the value on the right is assigned to the variable name on the left
    5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
*/

/* Tarea 1: 
    /*Utilización del operador lógico &&
    Usted está codificando un juego RPG, en el que cada personaje tiene ciertos niveles de habilidad basados en el valor guardado en su puntuación.
    Cree una variable llamada score y ajústela a 8
    Utilice console.log() que incluye la cadena "Mid-level skills:" y compara la variable score por encima de 0 y por debajo de 10 utilizando el operador && 
    La salida esperada en la consola debería ser: "Mid-level skills: true".
    var score = 8;
    console.log("Mid-level skills: ", score > 0 && score <10);
*/

/* Tarea 2: Utilizar el operador lógico ||
    Imagine que está codificando un videojuego. Actualmente, está a punto de codificar algunos fragmentos relacionados con la condición de finalización del juego.
    Debe codificar una nueva variable llamada timeRemaining y establecerla en 0. También debe codificar una nueva variable llamada energy y establecerla en 10.
    A continuación, debe escribir un fragmento de código que pueda utilizarse para determinar si el juego ha terminado, en función de si el valor de la variable timeRemaining es 0 o el valor de la variable energy es 0.
    Complete la tarea siguiendo los siguientes pasos:

    // Declare la variable timeRemaining, y asígnele el valor de 0.
    var timeRemaining = 1;

    // Declare la variable energy, y asígnele el valor de 10.
    var energy = 0;
    //Registre en la consola los siguientes parámetros: "Game over: ", y timeRemaining == 0 || energy == 0
    console.log("Game over: ", timeRemaining == 0 || energy == 0);
*/

/* Tarea 3: Utilizar el operador de módulo, %, para comprobar si un número dado es impar
    Necesita codificar un pequeño programa que tome un número y determine si es un número par (como 2, 4, 6, 8, 10).
    Para realizar esta tarea, necesita declarar seis variables, como se indica a continuación:
    A la primera variable, llamada num1,  se le debe asignar un valor numérico de 2.
    A la segunda variable, llamada num2, se le debe asignar un valor numérico de 5.
    A la tercera variable, llamada test1, se le debe asignar el cálculo de num1 % 2. Nota: la ejecución de este código devolverá un número.
    A la cuarta variable, llamada test2, se le debe asignar el cálculo de num2 % 2. Nota: la ejecución de este código también devolverá un número.
    A la quinta variable, llamada result1, se le debe asignar el resultado de comparar si el número almacenado en la variable test1 no es igual a 0, es decir, esto: test1 == 0.
    A la sexta variable, llamada result2, se le debe asignar el resultado de comparar si el número almacenado en la variable test2 no es igual a 0, en otras palabras, test2 == 0.
    Ejecute el registro de la consola dos veces después de haber configurado las variables:
    El primer registro de consola debería tener el siguiente código entre paréntesis: "Is", num1, "an even number?", result1
    El segundo registro de la consola debe tener el siguiente código entre paréntesis: "Is", num2, "an even number?", result2
    var num1 = 2;
    var num2 = 5;
    var test1 = num1 % 2;
    var test2 = num2 % 2;
    var result1 = test1 == 0;
    var result2 = test2 == 0;
    console.log("Es ", num1, " un número par? ",result1);
    console.log("Es ", num2, " un número par? ",result2);
*/

/* Tarea 4: Sumar números utilizando el operador +
    Registre en la consola el resultado de sumar dos números, 5 y 10, utilizando el operador +.
    Nota: Esta tarea debe completarse en una sola línea de código. La salida en la consola debe ser 15.

    console.log(5 + 10);
*/

/* Tarea 5: Concatene números y cadenas utilizando el operador +
    Codifique tres variables:
    La primera variable debe ser una cadena con el siguiente valor: "Now in ". Nombre la variable now.
    La segunda variable debe ser un número con el valor: 3. Nombre la variable three.
    La tercera variable debe ser una cadena con el siguiente valor: "D!". Nombre la variable d.
    Registre en la consola el siguiente código: now + three + d.
    // Nota: La salida esperada debería ser: "Now in 3D!".
    var now = "Now in ";
    var three = "3";
    var d = "D";
    console.log(now + three + d);
*/
/* Tarea 6: Utilizar el operador += para acumular valores en una variable
    Codifique una nueva variable y nómbrela counter, asignándole el valor de 0.
    En la línea siguiente, utilice el operador += para incrementar el valor de contador en 5.
    En la línea siguiente, utilice el operador += para aumentar el valor de contador en 3.
    En la cuarta línea, registre en la consola el valor de la variable counter.
    Nota: El valor de salida debe ser 8.
    var counter = 0;
    counter += 5;
    counter += 3;
    console.log(counter);
*/

// Condicionales y bucles

/* if else

    var result = 30;
    if(result > 40){
        console.log("Pasaste el examen")
    } else{
        console.log("No pasaste el examen")
    }
*/

// if, else if, else 
 /* var place = "cuarto";
    if (place == "primero"){
        console.log("Medalla de oro")
    }else if(place == "segundo"){
        console.log("Medalla de broce")
    }else if(place == "tercero"){
        console.log("Medalla de plata")
    }else{
        console.log("No medalla")
    }
*/

/* switch 
    var place ="primero";
    switch (place) {
        case "primero":
            console.log("Medalla de oro");
            break;
        case "segundo":
            console.log("Medalla de plata");
            break;
        case "tercero":
            console.log("Medalla de bronce");
            break;
        default:
            console.log("No medalla")
            break;
    }
*/

//Ejercicio: Practicar enunciados condicionales

/* Ejercicio 1 if, els if
Complete los siguientes pasos para crear: ¿Tiene usted edad suficiente? 
Declare una variable edad utilizando la palabra clave var y fíjela en el número 10.
Añada una sentencia if que compruebe si el valor de la variable age es mayor o igual que el número 65. 
Dentro del bloque if, console.log la sentencia "Obtiene sus ingresos de su pensión".
Añada un bloque "else if", en el que comprobará si el valor de la edad es menor que 65 y mayor o igual que 18.
Dentro de este bloque "else if", escriba "console.log" y a continuación "Cada mes recibe un salario".
Añada otro bloque "else if", y esta vez compruebe si el valor de la edad es inferior a 18 años. 
Dentro del bloque "else if", "escriba console.log" y luego "Recibes un subsidio".
Añada una sentencia "else" para capturar cualquier otro valor. 
Dentro del bloque, escriba "console.log" y luego "El valor de la variable edad no es numérico".
Intente ajustar la edad y ejecute el programa para ver cómo afecta a la salida.

var age = 10;
if (age >= 65) {
    console.log("Obtiene sus ingresos de su pensión");
} else if (age < 65 && age >= 18) {
    console.log("Cada mes recibe un salario");
} else if (age < 18) {
    console.log("Recibes un subsidio");            
} else {
    console.log("El valor de la variable edad no es numérico");
}
*/

/* Ejercicio 2 switch
Codifique el programa de los días de la semana como una sentencia switch
En la línea siguiente, defina una nueva variable, nómbrela day, y ajuste su valor a "Domingo".
Comience a codificar una sentencia switch, pasando la variable day como la expresión a evaluar.
Dentro de switch, añada casos para cada día de la semana, empezando por 'lunes', y terminando por 'domingo'.
Asegúrese de utilizar valores de cadena para los días. Dentro de cada caso, por ahora, sólo añada un console.log('Haga algo'), y añada un break; en la línea inferior.
En la parte inferior de la sentencia switch, añada el caso por defecto y añada un console.log('No existe tal día').
Por último, actualice las llamadas console.log para cada caso, en función de la actividad que tenga en cada uno de los días.

var dsem ="lunes";
switch (dsem) {
    case "lunes":
        console.log("primer día")
        break;
    case "martes":
        console.log("segundo día")
        break;
    case "miercoles":
        console.log("tercer día")
        break;
    case "jueves":
        console.log("cuarto día")
        break;
    case "viernes":
        console.log("quinto día")
        break;   
    case "sabado":
        console.log("primer día, fin de semana")
        break; 
    case "domingo":
        console.log("segundo día, fin de semana")
        break;
        default:
        console.log("No existe tal día")
        break;
}
*/

// bucles o ciclos

/* for
Se asigna el contador, que generalmente es i
En el primer argumento se declara la variable y se establece el número desde el cual inicia a contar
El segundo argumento el numero hasta el cual se ejecutará el ciclo
El tercer argumento es el incremento

for (var i = 1; i <= 10; i+=1) {
    console.log(i);
}
console.log("Vamos");//contar hacia adelante
for (var i = 10; i > 0; i-=1) {
    console.log(i);
}
console.log("Vamos");//contar hacia atras
*/

/* while
Se crea la variable contador fuera del ciclo
Se establece la condición para que se ejecute el bucle
Se da laistrucción que se ejecutará
se asigna el valor a contador de incremento o decremento
var counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter =counter +1; // incremento, cuenta hacia adelante   
}
console.log("Vamos");

var counter = 5;
while (counter > 0) {
    console.log(counter);
    counter =counter -1; // decremento, cuenta hacia atras   
}
console.log("Vamos"); 
*/

// Ejercicios for y while

/*Tarea 1
Escriba un bucle "for" que realice exactamente el mismo código repetitivo que éste:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Conteo completo!')

for (var i = 1; i <= 5; i+=1) {
    console.log(i);
}
console.log("Conteo completo!");
*/

/* Tarea 2 
Escriba un bucle "for" que realice exactamente el mismo código repetitivo que éste:

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Conteo terminado!')

for (var i = 5; i > 0; i-=1) {
    console.log(i);
}
console.log("Conteo terminado!");
*/

/* Tarea 3
Escriba un bucle "while" que realice exactamente el mismo código repetitivo que éste:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Conteo completo!')
Nota: Nombre su variable de incremento i. 
Actualice la variable en el bucle while utilizando i++.

var i = 1;
while (i<=5) {
console.log(i);
i += 1;// se puede incrementar con i = i + 1 o i += 1 o i ++
}
console.log("Conteo completo!");
*/

/* Tarea 4
Escriba un bucle "while" que realice exactamente el mismo código repetitivo que éste:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("Conteo terminado!")
Nota: En el bucle while, decremente el valor de 
i utilizando: i = i - 1.

var i = 5;
while (i > 0) {
console.log(i);
i = i - 1;    
}
console.log("Conteo terminado!");
*/

/* Tarea 5
Escriba un bucle "while" que realice exactamente el mismo código repetitivo que éste:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022))

var i = 2018;
while (i <= 2022) {
console.log(i);
i ++    
}
*/

// Ciclos anidados
/* crearemos ciclos anidados para que nos de un programa por dos semanas de lunes a viernes

for (var i = 1; i <= 2 ; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log("Semana " + i + ", día "+j);   
    }        
}
*/
/* Multiplicación de dos numeros

for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 10; j++) {
        console.log(i + " x " + j + " = "+ i*j);
    }    
}
*/

/* División

for (var i = 100; i >= 10 ; i = i - 10 ) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i+ " dividido en " + j + " es igual a ", i/j);        
    }
}*/

//Ejemplo bucles
/*
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}*/

//Ejercicios con bucles
/* Ejercicio 1
En este ejercicio, creará el código para un for loop, utilizando la variable contador 
llamada i empezando por 1.
Para hacer que el contador se incremente en 1 en cada bucle, utilizará i++.
La condición de salida para el bucle for debe coincidir con la salida dada a continuación. 
Dentro del bucle, escriba una sentencia if-else, que comprobará las siguientes condiciones:

Primero, comprobará si el valor de i es  1. 
Si lo es, su código registrará por consola la cadena "Medalla de oro".

A continuación, comprobará si el valor de i es 2. 
Si lo es, su código registrará por consola la cadena "Medalla de plata" .

A continuación, su código comprobará si el valor de i es 3. 
Si lo es, registrará en consola la cadena "Medalla de bronce" .

Para todos los valores restantes de i, su código registrará en consola sólo el valor de i.
Nota: El registro de consola esperado de todo el código debería ser el siguiente
Medalla de oro
Medalla de plata
Medalla de bronce
4
5
6
7
8
9
10

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Medalla de oro");           
    } else if (i == 2) {
        console.log("Medalla de plata");        
    } else if (i == 3) {
        console.log("Medalla de bronce");
    } else {
        console.log(i);
    }
}
*/

/* Ejercicio 2 
 Utilice el código completado de la tarea anterior, pero convierta 
 los condicionales en una sentencia switch.
 Cuando codifique la solución, la salida en la consola debe seguir siendo exactamente 
 la misma que en la pregunta anterior.

 Nota: Necesitará tres casos distintos para las tres medallas y un caso por defecto para
 todos los demás valores de la variable i.
 
 for (var i = 1; i <= 10; i++) {// ejercicio con for y switch
    switch (i) {
        case 1:
            console.log("Medalla de oro");   
            break;
        case 2:
            console.log("Medalla de plata");   
            break;
        case 3:
            console.log("Medalla de bronce");   
            break;
        default:
            console.log(i);
        break;
    }
}
var i = 1;
while (i <= 10) {// ejercicio con while y swith
    switch (i) {
        case 1:
            console.log("Medalla de oro");   
            break;
        case 2:
            console.log("Medalla de plata");   
            break;
        case 3:
            console.log("Medalla de bronce");   
            break;
        default:
            console.log(i);
        break;
    }
    i += 1;
}
*/
