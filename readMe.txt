Este proyecto hace uso del MEAN Stack para correr el sitio web desarrollado

Existen dos repositorios en Github que se necesitan para correr el sitio Intersec
    GitHub front end: https://github.com/isaacalderonCETYS/InterService/tree/main 
    GitHub back end: https://github.com/M053b/apiChefsito

Es necesario instalar las siguientes tecnologías utilizadas para que funcione correctamente

Componentes del servidor:
    Base de datos, MongoDB, https://www.mongodb.com/
    Desarollo de API, Express, https://expressjs.com/
    Entorno de desarollo, NodeJS, https://nodejs.org/en/
Componentes para el cliente:
    FontEnd, Angular, https://angular.io/

Dentro del package.json se encuentran las configuraciones del nombre, versiones, repositorio y dependencias

Es necesario hacer la inicialización del componente de NodeJS con el comando: npm init
También se tienen que instalar las dependencias que nos ayudarán a correr el proyecto como:
    Express, npm install express -save
    Nodemon, npm install -g nodemon
    Mongoose, npm install mongoose
    Angular, npm install -g @angular/cli
        De angular, se deben instalar las siguientes librerias:
            mapbox-gl
            fortawesome (angular-fontawesome, fontawesome-svg-core, free-brands-svg-icons, free-regular-svg-icons, free-solid-svg-icons)
            mapbox-gl
            materialize-css
            rxjs
            tslib
            zone.js

Para correr el entorno NodeJS utilizamos el comando: npm run dev
Para correr el enotrno de Angular utilizamos el comando: ng serve

También tenemos que configurar la base de datos MongoDB para que se comunique con la base de datos
Se necesita descarga MongoDB de su página y configurar las variables de entorno en Windows settings agregando la ruta de mongo al PATH
(Quizá sea necesario reiniciar la IDE para que se actualicen los cambios)
    Podemos utilizar el comando "mongo version" para asegurarnos de que se instaló correctamente

Una vez descargados ambos repositorios y configuradas las tecnologías, abrimos dos terminales de consola CMD para correr ambos servicios con los comandos:
    NodeJS, npm run dev
    MongoDB, mongod
Hay que asegurar que ambas terminales sigan corriendo y activas para que se comuniquen los servicios

Al tener ambos servicios corriendo hacemos la prueba con nuestro navegador de entrar a: http://localhost:3000/api/intersec para visualizar el API
Para visualizar la página es con http://localhost:4200