# NodeJs-MongoDB

## Architecture du projet

Pour le projet nous nous sommes inspirés du pattern MVC.

```
|_logs         --> Fichiers log
|_src
	|_ config/
		|-- db.ts    	--> Connexion à la BDD MongoDB
	|_ node_modules/
	|_ test/       		--> Fichiers de test
	|_ src/
		|_ /controllers     --> Controllers
		|_ /middleware  	--> Middleware pour l'authentification
		|_ /models     		--> Modeles de données
		|_ /routes     		--> Déclaration des routes
		|_ /services 		--> Services qui intérragissent avec la BDD via mongoose
		|-- index.ts		--> Point d'entrée de l'application
        |-- logger.ts 		--> Création du logger winston
```

Pour chaque collection il y un contrôleur, un service et un modèle.

## Modèle de données

```
export interface IAdress {
    _id: String;
    number: Number;
    street: String;
    city: String;
    zipcode: Number;
}

export interface IEvent {
    _id: String;
    name: String;
    description: String;
    adress: IAdress;
    capacity: Number;
    date: Date;
    users: IUser[];
}

export interface IUser {
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    birthday: Date,
    isAdmin: Boolean,
}
```

## Lancer le projet

Tout d'abord cloner le projet :

```shell
git clone https://github.com/Yaamto/nodejs.git
```

Se positionner dans le projet :

```
cd 'nodejs'
```

Installer les dépendances :

```
npm install
```

Configurer le fichier d'environnement :

```
# .env

TOKEN_SECRET=
PORT=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

Lancer le projet :

```
npm run dev
```

Tester les requêtes via la collection Postman créée : voir fichier node-js.postman_collection.json

## Fonctionnalités

-   API RESTFUL
-   Architecture inspirée du pattern MVC
-   Contrôle des données issues de formulaires avec express et les schémas de validation Joi
-   Gestion des erreurs avec un système de log avec le module winston de nodejs
-   Utilisation de Typescript
-   Utilisation syntaxe ESM
-   Utilisation du router Express pour la gestion des routes
-   Système d'authentification avec JWT et protection des routes avec un middleware
-   Connexion MongoDB et utilisation de mongoose pour interagir
-   CRUD :
    -   Adress (GET / POST / PUT / DELETE)
    -   Event (GET / POST / PUT / DELETE) (En sachant qu'une adresse est liée à un event)
