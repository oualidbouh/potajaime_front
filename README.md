## Lancement de l'application

Pour lancer l'application mobile, il suffit de se placer dans la racine du projet et lancer la commande 
```
ionic serve -l
```
Un projet ionic est composé de plusieurs composants : 
Répertoire **app** : 
Ce répertoire contient les dépendances du projets dans le fichier **app.mocule.ts**, Un script pour pouvoir lancer l'application (Comme une méthode main en langage **C**).

Répertoir **models** : 
Ce répertoir contient les différentes entités (sous forme de classe) utilisées dans la logiques métier coté mobile.

Répertoir **pages** : 
Ce répertoir contient des sous-répertoirs qui contiennent les différentes pages **html** avec leurs **styles scss** et leur **controleurs typescript**.

Pour générer un sous-répertoir il suffit de lancer la commande suivante : 
```
ionic g page nom-de-la-page
```
Une fois créée, il faut impérativement l'ajouter dans le fichier **app.module.ts** dans la section des import comme suit :
````
import {MaPage} from '../pages/mapage/mapage';
````
Ensuite dans les sections **declarations** et **entryComponents**.

Répertoir **providers** : 

Ce répertoir contient les différents providers utilisés dans l'application, ces derniers dans le cas de l'applicaiton potajaime, ils permettent de lancer des appelles HTTP avec le **serveur Spring-Boot de potajaime**.
Pour générer un provider, c'est très symple : 
````
ionic g provider mon-provider
````
Ensuite il faut ajouter le provider créé dans le fichier **app.module.ts** dans la section **providers**.

Voilà un [tutoriel](https://www.sitepoint.com/angular-2-components-providers-classes-factories-values/) sympa qui explique comment en créer.
Il est de plus conseiller d'encapsuler la logique métier côté mobile dans les providers qui seront injectés dans les controleurs Angular.

Pour changer l'adresse IP du serveur a requéter par l'application mobile, il faut éditer le fichier **src/conf/conf.ts** et mettre à jour la variable *SERVER_URL*.
