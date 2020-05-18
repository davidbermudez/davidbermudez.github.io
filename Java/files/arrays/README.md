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