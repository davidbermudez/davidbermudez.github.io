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

