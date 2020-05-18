### String

Son tipos de datos **Homogéneos**, **estáticos** y **lineales**.

En Java se utilizan dos tipos de datos para manejar cadenas de texto: *String* y *Char*

#### Funciones de Character

~~~java
char c1 = 'A':

Character.isLetter(c1); 	// Comprobar que sea una letra 
Character.isDigit(c1); 		// Comprobar si es un número 
Character.isUpperCase(c1);	// Comprobar si es mayúsculas 
Character.isLowerCase(c1);	// Comprobar si es minúsculas 
~~~

#### Funciones de String 

~~~java
String s1 = "Hola";
String s2 = "Adios";

// Comparar cadenas 
s1.equals(s2);
// Compara dos cadenas alfabéticamente, e indica cual es mayor o menor: 
s1.compareTo(s2); // Devuelve: < 0 sí 's1' es mas pequeña, 0 sí 's1' y 's2' son iguales, > 0 sí la primera es mayor 
// Nos dice si la cadena contiene otra cadena 
s1.contains(s2); 
// Nos dice la posición dentro de 's1' del carácter char
s1.indexOf(char);
// Nos dice la posición de un carácter a partir de la posición pos 
s1.indexOf(char, pos);
// Idem, pero desde el final 
s1.lastIndexOf(char);
// Para ver si está vacía. Similar a s1.equals("") 
s1.isEmpty();
// Para ver si una cadena empieza con algo 
s1.startWith(s2);
// Para ver si una cadena acaba con algo 
s1.endWith(s2);
// Convertir a mayúsculas 
s1.toUpperCase();
// Convertir a minúsculas 
s1.toLowerCase();
// Sustituir las ocurrencias de a por b en la cadena s1
s1.replace(a, b);
// Elimina espacios en blano antes y después
s1.trim();
// Convierte un String en un Array de char
char[] array = s1.toCharArray();
// Convierte un Array en una cadena 
s1 = new String(array);
// recorta una cadena desde su inicio hasta final-1 
s1.substring(inicio, final)
// recorta una cadena desde su inicio hasta el final 
s1.substring(inicio);
// Devuelve un array conteniendo las distintas partes de una cadena divididas según el parámtero de búsqueda. 
s1 = "hola que tal";
String[] cadena = s1.split(" "); //cadena[2] => "tal"
// pega en una cadena un array de String, separándolas con –en este caso- con un espacio 
String s1 = String.join (" ", cadena);
~~~

Algunas funciones útiles 

~~~java
public static String quitaAcentos(String a) {
    String acentos = "áÁéÉíÍóÓúÚüÜ";
    String normal = "aAeEiIoOuUuU";
    for (int i = 0; i < acentos.length(); i++) {
        a = a.replace(acentos.charAt(i), normal.charAt(i));        
    }
    return a;
}
~~~

~~~java
public static boolean compruebaEmail(String a){
    if(a.matches("^[^@]+@[^@]+\\.[a-zA-Z]{2,}$")){
        return true;
    } else return false;
}
~~~

Funciones con fechas y horas

~~~java
public static int diasMes(int mes){
    int devuelve;
    switch (mes)
    {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            devuelve = 31;
            break;
        case 2:
            devuelve = 28;
            break;
        case 4: case 6: case 9: case 11:
            devuelve = 30;
            break;
        default:
            devuelve = 0;
            break;
    }
    return devuelve;
}

public static int diasMes2(int mes, int anno){
    if (bisiesto(anno))
    {
        return 29;
    }
    else
    {
        return diasMes(mes);
    }
}

public static boolean bisiesto(int anno){
    // Año bisiesto es el divisible entre 4,
    // salvo que sea año secular -último de cada siglo,
    // terminado en «00»-, en cuyo caso también
    // ha de ser divisible entre 400.
    boolean devuelve = false;
    if(anno % 4 == 0)
    {
        // año secular
        if(anno % 100 == 0)
        {
            // divisible entre 400
            if(anno % 400 == 0)
            {
                devuelve = true;
            }
        }
        else
        {
            devuelve = true;
        }
    }
    return devuelve;
}

public static int diasTranscurridos(int dia, int mes, int anno){
    // desde el 01/01 del año actual
    int dias = 0, i;
    for(i = 1; i < mes; i++)
    {
        dias = dias + diasMes2(i, anno);
    }
    dias = dias + dia;
    return dias;
}

public static int diasTranscurridos1980(int dia, int mes, int anno)
{
    // desde el 01/01 del año 1980
    int dias = 0, i, j;
    for (j = 1980; j < anno; j++)
    {
        if(bisiesto(j))
        {
            dias = dias + 366;
        }
        else
        {
            dias = dias + 365;
        }
    }
    // ultimo año
    dias = dias + diasTranscurridos(dia, mes, anno);
    return dias;
}

public static int diasEntreFechas(int d1, int m1, int a1, int d2, int m2, int a2)
{
    int diasTotal1, diasTotal2, diferencia;
    diasTotal1 = diasTranscurridos1980(d1, m1, a1);
    diasTotal2 = diasTranscurridos1980(d2, m2, a2);
    diferencia = diasTotal2 - diasTotal1;
    return diferencia;
}

public static int diaSemanaFecha(int d, int m, int a)
{
    int def = diasTranscurridos1980(d,m,a);
    return (def % 7) + 1;
}

public static int horaASegundos(int h, int m, int s)
{
    return h * 3600 + m * 60 + s;
}

public static String escribeHoraBonita(int h, int m, int s)
{
    // valores permitidos
    // esta función admite cualquier valor en minutos y segundos
        
    if (s > 59){
        // el exceso se lo añadimos a los minutos
        m = m + (s / 60);
        s = (s % 60);
    }
    if (m > 59){
        // el exceso se lo añadimos a las horas
        h = h + (m / 60);
        m = (m % 60);
    }
    String hora = "";
    if (h < 10)
    {
        hora = "0";
    }
    hora = hora + h + ":";
    if (m < 10)
    {
        hora = hora + "0";
    }
    hora = hora + m + ":";
    if (s < 10)
    {
        hora = hora + "0";
    }
    hora = hora + s;
    return hora;
}

public static String escribeSegundosBonito(int s)
{
    return escribeHoraBonita(0,0, s);
}

public static int segundosTranscurridos(int h1, int m1, int s1, int h2, int m2, int s2)
{
    return (h2 - h1) * 3600 + (m2 - m1) * 60 + (s2 - s1);
}

public static int segundosTranscurridos1980(int d, int m, int a, int h, int M, int s)
{
    int x = diasTranscurridos1980(d, m, a);
    x = x * 24 * 3600 - 86400;  // restamos los segundos existentes en las últimas 24 horas
    x = x + segundosTranscurridos(0, 0, 0, h, M, s);
    return x;
}
~~~
