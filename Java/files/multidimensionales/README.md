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