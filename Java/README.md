# Apuntes de Programación en JAVA

Resumen para tener siempre a mano:

[Tipos de datos](https://davidbermudez.github.io/Java/files/types.html)

## Tipos de Datos

- Homogéneas / Heterogéneas

Según permita guardar datos del mismo tipo o de distintos tipos

- Estáticas / Dinámicas

Según el número de elementos sea fijo o variable

- Lineales / No lineales

Según guarden una ristra de datos, o en cambio pueden ser guardadas en otro tipo de estructuras. En este curso solo veremos las lineales

### Integer

Tipo de datos  **homogéneos**, **estáticos** y **lineáles**

Representan números enteros con signo, con valores permitidos desde -2147483648 hasta el 2147483647

Algunas funciones útiles

~~~java
public static boolean primo(int a)
{
    int i;
    boolean devuelve;
    devuelve = true;
    for(i = a - 1; i > 1; i--)
    {
        if(a % i == 0){
            devuelve = false;
        }
    }
    return devuelve;
}
~~~

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

### Arrays

Son tipos de datos **Homogéneos**, **estáticos** y **lineales**.

Funciones de arrays
~~~java
// Ordenar un array (QuickSort)
Arrays.sort(array);
// Copiar un array
int[] array1 = {1, 2, 3, 4, 5, 6, 7, 8};
int[] array2 = Arrays.copyOf(array1, array1.length);
// Comparar dos arrays
Arrays.compare(array1, array2);
// Copiar un trozo del array
array2 = Arrays.copyOfRange(array1, 5, 10);
~~~

Funciones de utilidad **ARRAYS**


~~~java
public static void rellenaAleatorioMaxMinInt(int[] a, int min, int max) {
    // Completa un array con valores enteros aleatorios dado un máximo y mínimo.
	Random r = new Random();
    for (int i = 0; i < a.length; i++) {
        a[i] = r.nextInt(max - min + 1) + min;
	}
}
~~~


~~~java
public static int[] borraDeArray(int[] a, int pos) {
    // Devuelve un array igual al enviado quitando el elemento indicado por 'pos'
	int[] b;
    b = new int[a.length - 1];
	for (int i = 0; i < a.length - 1; i++) {
    	if (i < pos) {
        	b[i] = a[i];
		} else {
        	b[i] = a[i + 1];
		}
	}
	return b;
}
~~~


~~~java
public static boolean contiene(int[] a, int b) {
    // Función que comprueba si un elemento está en el array (sin convertir en 'lista')
    for (int i = 0; i < a.length; i++) {
        if (a[i] == b) {
            devuelve = true;
			i = a.length;
		}
	}
    return false;
}
~~~


~~~java
public static int[] elimina1ElementoArray(int[] a, int b) {
    // Utilizando las dos funciones anteriores, devuelve un array al que le hemos eliminado 
    // el primer elemento 'b' que encuentra, en el caso de que exista.
    int[] c;
	if (!contiene(a, b))
    {
        c = new int[a.length];
		c = a;
	}
    else
	{
    	c = new int[a.length - 1];
        for (int i = 0; i < a.length; i++)
        {
			if (a[i] == b)
            {
                c = borraDeArray(a, i);
				return c;
			}
		}
	}
    return c;
}
~~~


~~~java
public static int[] eliminaElementosArray(int[] a, int b){
    // Devuelve un array tras eliminar todos los elementos 'b' que haya en el array pasado
	int[] d;
    d = a;
    for (int i = 0; i < a.length; i++) {
        if (b == a[i]) {
            d = elimina1ElementoArray(d, b);
		}
	}
    return d;
}
~~~

~~~java
public static int maxArray(int[] a) {
    // Devuelve el elemento mayor de un array
	int max = a[0];
    for (int i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
		}
	}
    return max;
}
~~~


~~~java
public static int minArray(int[] a) {
    // Devuelve el elemento menor de un array
    int min = a[0];
	for (int i = 1; i < a.length; i++) {
    	if (a[i] < min) {
        	min = a[i];
		}
	}
    return min;
}
~~~


~~~java
private static void imprimeArray(int[] a)
{
    // Presenta por pantalla un array
    System.out.print("[");
	for (int i = 0; i < a.length - 1; i++) {
    	System.out.print(a[i] + ", ");
	}
    System.out.println(a[a.length - 1] + "]");
}
~~~


### ArraysList :: Listas

Tipos de datos **Homogéneos**, **dinámicos**, **lineales**

> List es una implementacion de la clase ArrayList

Características de los ArrayList

