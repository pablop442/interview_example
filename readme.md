### Prueba técnica Cypress y API testing

Para ejecutar los test del Ejercicio 2 puedes usar los siguientes comandos:

- `npm run open` para abrir Cypress test runner.
- `npm run execute` para ejecutar los test desde la terminal.

Para ejecutar los test del Ejercicio 3 puedes usar los siguientes comandos:

- `npm run user` para ejecutar el user request.
- `npm run pet` para ejecutar el pet request.

Autor: Pablo Peña Marín

1.          Ejercicio 1: Prueba exploratoria y reporte de bugs
    La primera tarea es encontrar un bug, nos da igual en que web de internet lo encuentres, lo importante es poder encontrarlo y reportarlo. No te preocupes porque internet está lleno de ellos.

Haz el reporte al nivel de detalle que consideres necesario para que el equipo de desarrollo pueda encontrarlo, debuggearlo y solucionarlo. Proporciona evidencias del fallo y resultado esperado. Clasifícalo en cuanto a prioridad, impacto y probabilidad de ocurrencia.

2.          Ejercicio 2: Automatización de una web

    Debes realizar una automatización consistente en:

1.           Buscar en Google la palabra “automatización”

1.           Buscar el link de la Wikipedia resultante

1.           Comprobar en qué año se hizo el primer proceso automático

1.           Realizar un screenshot de la página de la Wikipedia

1.          Ejercicio 3: Tratamiento de datos en APIs

    En este enlace encontrarás la documentación de la API de una tienda de mascotas: https://petstore.swagger.io/

1.           Crea tu usuario mediante petición HTTP y posteriormente recupera sus datos llamando al servicio correspondiente.

1.           Recoge mediante petición HTTP, el JSON que retorna el endpoint /pet/findByStatus y lista mediante una función los nombres de las mascotas que se hayan vendido.

-          El formato de salida deberá estar formado por la tupla {id, name}.

-          Puedes utilizar la estructura de datos que prefieras.

3.           Crea una clase cuyo constructor requiera de la estructura de datos anterior y realiza un método que pueda recorrerla para poder identificar cuantas mascotas se llaman igual.

-          Ejemplo de salida: {“William”: 11, “ Floyd”: 2} Como output, te pediremos el código (puedes separarlo en archivos como quieras) y los resultados de salida de los puntos anteriores.

-          Recuerda que puedes utilizar el lenguaje que prefieras y cualquier mejora adicional será bien considerada
