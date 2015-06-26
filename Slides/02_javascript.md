# Javascript

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction](#/1)
- **[JavaScript](#/2)**
- [AJAX](#/3)
- [Web Messaging](#/4)
- [Server Sent Events](#/5)
- [WebSocket](#/6)
- [Web RTC](#/7)
- [Web Workers](#/8)
- [Conclusion](#/9)

Notes :



## Closure (Principe)

- Pour rappel, une variable a une certaine portée de visibilité, appelée scope.
- Ce concept permet de profiter du mécanisme des closures.
- Le principe est de limiter l'accès à un certain contenu (variables, fonctions).
- Pour cela, une fonction peut en encapsuler une autre.

```javascript
function myFunc() {
    var x = 0;
}
console.log(x); //undefined
```

Notes :



## Closure (Exemple)

```javascript
function monObjet(value) {
    var x = value;
    return {
        getX : function() {
            return x;
        }
    };
}
var obj = monObjet(3);
console.log(obj.x); // undefined
console.log(obj.getX()); // 3
```

Visibilité limitée à la fonction monObjet. La closure permet d'y accéder

- Les closures permettent l'encapsulation

Notes :



## Héritage / Prototype

- Javascript est un langage par prototype, permettant une approche orientée objet
- Les prototypes sont en quelque sorte les cartes d'identités des objets
- Il n'existe pas de 'classes' mais les objets héritent du Prototype de l'objet étendu
- Ce prototype est partagé

```javascript
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

```javascript
var Benoit = new Personne();
Benoit.sayHey(); // hey !
Benoit.sayHey = function(){
    console.log('olá !') ;
}
Benoit.sayHey(); // olá
Olivier.sayHey(); // hey !
```

```javascript
Benoit.constructor.prototype.sayHey(); // hey !
```

Notes :



## Héritage / Prototype

- En revanche, il est possible d'effectuer des modifications globales
- L'héritage de prototype permet donc d'enrichir des types

```javascript
Benoit.constructor.prototype.sayHey = function(){
    console.log('Pourquoi ?') ;
}
Olivier.sayHey(); // => Pourquoi ?
```

```javascript
Number.prototype.sqrt = function(){ (...) };
var x=4 ;
x.sqrt(); // => 2
```

Notes :



## Object Literals

- Cette notation permet de déclarer des objets d'une manière élégante
- La structure d'un fichier JSON est calquée sur celle-ci

```javascript
var voiture = {
    marque : 'mercedes',
    annee : 1989
}
voiture.marque; //mercedes
voiture.annee; //1989
```

Notes :



<!-- .slide: class="page-questions" -->

<!-- .slide: class="page-tp1" -->