- Un ArrayList tiene un tamaño dinámico, mientras que el de un Array es definido en su creación.
- Un ArrayList no puede contener datos primitivos, sólo Objetos.
- El ArrayList permite comprobar que los datos que se añaden a la colección son del tipo correcto en tiempo de compilación.
- El Array puede ser de varias dimensiones, el ArrayList es unidimensional (aunque pueda ser un ArrayList de ArrayLists).

~~~java
// Tipos de listas
List<Integer> li;
List<Double> ld;
List<Character> lc;
List<Boolean> lb;
List<String> ls;

// Creamos la lista
li = new ArrayList<>(); // más rápida para recorrer la lista (con un for)
li = new LinkedList<>(); // más rápida para añadir o insertar elementos
List<Integer> l2 = new LinkedList<>(Arrays.asList(1, 2, 3, 4));

// Añadir elementos a una lista (al final)
li.add(115);
// Añadir elemento en la posición pos
li.add(pos, 115)
// Modificar un elemento (en la posición pos)
li.set(pos, 116)
// Acceder a un elemento
li.get(pos)
// Acceder a su posicion
li.indexOf(elemento)
// Tamaño de la lista
li.size();
// Borrar por posición
li.remove(pos)
// Borrar por elemento
Integer ele = 5;
li.remove(ele);
// CONTAINS
li.contains(); // igual que el de cadenas
// INDEXOF
li.indexOf(5); // igual que el de cadenas
// SUBLIST
li.subList(3, 6); // como SubString
// Añade la lista l3 a la lista l2
l2.addAll(l3);
// Añade el array arr a la lista l2
l2.addAll(Array.asList(arr));
// Convertir una lista en un array
Integer[] ai2 = (Integer[])li.toArray();
// CLEAR
li.clear();
// RESTO DE FUNCIONES CHULAS ESTÁN EN COLLECTIONS
System.out.println("min = " + Collections.min(l2));
System.out.println("max = " + Collections.max(l2));
// poner la lista al revés
Collections.reverse(l2);
// ordenar la lista
Collections.sort(l2);
// desordenar la lista
Collections.shuffle(l2);

~~~

~~~java
private static List<String> ordenaLista(List<String> lista)
{
    Collections.sort(lista);
    return lista;
}
~~~

### Arrays Asociativos :: Maps

Los Maps es una estructura de datos que nos permiten almacenarlos como un par de valores asociados clave=>valor. También son conocidos como Diccionarios.

~~~java
// declaración del Map
Map<Integer, Integer> nameMap = new HashMap<Integer, Integer>();

// Principales funciones
// Añadir un elemento
nameMap.put(key, value);
// Devuelve el valor de la clave 'key'. Null si la 'key' no existe
nameMap.get(key);
// Devuelve el numero de elementos del Map
nameMap.size();
// Devuelve true si no hay elementos en el Map y false si si los hay
nameMap.isEmpty();
// Elimina todos los componentes del Map
nameMap.clear();
// Elimina el elemento con la clave 'key'
nameMap.remove(key);
// True si en nameMap hay una clave con el nombre 'key'
nameMap.containsKey(key);
// True si en nameMap hay un valor que coincide con 'value'
nameMap.containsValue(value);
// Devuelve un array con todos los valores de nameMap
nameMap.values();
~~~


~~~java
public static void leerCadena(String cadena)
{
    // Esta función recibe una cadena (String) y crea un array asociativo
    // con elementos formado por palabras y asociado al número de veces que 
    // esa palabra se encuentra en el texto

    Map<String, Integer> palabras = new HashMap<>();

	String[] arrayTexto = cadena.split(" ");
	for (int i = 0; i < arrayTexto.length; i++) {
    	if(cadena.contains(arrayTexto[i])){
        	if(palabras.containsKey(arrayTexto[i]))
            {
                palabras.put(arrayTexto[i], palabras.get(arrayTexto[i]) + 1);
			}
            else
			{
            	palabras.put(arrayTexto[i], 1);
			}
		}
	}

    for (Map.Entry<String, Integer> entry : palabras.entrySet()) {
        System.out.println(entry.getKey() + " -> " + entry.getValue());
	}
}
~~~



### Arrays multidimensionales

Homogéneas, estáticas, no lineales

~~~java
public static void escribeArrayBi(int[][] array)
{
    // Presenta por pantalla un array bidimensional de manera tabulada
	int i, j;
    int numFilas = array.length;
	int numCols = array[0].length;
    for (i = 0; i < numFilas; i++)
	{
    	for (j = 0; j < numCols; j++)
        {
            if (i == 0 && j == 0) // first row
			{
            	System.out.print("╔");
			}
            else if (i == numFilas - 1 && j == 0) // last row
			{
            	System.out.print("╚");
			}
            else if (j == 0)
			{
            	System.out.print("║");
			}
            // asumimos un máximo de 3 espacios para cada número
			if(array[i][j]<100 && array[i][j]> -100) System.out.print(" ");
            if(array[i][j]<10 && array[i][j]> -10) System.out.print(" ");
			if(array[i][j]>=0) System.out.print(" ");
            System.out.print(array[i][j]);
			System.out.print(" ");
            if (i == 0 && j == numCols - 1) // ultima fila
			{
            	System.out.print("╗");
			}
            else if (i == numFilas - 1 && j == numCols - 1) // ultima fila
			{
            	System.out.print("╝");
			}
            else if (j == numCols - 1)
			{
            	System.out.print("║");
			}
		}
		System.out.println();
	}
}
~~~

