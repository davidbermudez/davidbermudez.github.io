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