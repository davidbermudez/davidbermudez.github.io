# Apuntes de Programación en JAVA

Resumen para tener siempre a mano:

## Tipos de Datos

### String

En Java se utilizan dos tipos de datos para manejar cadenas de texto: *String* y *Char*

~~~
String s1 = "Hola";
String s2 = "Adios";

s1.equals(s2); // Comparar cadenas 
s1.compareTo(s2); // Compara dos cadenas alfabéticamente, e indica cual es mayor o menor: <0 la primera es mas pequeña, 0 es igual, >0 la primera es mayor 
s1.contains(s2); // Nos dice si la cadena contiene otra cadena 
s1.indexOf(char); // Nos dice la posición del carácter char 
s1.indexOf(char, pos); // Nos dice la posición de un carácter a partir de la posición pos 
s1.lastIndexOf(char); // idem pero desde el final 
s1.isEmpty(); // Para ver si está vacía. Similar a s1.equals("") 
s1.startWith(s2); // Para ver si una cadena empieza con algo 
s1.endWith(s2); // Para ver si una cadena acaba con algo 
s1.toUpperCase(); // Convertir a mayúsculas 
s1.toLowerCase(); // Convertir a minúsculas 
s1.replace(“   “,” “); // Cambiar doble espacio por espacio simple en la cadena s1 
s1.trim(); // Elimina espacios antes y después 
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

Character.isLetter(c1); // Comprobar que sea una letra 
Character.isDigit(c1); // Comprobar si es un número 
Character.isUpperCase(c1); // Comprobar si es mayúsculas 
Character.isLowerCase(c1); // Comprobar si es minúsculas 
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
