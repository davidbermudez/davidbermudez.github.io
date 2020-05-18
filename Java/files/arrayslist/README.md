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