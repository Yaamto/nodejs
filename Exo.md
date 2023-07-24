## Exercice

Créez une base de données sample nommée "sample_db" et une collection appelée "employees".
Insérez les documents suivants dans la collection "employees":

{
   name: "John Doe",
   age: 35,
   job: "Manager",
   salary: 80000
}

{
   name: "Jane Doe",
   age: 32,
   job: "Developer",
   salary: 75000
}

{
   name: "Jim Smith",
   age: 40,
   job: "Manager",
   salary: 85000
}

Écrivez une requête MongoDB pour trouver tous les documents dans la collection "employees".

-db.employees.find()

Écrivez une requête pour trouver tous les documents où l'âge est supérieur à 33.

-db.employees.find({"age": {$gt: 33}})

Écrivez une requête pour trier les documents dans la collection "employees" par salaire décroissant.

-db.employees.find().sort({"salary": -1})

Écrivez une requête pour sélectionner uniquement le nom et le job de chaque document.

-db.employees.find({}, {"name": 1, "job": 1, "_id": 0})

Écrivez une requête pour compter le nombre d'employés par poste.
db.employees.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 }
    }
  }
])

Écrivez une requête pour mettre à jour le salaire de tous les développeurs à 80000.

-db.employee.updateMany(  { job: "Developer" },  { $set: { "salary": 80000 } } )





## COURS

--listez les documents pour lesquels l’âge est soit égal à 76 ans

soit non present (null)

db.personnes.find({   $or: [{     "age": {       $exists: 0     }  }, {     "age": 76 }]   }, {  "_id": 0,  "prenom": 1,  "nom": 1  }) 

operateur:

​	$gt greater than, gte -> greater than or equal

​	$in et $nin -> not in

​	$exists permet de récupérer uniquement les documents dont le champs est renseigné ex: db.personnes.find({"age": {$exist: true}}, {"prenom": true})

L'opérateur $where est très gourmand en ressource

projection 2ème paramètre dans la requête ex: db.personnes.find({"age": {$eq: 76}}, {"prenom": true})

projection permet de demander que les champs apparaissent
