#HTML5 avancé

<!-- .slide: class="page-title" -->



## Javascript – notions avancés


![](ressources/images/02_javascript-100002010000020000000200EB9C62D4.png)

Notes :




## Closure
  
Principe

- Pour rappel, une variable a une certaine portée de visibilité, appelée scope

- Ce concept permet de profiter du mécanisme des closures 
- Le principe est de limiter l'accès à un certain contenu (variables, fonctions)
- Pour cela, une fonction peut en encapsuler une autre 

```
function myFunc(){
var x=0;
}
console.log(x); //undefined
```

Notes :




## Closure
  
Exemple

```
function monObjet(value) {
var x = value;
return {
getX : function() {
return x;
}
}
}

var obj = monObjet(3);
console.log(obj.x); // undefined
console.log(obj.getX()); // 3
```
visibilité limitée à la fonction monObjetla closure permet d'y accéder

- Les closures permettent l'encapsulation

Notes :




## Héritage / Prototype

- Javascript est un langage par prototype, permettant une approche orientée objet
- Les prototypes sont en quelque sorte les cartes d'identités des objets
- Il n'existe pas de 'classes' mais les objets héritent du Prototype de l'objet étendu
- Ce prototype est partagé

```
function Personne() {};
var olivier = new Personne();
olivier.sayHey(); // error
Personne.prototype.sayHey = function() { 
console.log('hey !') ;
}
olivier.sayHey() ; // hey !
```

Notes :




## Héritage / Prototype

- Redéfinir une fonction du même nom permet de surcharger celle du parent
- Mais il reste possible de faire appel à la fonction héritée

```
var Benoit = new Personne();
Benoit.sayHey(); // hey !
Benoit.sayHey = function(){
console.log('olá !') ;
}
Benoit.sayHey(); // olá
Olivier.sayHey(); // hey !
```

```
Benoit.constructor.prototype.sayHey(); // hey !
```

Notes :




## Héritage / Prototype

- En revanche, il est possible d'effectuer des modifications globales
- L'héritage de prototype permet donc d'enrichir des types

```
Benoit.constructor.prototype.sayHey = function(){
console.log('Pourquoi ?') ;
}

Olivier.sayHey();
=> Pourquoi ?
```

```
Number.prototype.sqrt = function(){ (...) };
var x=4 ;
x.sqrt();
=> 2

```

Notes :




## Object Literals

- Cette notation permet de déclarer des objets d'une manière élégante
- La structure d'un fichier JSON est calquée sur celle-ci

```
var voiture = {
'marque' : 'mercedes',
'annee' : '1989'
}

voiture.marque;//mercedes
voiture.annee; //1989
```

Notes :






![](ressources/images/02_javascript-1000020100000100000001003A063607.png)

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->