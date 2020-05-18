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