### Clases, Structs (En Java no existen)

Tipos de datos **Heterogéneas**, **estáticas**, **lineales**

### Árboles, grafos

Tipos de datos **Homogéneos**, **Dinámicos**, **no lineales**

~~~java
// Pilas y Colas
Stack<Integer> pila = new Stack<>();
pila.push(10);
pila.push(11);
pila.push(12);
System.out.println(pila.pop());

Queue<Integer> cola = new LinkedList<>();
~~~

## Archivos

En la práctica, existen dos tipos de archivo:

- Archivos de Texto.
- Todos los demás.

En todos los casos debemos importar la librería java.io.*

~~~java
import java.io.*;
~~~

### Archivos de Texto

Aquellos que pueden abrirse y **leerse** con normalidad por cualquier editor de texto.

Las operaciones habituales con este tipo de archivos son:

- Abrir
- Leer
- Escribir
- Cerrar

Vemos todas ellas en el siguiente bloque de código:

**Leer Fichero de Texto**

~~~java
private static void leeFicheroTexto(String filename)
    {
        String texto;
        try
        {
            FileReader fr = new FileReader(filename);
            BufferedReader br = new BufferedReader(fr);

            texto = br.readLine();
            while(texto != null)
            {
                System.out.println(texto);
                texto = br.readLine();
            }
            System.out.println();

            br.close();
            fr.close();
        }
        catch (IOException e)
        {
            System.out.println(e.getMessage());
        }
    }
~~~

**Escribir Fichero de Texto**
    
~~~java

    private static void escribeFicheroTexto(String filename)
    {
        Scanner sc = new Scanner(System.in);
        String a;
        try {
            FileWriter fw = new FileWriter(filename);
            BufferedWriter bw = new BufferedWriter(fw);

            System.out.print("Añade linea: ");
            a = sc.nextLine();
            while(!a.equals(""))
            {
                bw.write(a + System.lineSeparator());
                System.out.print("Añade linea: ");
                a = sc.nextLine();
            }

            bw.close();
            fw.close();
        }
        catch (IOException e)
        {
            //e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
~~~

### Archivos binarios

Su contenido lo forman *unos y ceros* y sólo puede abrirse por la aplicación que conoce su estructura de datos.

**Leer Fichero Binario**

Si no conocemos la estructura del archivo podemos leer uno a uno todos sus bytes con la siguiente función:

~~~java
private static void leeFicheroBinario(String filename)
    {
        String texto;
        try
        {
            FileInputStream fis = new FileInputStream(archivo);
            DataInputStream dis = new DataInputStream(fis);

            if(dis.available()>0)
            {
                byte dato = dis.readByte();
                int datoInt = unsignedToBytes(dato);
                String convierteAString = Integer.toHexString(datoInt);
                // Si lo queremos menter en una lista de bytes previamente definida:
                // lista.add(dis.readByte());
            }

            dis.close();
            fis.close();
        }
        catch (IOException e)
        {
            System.out.println(e.getMessage());
        }
    }

    private static int unsignedToBytes(byte b) {
        return b & 0xFF;
    }
~~~

**Escribir Fichero Binario**

El siguiente código escribe en un fichero los números enteros del 1 al 100

~~~java
private static void escribeFicheroBinario(String filename)
    {
        try {
            FileOutputStream fos = new FileOutputStream(filename);
            DataOutputStream dos = new DataOutputStream(fos);

            for (int i = 1; i <= 100 ; i++) {
                dos.writeInt(i);
            }
            dos.close();
            fos.close();
        }
        catch (IOException e)
        {
            System.out.println(e.getMessage());
        }
    }
~~~

### Archivos de internet

Para leer un archivo alojado en internet:

~~~java
public static void main(String[] args) throws MalformedURLException {
    URL url = new URL("https://davidbermudez.github.io");
    try {
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
        System.out.println(in.toString());
        String inputLine, inputText = "";
        while ((inputLine = in.readLine()) != null) {
            inputText = inputText + inputLine;
            System.out.println(inputLine);
        }
        // inputText tiene el contenido completo de la página
    } catch(Throwable t){}
}
~~~
