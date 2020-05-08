# Apuntes de Programación en JAVA

Resumen para tener siempre a mano:

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

~~~

~~~
