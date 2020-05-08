# Apuntes de Programación en JAVA

Resumen para tener siempre a mano:

## Tipos de Datos

### String

En Java se utilizan dos tipos de datos para manejar cadenas de texto: *String* y *Char*

~~~
String s1 = "Hola";
String s2 = "Adios";

s1.equals(s2); 		// Comparar cadenas 
s1.compareTo(s2);	// Compara dos cadenas alfabéticamente, e indica cual es mayor o menor: 
					// Devuelve: < 0 sí 's1' es mas pequeña, 0 sí 's1' y 's2' son iguales, > 0 sí la primera es mayor 
s1.contains(s2); 	// Nos dice si la cadena contiene otra cadena 
s1.indexOf(char); 	// Nos dice la posición dentro de 's1' del carácter char
s1.indexOf(char, pos);	// Nos dice la posición de un carácter a partir de la posición pos 
s1.lastIndexOf(char);	// Idem, pero desde el final 
s1.isEmpty(); 		// Para ver si está vacía. Similar a s1.equals("") 
s1.startWith(s2); 	// Para ver si una cadena empieza con algo 
s1.endWith(s2); 	// Para ver si una cadena acaba con algo 
s1.toUpperCase(); 	// Convertir a mayúsculas 
s1.toLowerCase(); 	// Convertir a minúsculas 
s1.replace("  ", " "); // Cambiar doble espacio por espacio simple en la cadena s1 
s1.trim(); 			// Elimina espacios antes y después 
char[] array = s1.toCharArray(); // Convierte un String en un Array
s1 = new String(array); // Convierte un Array en una cadena 
s1.substring(inicio, final) // recorta una cadena desde su inicio hasta final-1 
s1.substring(inicio); // recorta una cadena desde su inicio hasta el final 
String[] cadena = s1.split(“ “); // Devuelve un array conteniendo las distintas partes de una cadena divididas según el parámtero de búsqueda. Si s1 = “hola que tal”; => cadena[2].chartAt(0); => primera letra de la última palabra. ** Cuidado con el parametro de busqueda: pueden ser confundidas con expresiones regulares ** 
String s1 = String.join (“ “, cadena); // pega en una cadena un array de String, separándolas con –en este caso- con un espacio 
~~~

Funciones de Character

~~~
char c1 = 'A':

Character.isLetter(c1); 	// Comprobar que sea una letra 
Character.isDigit(c1); 		// Comprobar si es un número 
Character.isUpperCase(c1);	// Comprobar si es mayúsculas 
Character.isLowerCase(c1);	// Comprobar si es minúsculas 
~~~

### Arrays

Funciones de arrays
~~~
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

Rellena un array con valores enteros aleatorios dado un máximo y mínimo.
~~~
public static void rellenaAleatorioMaxMinInt(int[] a, int min, int max) {
	Random r = new Random();
    for (int i = 0; i < a.length; i++) {
        a[i] = r.nextInt(max - min + 1) + min;
	}
}
~~~


Devuelve un array igual al enviado quitando el elemento indicado por 'pos'
~~~
public static int[] borraDeArray(int[] a, int pos) {
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

Función que comprueba si un elemento está en el array (sin convertir en 'lista')
~~~
public static boolean contiene(int[] a, int b) {
    for (int i = 0; i < a.length; i++) {
        if (a[i] == b) {
            devuelve = true;
			i = a.length;
		}
	}
    return false;
}
~~~

Utilizando las dos funciones anteriores, devuelve un array al que le hemos eliminado **el** primer elemento 'b' que encuentra, en el caso de que exista.
~~~
public static int[] elimina1ElementoArray(int[] a, int b) {
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

Devuelve un array tras eliminar **todos** los elementos 'b' que haya en el array pasado
~~~
public static int[] eliminaElementosArray(int[] a, int b)
{
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

Devuelve el elemento mayor de un array
~~~
public static int maxArray(int[] a) {
	int max = a[0];
    for (int i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
		}
	}
    return max;
}
~~~

Devuelve el elemento menor de un array
~~~
public static int minArray(int[] a) {
    int min = a[0];
	for (int i = 1; i < a.length; i++) {
    	if (a[i] < min) {
        	min = a[i];
		}
	}
    return min;
}
~~~

Presenta por pantalla un array
~~~
private static void imprimeArray(int[] a)
{
    System.out.print("[");
	for (int i = 0; i < a.length - 1; i++) {
    	System.out.print(a[i] + ", ");
	}
    System.out.println(a[a.length - 1] + "]");
}
~~~

Presenta por pantalla un array bidimensional de manera tabulada
~~~
public static void escribeArrayBi(int[][] array)
{
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

### ArraysList :: Listas

> List es una implementacion de la clase ArrayList

Características de los ArrayList

- Un ArrayList tiene un tamaño dinámico, mientras que el de un Array es definido en su creación.
- Un ArrayList no puede contener datos primitivos, sólo Objetos.
- El ArrayList permite comprobar que los datos que se añaden a la colección son del tipo correcto en tiempo de compilación.
- El Array puede ser de varias dimensiones, el ArrayList es unidimensional (aunque pueda ser un ArrayList de ArrayLists).

### Arrays Asociativos :: Maps

Los Maps es una estructura de datos que nos permiten almacenarlos como un par de valores asociados clave=>valor. También son conocidos como Diccionarios.

~~~
// declaración del Map
Map<Integer, Integer> nameMap = new HashMap<Integer, Integer>();

// Principales funciones
nameMap.put(key, value); // Añadir un elemento
nameMap.get(key); 		// Devuelve el valor de la clave 'key'. Null si la 'key' no existe
nameMap.size(); 		// Devuelve el numero de elementos del Map
nameMap.isEmpty(); 		// Devuelve true si no hay elementos en el Map y false si si los hay
nameMap.clear(); 		// Elimina todos los componentes del Map
nameMap.remove(key);	// Elimina el elemento con la clave 'key'
nameMap.containsKey(key); 		// True si en nameMap hay una clave con el nombre 'key'
nameMap.containsValue(value); 	// True si en nameMap hay un valor que coincide con 'value'
nameMap.values(); 	// Devuelve un array con todos los valores de nameMap
~~~

Esta función recibe una cadena (String) y crea un array asociativo con elementos formado por palabras y asociado al número de veces que esa palabra se encuentra en el texto
~~~
public static void leerCadena(String cadena)
{
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
## Archivos

En la práctica, existen dos tipos de archivo:

- Archivos de Texto.
- Todos los demás.

En todos los casos debemos importar la librería java.io.*

~~~
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

~~~
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
    
~~~

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

~~~
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

~~~
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

~~~
public static void main(String[] args) throws MalformedURLException {

        URL url = new URL("http://www.lineadecodigo.com");
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
