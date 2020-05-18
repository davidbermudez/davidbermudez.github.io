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