# Indispensable avant la proggramation 
- Apprendre les concepts des algorithmes et de la programmation

Pourquoi fait-on des algorithmes ?

## Avant ça, demandons nous, l'informatique c'est quoi ?
- techniques de traitement de l'information, de façon automatique, par un système informatique
- élements d'un système informatique : 
    - applications: traitement de texte, navigateur web, jeux, etc.
    - langages de programmation: C, C++, Java, Python, etc.
    - systèmes d'exploitation: Windows, Linux, Mac OS, etc.
    - matériels informatiques: ordinateurs, tablettes, smartphones, etc.

## Les élements d'un ordinatuer sont :
- Unité centrale (le boîtier)
   - Processeur (CPU) : cerveau de l'ordinateur qui exécute les programmes et traite les données
   - Mémoire vive (RAM) : mémoire de travail de l'ordinateur
   - Disque dur : mémoire de stockage de l'ordinateur
   - Cartes spécialisées : carte graphique, carte son, etc.
   - Interfaces : ports USB, HDMI, VGA, etc.

- Périphériques d'entrée/sortie
    - Clavier, souris, écran, imprimante, etc.

## Qu'est-ce qu'un système d'exploitation ?
Ensemble de programmes qui permettent à l'utilisateur d'interagir avec l'ordinateur et de gérer les ressources matérielles et logicielles de l'ordinateur.

- Gestion des périphériques d'entrée/sortie
   Affichage à l'écran, impression, etc.
- Gestion des utilisateurs
   Création, suppression, droits d'accès, etc.
- Interface utilisateur
   Graphique (Windows, Mac OS, etc.) ou en ligne de commande (Linux, etc.)
- Contrôle des programmes
   Lancement, arrêt, etc.

## Qu'est-ce qu'un langage de programmation ?

Un langage de programmation est un langage formel conçu pour formuler des algorithmes et produire des programmes informatiques qui les appliquent.

## Qu'est-ce que le langage machine ?
Langage binaire (0 et 1) compréhensible par l'ordinateur.
Une combinaison de 0 et de 1 est appelée un bit.
Un ensemble de 8 bits est appelé un octet.
Le code ASCII est un système de codage de caractères en langage machine. Il donne une représentation numérique de chaque caractère. Par exemple, le caractère 'A' est représenté par 01000001.
Les opérations logiques et arithmétiques sont effectuées en langage machine à l'aide de circuits électroniques.

## L'assembleur 
Problème : le langage machine est difficile à comprendre et à utiliser.

Idée: trouver un langage compréhensible par l'homme et qui peut être traduit en langage machine.
Assembler est un langage de programmation de bas niveau qui permet de programmer en langage machine à l'aide de mnémoniques (ADD, SUB, JMP, etc.).

+ : facile à traduire en langage machine
- : difficile à comprendre et à utiliser
- : dépendant de l'architecture de l'ordinateur
- : pas assez efficace pour développer des applications complexes

>> Apparition des langages de programmation de haut niveau

## Les langages de programmation de haut niveau
Intérêts multiples pour le haut niveau :
- Facilité d'utilisation
- Indépendance de l'architecture de l'ordinateur
- Manipulation de données complexes

Nécessité d'un traducteur (compilateur ou interpréteur) pour traduire le code source en langage machine.

La différence entre un compilateur et un interpréteur est que le compilateur traduit le code source en langage machine en une seule fois, tandis que l'interpréteur traduit le code source en langage machine ligne par ligne.

## Compilateur 
Un compilateur est un programme qui traduit le code source en langage machine en une seule fois.

+ : le programme traduit est plus rapide
+ : le programme traduit est plus sécurisé
- : il faut recompiler le programme à chaque modification

## Interpréteur
Un interpréteur est un programme qui traduit le code source en langage machine ligne par ligne.

+ : pas besoin de recompiler le programme à chaque modification
- : le programme traduit est plus lent

## Un programme
- Un programme est une suite d'instructions qui permet de résoudre un problème donné.
- Cette méthode de résolution de problème est effectuée par une suite d'instructions appelée algorithme.
- Ces instructions sont écrites dans un langage de programmation.
- Un programme est un algorithme écrit dans un langage de programmation.
- La programmation est l'ensemble des activités qui permettent d'écrire un programme : analyse, conception, codage, test, etc.

## Langages de programmation
- Types de langages:
    - langages procéduraux: C, C++, Java, etc.
    - langages fonctionnels: Lisp, Haskell, etc.
    - langages logiques: Prolog, etc.
    - langages orientés objets: C++, Java, etc.

- Choix d'un langage de programmation:
    - type de problème à résoudre
    - type de langage
    - expérience du programmeur
    - disponibilité des outils

## Etapes de la réalisation d'un programme
- Enoncé du problème
- Cahier des charges
- Algorithmes
- Programme (code source)
- Programme (code exécutable)
- Version finale

>> La réalisation d'un programme est un processus itératif, qui passe par l'écriture d'algorithmes et de programmes.

## Qu'est-ce qu'un algorithme ?

- Le terme algorithme vient du nom du mathématicien arabe Al-Khwarizmi (780-850).

- Un algorithme est une suite finie et non ambiguë d'instructions permettant de résoudre un problème ou d'obtenir un résultat.
    - intérêt : séparer la résolution du problème de sa mise en oeuvre dans un langage de programmation
    - Qualités : exact (résout le problème), fini (se termine), non ambigu (pas d'interprétation possible), efficace (temps de calcul et mémoire)

- Une bonne pratique consiste à écrire l'algorithme en langage naturel, puis à le traduire dans un langage de programmation.

## Représentation d'un algorithme
- L'organigramme : 
    - représentation graphique d'un algorithme
    - permet de visualiser la structure de l'algorithme
    - représentation quasiment abandonnée aujourd'hui

- Le pseudo-code :
    - langage de programmation simplifié
    - permet de comprendre l'algorithme
    - permet de vérifier la correction de l'algorithme
    - permet de traduire l'algorithme dans un langage de programmation

# Notions de base en algorithmique

## Les variables
- Une variable est un espace mémoire dans lequel on peut stocker une valeur.

- Une variable est caractérisée par un nom (identificateur) et un type (entier, réel, caractère, chaine de caractère, ... ).

- Une variable est déclarée avant d'être utilisée.

### Choix des identificateurs

- Le choix des noms des variables est libre, mais il doit respecter les règles suivantes :
    - commencer par une lettre ou un underscore
    - ne contenir que des lettres, des chiffres ou des underscores
    - ne pas être un mot réservé du langage de programmation
    - la longueur du nom est limitée

- Conseil : pour la lisibilité du code, il est recommandé de choisir des noms de variables explicites.

### Types de variables

- Le type d'une variable définit la nature de la valeur qu'elle peut contenir. Les types de variables les plus courants sont :
    - entier : nombres entiers (positifs ou négatifs)
    - réel : nombres réels (positifs ou négatifs)
    - caractère : un seul caractère
    - chaine de caractères : une suite de caractères
    - booléen : vrai ou faux

### Déclaration des variables

- La déclaration d'une variable permet de réserver un espace mémoire pour stocker une valeur.

- En pseudo-code, la déclaration d'une variable se fait de la manière suivante :
    - variable nom_variable : type_variable 
    exemple : 
    ```bash
    variable x : entier
    variable y : réel
    variable z : caractère
    variable ch : chaine de caractères
    variable b : booléen
    ```

## Instructions d'affectation

- L'affectation consiste à stocker une valeur dans une variable.

- En pseudo-code, l'affectation se fait de la manière suivante :
    - nom_variable <- valeur
    exemple : 
    ```bash
    x <- 5
    y <- 3.14
    z <- 'a'
    ch <- "Bonjour"
    b <- vrai
    ```

Attention :
- beaucoup de langages de programmation utilisent le symbole = pour l'affectation, mais en pseudo-code, on utilise le symbole <-.

Ne pas confondre : 
- l'affectation n'est pas commutative : A=B n'est pas équivalent à B=A
- l'affectation est différente d'une équation mathématique 

### Exercice 1 :
Donner les valeurs des variables A, B et C après exécution des instructions suivantes :
```bash
Variables A, B, C : entiers
Début
    A <- 3
    B <- 7
    A <- B (devient 7)
    B <- A + 5 (devient 12)
    C <- A + B (devient 19)
    C <- B - A (devient 5)
Fin

Donc A=7, B=12, C=5
```
### Exercice 2 :
Donner les valeurs des variables A et B après exécution des instructions suivantes :
```bash
Variables A, B : entiers
Début
    A <- 1
    B <- 2
    A <- B (devient 2)
    B <- A 
Fin

Donc A=2, B=2
```

### Exercice 3 :
Ecrire un algorithme permettant d'echanger les valeurs de deux variables A et B.

```bash
Variables A, B : entiers
Début
    A <- 1
    B <- 2
    C <- A
    A <- B
    B <- C
Fin
```

### Expressions et opérateurs

- Une expression est une suite d'opérandes et d'opérateurs qui peut être évaluée en une valeur, une variable ou un booléen.
Par exemple, 2+3 est une expression qui peut être évaluée en 5.

- Les opérateurs dépendent du type de l'opération. Ils peuvent être: 
    - arithmétiques : +, -, *, /, div, mod, etc.
    - logiques : et, ou, non, etc.
    - relationnels : =, <>, <, >, <=, >=, etc.
    - concaténation : &, etc.

### Priorité des opérateurs

- Les opérateurs sont évalués dans un ordre précis appelé priorité des opérateurs.

- Pour les opérateurs arithmétiques, la priorité est la suivante :
    - les opérateurs * et / sont prioritaires sur les opérateurs + et -
    - les opérateurs * et / ont la même priorité
    - les opérateurs + et - ont la même priorité

- En cas de besoin, on peut utiliser des parenthèses pour modifier la priorité des opérateurs.

### Instructions d'entrée/sortie : lecture et écriture

- Les instructions de lecture et d'écriture permettent d'interagir avec l'utilisateur.

- La lecture permet de saisir une valeur à partir du clavier et de la stocker dans une variable.
En pseudo-code, la lecture se fait de la manière suivante :
    - lire nom_variable
    exemple : 
    ```bash
    lire x
    ```

Remarque : Le programme s'arrête lorsqu'il rencontre l'instruction lire. Il attend que l'utilisateur saisisse une valeur à partir du clavier. Lorsque l'utilisateur a terminé, il appuie sur la touche Entrée. La valeur saisie est alors stockée dans la variable. 

- L'écriture permet d'afficher une valeur à l'écran.
En pseudo-code, l'écriture se fait de la manière suivante :
    - ecrire nom_variable
    exemple : 
    ```bash
    ecrire x
    ```
    Conseil : pour améliorer la lisibilité du code, on peut afficher un message avant d'afficher la valeur de la variable.

- Ecrire un algorithme qui demande un nombre entier à l'utilisateur et qui affiche ce nombre multiplié par 2.

```bash
Variables A, B : entier
Début
    ecrire "Saisir un nombre entier : "
    lire A
    B <- A * 2
    ecrire "Le double de ", A, " est ", B"
Fin
```

- Ecrire un algorithme qui vous demande de saisir votre nom et votre prénom, et qui affiche un message de bienvenue.

```bash
Variables nom, prenom : chaine de caractères
Début
    ecrire "Saisir votre nom : "
    lire nom
    ecrire "Saisir votre prénom : "
    lire prenom
    ecrire "Bonjour ", nom, " ", prenom
Fin
```

### Les opérateurs logiques combinés

- Les opérateurs logiques combinés permettent de combiner plusieurs conditions en une seule condition.

- Les opérateurs logiques combinés sont :
    - et : vrai si les deux conditions sont vraies
    - ou : vrai si au moins une des deux conditions est vraie
    - non : vrai si la condition est fausse

- En pseudo-code, les opérateurs logiques combinés sont représentés par les symboles suivants :
    - et : ET
    - ou : OU
    - ou exclusif : XOR
    - non : NON

# Structures conditionnelles

## Instructions conditionnelles

### C'est quoi ?

- Les instructions conditionnelles permettent d'exécuter des instructions en fonction d'une condition.

- On utilisera la forme suivante :
    - Si condition alors
        instructions
      Sinon
        instructions
    finsi

- La condition est une expression qui peut être évaluée en un booléen (vrai ou faux).

- La partie Sinon est facultative.

Exemple Si ... Alors ... Sinon 
Algorithme Affichage de la valeur absolue d'un nombre
```bash
Variable x : réel
Début
    ecrire "Saisir un nombre : "
    lire x
    Si x >= 0 alors
        ecrire "La valeur absolue de ", x, " est ", x
    Sinon
        ecrire "La valeur absolue de ", x, " est ", -x
    finsi
Fin
```

Exemple Si ... Alors
Algorithme Affichage de la valeur absolue d'un nombre
```bash
Variable x : réel
Début
    ecrire "Saisir un nombre : "
    lire x
    Si x >= 0 alors
        ecrire "La valeur absolue de ", x, " est ", x
    finsi
Fin
```

### Exercice 4 : Si... Alors
Ecrire un algorithme qui demande un nombre entier à l'utilisateur, puis qui teste et affiche s'il est divisible par 3.

```bash
VARIABLES
X EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
AFFICHER "Ecrire un nombre entier : "
LIRE X
SI (X % 3 == 0) ALORS
	DEBUT_SI
	AFFICHER "C'est divisible par 3"
	SINON
	AFFICHER "C'est pas divisible par 3"
	FIN_SI
	
FIN_ALGORITHME
```

## Instructions conditionnelles imbriquées

### C'est quoi ?

- Les test imbriqués permettent de tester plusieurs conditions.

- On utilisera la forme suivante :
    - Si condition1 alors
        instructions
      SinonSi condition2 alors
        instructions
      SinonSi condition3 alors
        instructions
      Sinon
        instructions
    finsi   

Exemple Si ... Alors ... SinonSi ... Alors ... SinonSi ... Alors ... Sinon
Algorithme Affichage de la valeur absolue d'un nombre
```bash
Variable n : entier
Début
    ecrire "Saisir un nombre : "
    lire n
    Si n > 0 alors
        ecrire "La valeur absolue de ", n, " est ", n
    SinonSi n < 0 alors
        ecrire "La valeur absolue de ", n, " est ", -n
    Sinon
        ecrire "La valeur absolue de ", n, " est ", 0
    finsi
Fin
```
### Exercice 5

Le prix de photocopies dans une reprographie varie selon le nombre demandé : 
- 0,5 euros la copie pour un nombre de copies inférieur à 10
- 0,4 euros la copie pour un nombre de copies supérieur ou égal à 10 et inférieur à 20
- 0,3 euros la copie pour un nombre de copies supérieur ou égal à 20

Ecrivez un algorithme qui demande à l'utilisateur le nombre de photocopies qu'il souhaite réaliser et qui affiche le prix total.

```bash
VARIABLES
nbCopies EST_DU_TYPE NOMBRE
prix EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME 
AFFICHER "Combien de photocopies souhaitez-vous ?"
LIRE nbCopies

SI (nbCopies < 10) ALORS
    DEBUT_SI
    prix PREND_LA_VALEUR nbCopies * 0.5
    AFFICHER "Le prix total est de "
    AFFICHER prix
    AFFICHER " euros"
    FIN_SI

SINON 
		DEBUT_SINON
			SI (nbCopies >= 10 ET nbCopies < 20) ALORS
    		DEBUT_SI
    		prix PREND_LA_VALEUR nbCopies * 0.4
    		AFFICHER "Le prix total est de "
    		AFFICHER prix
    		AFFICHER " euros"
    		FIN_SI
    		
			SINON
				DEBUT_SINON
    			prix PREND_LA_VALEUR nbCopies * 0.3
    			AFFICHER "Le prix total est de "
    			AFFICHER prix
    			AFFICHER " euros"
    			FIN_SINON
    FIN_SINON
    
		
FIN_ALGORITHME
```

### Exercice 6 

1- Déterminer le montant d'un capital c placé à un taux fixe t pendant un nombre d'années n. On suppose que c, t et n sont lus. 
Exemple de calcul (le taux est de 4%, soit 0,04) :
Cn = 10 000 * (1 + 0,04) ^ 5 = 12 166,40 euros soit un gain de 2 166,40 euros.

```bash
VARIABLES
c EST_DU_TYPE NOMBRE
t EST_DU_TYPE NOMBRE
n EST_DU_TYPE NOMBRE
Cn EST_DU_TYPE NOMBRE
x EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME 
AFFICHER "Saisir le capital : "
LIRE c
AFFICHER "Saisir le taux : "
LIRE t
t PREND_LA_VALEUR t / 100
AFFICHER "Saisir le nombre d'années : "
LIRE n

x PREND_LA_VALEUR 1+t 
Cn PREND_LA_VALEUR c * pow(x,n)
Cn PREND_LA_VALEUR round(Cn)

AFFICHER "Le montant du capital est de "
AFFICHER Cn
AFFICHER* " euros"

AFFICHER "Soit un gain de : "
AFFICHERCALCUL Cn - c

FIN_ALGORITHME
```

### Exercice 7
Ecrire un algorithme qui demande l'âge d'un enfant à l'utilisateur. Ensuite, il l'informe de sa catégorie pour une licence sportive :
- "Baby" de 3 à 6 ans 
- "Poussin" de 7 à 8 ans
- "Pupille" de 9 à 10 ans
- "Minime" de 11 à 12 ans
- "Cadet" à partir de 13 ans
    
```bash
VARIABLES
  age EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
  AFFICHER "Quel est l'âge de l'enfant ?"
  LIRE age
  SI (age >= 3 ET age <= 6) ALORS
    DEBUT_SI
    AFFICHER "L'enfant est dans la catégorie Baby"
    FIN_SI
    SINON
      DEBUT_SINON
      SI (age >= 7 ET age <= 8) ALORS
        DEBUT_SI
        AFFICHER "L'enfant est dans la catégorie Poussin"
        FIN_SI
        
        SINON
          DEBUT_SINON
          SI (age >= 9 ET age <= 10) ALORS
            DEBUT_SI
            AFFICHER "L'enfant est dans la catégorie Pupille"
            FIN_SI
            
            SINON
              DEBUT_SINON
              SI (age >= 11 ET age <= 12) ALORS
                DEBUT_SI
                AFFICHER "L'enfant est dans la catégorie Minime"
                FIN_SI
                
                SINON
                  DEBUT_SINON
                  SI (age >= 13) ALORS
                    DEBUT_SI
                    AFFICHER "L'enfant est dans la catégorie Cadet"                    
                    FIN_SI
                  
                FIN_SINON
            FIN_SINON
        FIN_SINON
    FIN_SINON
    
FIN_ALGORITHME
```

### Exercice 8

La figure ci-dessous indique la taille (1, 2 ou 3) d'un vêtement en fonction de la taille d'une personne exprimée en centimètres et de son poids exprimé en kilogrammes. 
Ecrivez un programme qui détermine la taille d'un vêtement en fonction de la taille et du poids d'une personne.

Critères : 
1. taille 1 : - taille entre 145cm et 171cm et poids entre 43kg et 47kg
              - taille entre 145cm et 168cm et poids entre 48kg et 53kg
              - taille entre 145cm et 165cm et poids entre 54kg et 59kg
              - taille entre 145cm et 162cm et poids entre 60kg et 65kg

2. taille 2 : - taille entre 169cm et 180cm et poids entre 48kg et 53kg
              - taille entre 166cm et 177cm et poids entre 54kg et 59kg
              - taille entre 163cm et 174cm et poids entre 60kg et 65kg
              - taille entre 160cm et 171cm et poids entre 66kg et 71kg

3. taille 3 : - taille entre 178cm et 185cm et poids entre 54kg et 59kg
              - taille entre 175cm et 185cm et poids entre 60kg et 65kg
              - taille entre 172cm et 185cm et poids entre 66kg et 71kg
              - taille entre 163cm et 185cm et poids entre 72kg et 77kg

4. pas de taille dispo : - taille entre 145cm et 159cm et poids entre 66kg et 77kg 
                         - taille entre 145cm et 162cm et poids entre 72kg et 77kg
                         - taille entre 172cm et 183cm et poids entre 43kg et 47kg
                         - taille supérieur ou égale à 183 et poids entre 48kg et 53kg

```bash
VARIABLES
  taille EST_DU_TYPE NOMBRE
  poids EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    AFFICHER "Quelle est votre taille ?"
    LIRE taille
    AFFICHER "Quel est votre poids ?"
    LIRE poids
    
    SI (taille >= 145 ET taille <= 171 ET poids >= 43 ET poids <= 47) ALORS
        DEBUT_SI
        AFFICHER "Vous faites du taille 1"
        FIN_SI
        
        SINON
        DEBUT_SINON
        SI (taille >= 145 ET taille <= 168 ET poids >= 48 ET poids <= 53) ALORS
            DEBUT_SI
            AFFICHER "Vous faites du taille 1"
            FIN_SI
            
            SINON
            DEBUT_SINON
            SI (taille >= 145 ET taille <= 165 ET poids >= 54 ET poids <= 59) ALORS
                DEBUT_SI
                AFFICHER "Vous faites du taille 1"
                FIN_SI
                
                SINON
                DEBUT_SINON
                SI (taille >= 145 ET taille <= 162 ET poids >= 60 ET poids <= 65) ALORS
                    DEBUT_SI
                    AFFICHER "Vous faites du taille 1"
                    FIN_SI
                    
                    SINON
                    DEBUT_SINON
                    SI (taille >= 169 ET taille <= 180 ET poids >= 48 ET poids <= 53) ALORS
                        DEBUT_SI
                        AFFICHER "Vous faites du taille 2"
                        FIN_SI
                        
                        SINON
                        DEBUT_SINON
                        SI (taille >= 166 ET taille <= 177 ET poids >= 54 ET poids <= 59) ALORS
                            DEBUT_SI
                            AFFICHER "Vous faites du taille 2"
                            FIN_SI
                            
                            SINON
                            DEBUT_SINON
                            SI (taille >= 163 ET taille <= 174 ET poids >= 60 ET poids <= 65) ALORS
                                DEBUT_SI
                                AFFICHER "Vous faites du taille 2"
                                FIN_SI
                                
                                SINON
                                DEBUT_SINON
                                SI (taille >= 160 ET taille <= 171 ET poids >= 66 ET poids <= 71) ALORS
                                    DEBUT_SI
                                    AFFICHER "Vous faites du taille 2"
                                    FIN_SI
                                    
                                    SINON
                                    DEBUT_SINON
                                    SI (taille >= 178 ET taille <= 185 ET poids >= 54 ET poids <= 59) ALORS
                                        DEBUT_SI
                                        AFFICHER "Vous faites du taille 3"
                                        FIN_SI
                                        
                                        SINON
                                        DEBUT_SINON
                                        SI (taille >= 175 ET taille <= 185 ET poids >= 60 ET poids <= 65) ALORS
                                            DEBUT_SI
                                            AFFICHER "Vous faites du taille 3"
                                            FIN_SI
                                            
                                            SINON
                                            DEBUT_SINON
                                            SI (taille >= 172 ET taille <= 185 ET poids >= 66 ET poids <= 71) ALORS
                                                DEBUT_SI
                                                AFFICHER "Vous faites du taille 3"
                                                FIN_SI
                                                
                                                SINON
                                                DEBUT_SINON
                                                SI (taille >= 163 ET taille <= 185 ET poids >= 72 ET poids <= 77) ALORS
                                                    DEBUT_SI
                                                    AFFICHER "Vous faites du taille 3"
                                                    FIN_SI
                                                    
                                                    SINON
                                                    DEBUT_SINON
                                                    SI (taille >= 145 ET taille <= 159 ET poids >= 66 ET poids <= 77) ALORS
                                                        DEBUT_SI
                                                        AFFICHER "Vous faites du taille 4"
                                                        FIN_SI
                                                        
                                                        SINON
                                                        DEBUT_SINON
                                                        SI (taille >= 145 ET taille <= 162 ET poids >= 72 ET poids <= 77) ALORS
                                                            DEBUT_SI
                                                            AFFICHER "Vous faites du taille 4"
                                                            FIN_SI
                                                            
                                                            SINON
                                                            DEBUT_SINON
                                                            SI (taille >= 172 ET taille <= 183 ET poids >= 43 ET poids <= 47) ALORS
                                                                DEBUT_SI
                                                                AFFICHER "Vous faites du taille 4"
                                                                FIN_SI
                                                                
                                                                SINON
                                                                DEBUT_SINON
                                                                SI (taille >= 183 ET poids >= 48 ET poids <= 53) ALORS
                                                                    DEBUT_SI
                                                                    AFFICHER "Vous faites du taille 4"
                                                                    FIN_SI
                                                                    
                                                                    SINON
                                                                    DEBUT_SINON
                                                                    AFFICHER "Aucune taille disponible"
                                                                    FIN_SINON
                                                                FIN_SINON
                                                            FIN_SINON
                                                        FIN_SINON
                                                    FIN_SINON
                                                FIN_SINON
                                            FIN_SINON
                                        FIN_SINON
                                    FIN_SINON
                                FIN_SINON
                            FIN_SINON
                        FIN_SINON
                    FIN_SINON
                FIN_SINON
            FIN_SINON
        FIN_SINON
    
FIN_ALGORITHME
```

# Structures itératives : les boucles

## Les types de boucles
- Les boucles permettent de répéter plusieurs fois une suite d'instructions.
On distingue trois sortes de boucles :
    - la boucle "tant que" (while) : répète une suite d'instructions tant qu'une condition est vraie
    - la boucle "répéter jusqu'à" (do while) : répète une suite d'instructions jusqu'à ce qu'une condition soit vraie
    - la boucle "pour" (for) : répète une suite d'instructions un nombre de fois connu à l'avance

## La boucle "tant que" (while)
- La condition est testée avant l'exécution de la boucle.

- si la condition est vraie, la boucle est exécutée, puis la condition est à nouveau testée. Si elle est encore vraie, la boucle est à nouveau exécutée, etc.

- si la condition est fausse, la boucle n'est pas exécutée et on exécute l'instruction FinTantQue.

Remarques : 
- le nombre d'itérations n'est pas connu à l'avance. Il dépend de la condition.
- il faut faire attention à ne pas créer une boucle infinie.

Exemple :
Contrôle de saisie d'une lettre majuscule jusqu'à ce que la lettre entrée soit valable. 
```bash
Variable C : caractère
Début
    ecrire "Saisir une lettre majuscule : "
    lire C
    TantQue (C < 'A' ou C > 'Z') 
        ecrire "Erreur, saisir une lettre majuscule : "
        lire C
    fTantQue
    ecrire "La lettre saisie est ", C
Fin
```

Exemple :
Un algirithme qui détermine le premier nombre entier N tel que la somme 1 à N dépasse strictement 100. 
```bash
Variable N, S : entiers
Début
    N <- 0
    S <- 0
    TantQue (S <= 100) 
        N <- N + 1
        S <- S + N
    fTantQue
    ecrire "Le premier nombre entier N tel que la somme 1 à N dépasse strictement 100 est ", N
Fin
```

### Exercice 9
Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 3 jusqu'à ce que la réponse convienne.

```bash 
VARIABLES
  nb EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
   AFFICHER "Saisir un nombre entre 1 et 3 : "
    LIRE nb
    TANT_QUE (nb <= 1 OU nb >= 3) FAIRE
        DEBUT_TANT_QUE
        AFFICHER "Erreur, saisir un nombre entre 1 et 3 : "
        LIRE nb
        FIN_TANT_QUE
    AFFICHER "Le nombre saisi est OK", nb
FIN_ALGORITHME
```

### Exercice 10
Soit un capital c placé à un taux t. On veut connaître le nombre d'années nécessaires au doublement de ce capital. 
Exemple de calcul (le taux est de 4%, soit 0,04) :
Cn = 10 000 * (1 + 0,04) ^ 5 = 12 166 euros soit un gain de 2 166 euros.

```bash
VARIABLES
  c EST_DU_TYPE NOMBRE
  t EST_DU_TYPE NOMBRE
  n EST_DU_TYPE NOMBRE
  Cn EST_DU_TYPE NOMBRE
  x EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
     AFFICHER "Saisir le capital : "
    LIRE c
    AFFICHER "Saisir le taux : "
    LIRE t
    t PREND_LA_VALEUR t / 100
    n PREND_LA_VALEUR 0
    x PREND_LA_VALEUR 1+t 
    Cn PREND_LA_VALEUR c * pow(x,n)
    Cn PREND_LA_VALEUR round(Cn)
    TANT_QUE (Cn <= 2*c) FAIRE
        DEBUT_TANT_QUE
        n PREND_LA_VALEUR n + 1
        Cn PREND_LA_VALEUR c * pow(x,n)
        Cn PREND_LA_VALEUR round(Cn)
        FIN_TANT_QUE
    AFFICHER "Le nombre d'années nécessaires au doublement du capital est de "
    AFFICHER n
FIN_ALGORITHME
```

## La boucle pour (for)
- On répète un nombre de fois connu à l'avance une suite d'instructions, en faisant évoluer un compteur (variable particulière) entre une valeur de départ et une valeur d'arrivée.

- Le nombre d'itérations est connu à l'avance. Il dépend de la valeur de départ et de la valeur d'arrivée.

- Compteur est une variable qui doit être déclarée avant la boucle.

- Pas est un entier qui peut être positif ou négatif. Il permet de faire évoluer le compteur.
    Pas peut être omis. Dans ce cas, il prend la valeur 1. 

- Initiale et finale peuvent être des valeurs, des variables ou des expressions.

>> Pour compteur allant de initiale à finale par pas faire
    instructions
  FinPour

- La valeur initiale est affectée au compteur avant la première itération.

- La valeur finale est testée avant chaque itération. Si elle est atteinte, la boucle s'arrête.

- La valeur du compteur est incrémentée (ou décrémentée) de pas à chaque itération.

Exemple :
Calcul de x à la puissance n où x est un réel non nul et n un entier positif ou nul.

```bash
Variable 
x, p : réels
n, i : entiers
Début
    ecrire "Saisir un réel x : "
    lire x
    ecrire "Saisir un entier n : "
    lire n
    p <- 1
    Pour i allant de 1 à n faire
        p <- p * x
    FinPour
    ecrire x, " à la puissance ", n, " est égal à ", p
Fin
```

## La boucle "répéter jusqu'à" (do while)

- La condition est testée après l'exécution de la boucle.

- Les instructions entre Répéter et Jusqu'à sont exécutées au moins une fois et leur exécution est répétée tant que la condition est vraie.

## Les boucles imbriquées

- On peut imbriquer plusieurs boucles les unes dans les autres.

exemple : Pour i allant de 1 à 10 faire
            Pour j allant de 1 à 10 faire
                Ecrire ('O')
            FinPour
            Ecrire ("X")
        FinPour

## Choix du type de boucle

- La boucle "tant que" est utilisée lorsque le nombre d'itérations n'est pas connu à l'avance.

- La boucle "pour" est utilisée lorsque le nombre d'itérations est connu à l'avance.

- La boucle "répéter jusqu'à" est utilisée lorsque l'on veut que les instructions soient exécutées au moins une fois.

## Exercice 11
Ecrire l'algorithme permettant d'afficher la table de multiplication par 9 en utilisant une boucle Pour.

```bash
VARIABLES
  i EST_DU_TYPE NOMBRE
  j EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 10
        DEBUT_POUR
        j PREND_LA_VALEUR 9 * i
        AFFICHER "9 * "
        AFFICHER i
        AFFICHER " = "
        AFFICHER* j  
        FIN_POUR
FIN_ALGORITHME
```

## Exercice 13

Ecrire un algorithme qui demande successivement 6 nombre au hasard à l'utilisateur, et qui lui dit ensuite quel était le plus grand parmi ces 6 nombres. Il faut utiliser une boucle. 

```bash
VARIABLES
nb 
i EST_DU_TYPE NOMBRE
nb EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 6
        DEBUT_POUR
        AFFICHER "Saisir un nombre : "
        LIRE nb
        SI (nb > max OU i == 1) ALORS
            DEBUT_SI
            max PREND_LA_VALEUR nb
            FIN_SI
        FIN_POUR
    AFFICHER "Le plus grand nombre est : "
    AFFICHER max
FIN_ALGORITHME
```
## Exercice 14

Ecrire un algorithme qui demande un nombre de départ et qui calcule la somme des entiers jusqu'à ce nombre. Par exemple, si l'on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
nb EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
	
 AFFICHER "Saisir un nombre : "
    LIRE nb
    POUR i ALLANT_DE 1 A nb
        DEBUT_POUR
        somme PREND_LA_VALEUR somme + i
        FIN_POUR
    AFFICHER "La somme des entiers jusqu'à ce nombre est : "
    AFFICHER somme

FIN_ALGORITHME
```

## Exercice 15

Ecrire un algorithme qui permet d'afficher les tables de multiplication de 1 à 10 d'un seul coup. 

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
j EST_DU_TYPE NOMBRE
k EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 10
        DEBUT_POUR
        POUR j ALLANT_DE 1 A 10
            DEBUT_POUR
            k PREND_LA_VALEUR i * j
            AFFICHER i
            AFFICHER " * "
            AFFICHER j
            AFFICHER " = "
            AFFICHER* k
            FIN_POUR
        FIN_POUR
FIN_ALGORITHME
```
 Une autre solution serait d'utiliser la structure conditionnelle (si... alors... sinon) pour afficher les tables de multiplication de 1 à 10.

```bash
FONCTIONS_UTILISEES

VARIABLES
i EST_DU_TYPE NOMBRE
j EST_DU_TYPE NOMBRE
Table EST_DU_TYPE NOMBRE
DEBUT_ALGORITHME
j PREND_LA_VALEUR 1
i PREND_LA_VALEUR 1
        POUR Table ALLANT_DE 1 A 100
            DEBUT_POUR
            
            AFFICHERCALCUL* i * j
            
            j PREND_LA_VALEUR j + 1            
            
            SI (j > 10) ALORS
                DEBUT_SI
                j PREND_LA_VALEUR 1    
                i PREND_LA_VALEUR i + 1
                AFFICHER* " "
                FIN_SI
            FIN_POUR
FIN_ALGORITHME
```
## Exercice 15 bis 

La ville de Tourcoing a un taux d'accroissement de 0.89 %. 
Ecrire un algorithme donnant le nombre d'années nécessaires pour atteindre 120 000 habitants. 
On sait qu'en 2015 la ville de Tourcoing comptait 96 809 habitants. 
    
```bash
VARIABLES
annee EST_DU_TYPE NOMBRE
population EST_DU_TYPE NOMBRE
    
DEBUT_ALGORITHME
annee PREND_LA_VALEUR 2015
population PREND_LA_VALEUR 96809
TANT_QUE (population <= 120000) FAIRE
    DEBUT_TANT_QUE
    population PREND_LA_VALEUR population * 1.0089
    population PREND_LA_VALEUR round(population)
    annee PREND_LA_VALEUR annee + 1
    FIN_TANT_QUE
AFFICHER "Le nombre d'années nécessaires pour atteindre 120 000 habitants est de "
AFFICHER annee - 2015
    
    FIN_ALGORITHME
```
## Exercice 16

Ecrire un programme qui demande à l'utilisateur de saisir 20 notes d'élèves et qui propose le menu suivant :
- Afficher la plus petite note 
- Afficher la plus grande note
- Afficher la moyenne de la classe

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
note EST_DU_TYPE NOMBRE
min EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
moyenne EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE
choix EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 20
        DEBUT_POUR
        AFFICHER "Saisir une note : "
        LIRE note
        SI (note < min OU i == 1) ALORS
            DEBUT_SI
            min PREND_LA_VALEUR note
            FIN_SI
        SI (note > max OU i == 1) ALORS
            DEBUT_SI
            max PREND_LA_VALEUR note
            FIN_SI
        somme PREND_LA_VALEUR somme + note
        FIN_POUR
    moyenne PREND_LA_VALEUR somme / 20
    AFFICHER* "1. Afficher la plus petite note"
    AFFICHER* "2. Afficher la plus grande note"
    AFFICHER* "3. Afficher la moyenne de la classe"
    AFFICHER "Saisir votre choix : "
    LIRE choix
    SI (choix == 1) ALORS
        DEBUT_SI
        AFFICHER "La plus petite note est : "
        AFFICHER min
        FIN_SI
    SI (choix == 2) ALORS
        DEBUT_SI
        AFFICHER "La plus grande note est : "
        AFFICHER max
        FIN_SI
    SI (choix == 3) ALORS
        DEBUT_SI
        AFFICHER "La moyenne de la classe est : "
        AFFICHER moyenne
        FIN_SI
FIN_ALGORITHME
```

Pour ne pas sortir du menu, on peut utiliser une boucle tant que.

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
note EST_DU_TYPE NOMBRE
min EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
moyenne EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE
choix EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 20
        DEBUT_POUR
        AFFICHER "Saisir une note : "
        LIRE note
        SI (note < min OU i == 1) ALORS
            DEBUT_SI
            min PREND_LA_VALEUR note
            FIN_SI
        SI (note > max OU i == 1) ALORS
            DEBUT_SI
            max PREND_LA_VALEUR note
            FIN_SI
        somme PREND_LA_VALEUR somme + note
        FIN_POUR
    moyenne PREND_LA_VALEUR somme / 20
    TANT_QUE (choix != 4) FAIRE
        DEBUT_TANT_QUE
        AFFICHER* "1. Afficher la plus petite note"
        AFFICHER* "2. Afficher la plus grande note"
        AFFICHER* "3. Afficher la moyenne de la classe"
        AFFICHER* "4. Quitter"
        AFFICHER "Saisir votre choix : "
        LIRE choix
        SI (choix == 1) ALORS
            DEBUT_SI
            AFFICHER "La plus petite note est : "
            AFFICHER* min
            FIN_SI
        SI (choix == 2) ALORS
            DEBUT_SI
            AFFICHER "La plus grande note est : "
            AFFICHER* max
            FIN_SI
        SI (choix == 3) ALORS
            DEBUT_SI
            AFFICHER "La moyenne de la classe est : "
            AFFICHER* moyenne
            FIN_SI
        FIN_TANT_QUE
FIN_ALGORITHME
```

## Exercice 17

Ecrire un programme qui demande à l'utilisateur de saisir des notes et qui propose le menu suivant :
- Afficher la plus petite note
- Afficher la plus grande note
- Afficher la moyenne de la classe

On arrête quand l'utilisateur saisie la valeur 0.

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
note EST_DU_TYPE NOMBRE
min EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
moyenne EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE
choix EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
    POUR i ALLANT_DE 1 A 20
        DEBUT_POUR
        AFFICHER "Saisir une note : "
        LIRE note
        SI (note < min OU i == 1) ALORS
            DEBUT_SI
            min PREND_LA_VALEUR note
            FIN_SI
        SI (note > max OU i == 1) ALORS
            DEBUT_SI
            max PREND_LA_VALEUR note
            FIN_SI
        somme PREND_LA_VALEUR somme + note
        FIN_POUR
    moyenne PREND_LA_VALEUR somme / 20
    TANT_QUE (choix != 4) FAIRE
        DEBUT_TANT_QUE
        AFFICHER* "1. Afficher la plus petite note"
        AFFICHER* "2. Afficher la plus grande note"
        AFFICHER* "3. Afficher la moyenne de la classe"
        AFFICHER* "0. Quitter"
        AFFICHER "Saisir votre choix : "
        LIRE choix
        SI (choix == 1) ALORS
            DEBUT_SI
            AFFICHER "La plus petite note est : "
            AFFICHER* min
            FIN_SI
        SI (choix == 2) ALORS
            DEBUT_SI
            AFFICHER "La plus grande note est : "
            AFFICHER* max
            FIN_SI
        SI (choix == 3) ALORS
            DEBUT_SI
            AFFICHER "La moyenne de la classe est : "
            AFFICHER* moyenne
            FIN_SI
        FIN_TANT_QUE
FIN_ALGORITHME
```
# Les fonctions & procédures

Jusqu'à maintenant, nous avons utilisé une programmation procédural, c'est-à-dire que nous avons écrit des instructions dans un ordre précis pour résoudre un problème. C'est ce qu'on appelle un type de programmation linéaire.

Nous allons voir un autre type de programmation, la programmation fonctionnelle. C'est ce qu'on appelle une programmation modulaire. C'est un type de programmation qui consiste à découper un programme en plusieurs parties appelées modules. Chaque module est une partie du programme qui effectue une tâche précise.

## A quoi ça sert ? 
- Les fonctions et les procédures permettent de découper un programme en plusieurs parties.
Elles ont plusieurs avantages :
    - Elles permettent de réutiliser du code.
    - Elles permettent de rendre le code plus lisible.
    - Elles permettent de rendre le code plus maintenable.
    - Elles permettent de rendre le code plus testable.

## Rôle d'une fonction
- Le rôle d'une fonction est de retourner un résultat à partir des valeurs de ses paramètres.

- Une fonction s'écrit en dehors du programme principal sous la forme suivante :

```pascal   
Fonction nomFonction(paramètres) : typeRetour;
Instructions constituant la fonction
retourne...
Fin Fonction
``` 

Exemple de fonction :
Calcul du perimétre d'un rectangle

```pascal
Fonction perimetre(longueur, largeur : entier) : entier;
Variable perimetre : entier;
Debut
    perimetre <- 2 * (longueur + largeur);
    Retourner perimetre;
Fin Fonction
```

## Appel d'une fonction 
- Pour appeler une fonction, il faut utiliser son nom suivi des valeurs des paramètres entre parenthèses.

Exemple d'appel de la fonction perimetre :

```pascal
Fonction perimetre(longueur, largeur : entier) : entier;
Variable perimetre : entier;
Debut
    perimetre <- 2 * (longueur + largeur);
    Retourner perimetre;
Fin Fonction
````

```pascal
Variable p : entier;
Debut
    p <- perimetre(5, 3);
    Ecrire("Le perimètre est:", p);
Fin
```
## Exercice 18
Définir une fonction qui renvoie le plus grand de deux nombres différents. 

Ecrire un programme qui demande deux nombres à l'utilisateur et affiche le plus grand des deux.

```bash
FONCTIONS_UTILISEES
FONCTION plusGrand(a,b)
VARIABLES_FONCTION
max EST_DU_TYPE NOMBRE
	DEBUT_FONCTION
	max PREND_LA_VALEUR a
	SI (b > a) ALORS 
		DEBUT_SI
		max PREND_LA_VALEUR b
		FIN_SI
		RENVOYER max
	FIN_FONCTION

VARIABLES
a EST_DU_TYPE NOMBRE
b EST_DU_TYPE NOMBRE
maxi EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME

AFFICHER "Saisir un nombre : "
LIRE a
AFFICHER "Saisir un nombre : "
LIRE b
maxi PREND_LA_VALEUR plusGrand(a, b)
AFFICHER "Le plus grand des deux nombres est : "
AFFICHER maxi

FIN_ALGORITHME
```
## Procédure : c'est quoi ?

- Une procédure est un ensemble d'instructions qui effectue une tâche précise. Dans certains cas, on peut avoir besoin de répeter une tâche dans plusieurs endroits du programme. Pour éviter de répéter le même code, on peut utiliser une procédure.

- Une procédure est un sous-programme semblable à une fonction mais qui ne retourne pas de valeur.

- Une procédure s'écrit en dehors du programme principal sous la forme suivante :

```pascal
Procedure nomProcedure(paramètres);
Instructions constituant la procédure
Fin Procedure
```
Remarque : une procédure peut ne pas avoir de paramètres.

## Appel d'une procédure
- Pour appeler une procédure, il faut utiliser son nom suivi des valeurs des paramètres entre parenthèses.

Par exemple, pour appeler la procédure afficherMessage, on écrit :

```pascal
afficherMessage("Bonjour");
```
Remarque : Contrairement à l'appel d'une fonction qui peut être utilisé dans une expression, l'appel d'une procédure ne peut pas être utilisé dans une expression.

- Les paramètres d'une procédure servent à échanger des données entre le programme principal et la procédure.

- Les paramètres placés dans la décclaration d'une procédure sont appelés paramètres formels. Ces paramètres peuvent prendre toutes les valeurs possibles mais sont ignorés par le programme principal.

- Les paramètres placés dans l'appel d'une procédure sont appelés paramètres effectifs. Ces paramètres doivent être des variables ou des constantes. Ils contiennent les valeurs qui seront utilisées par la procédure.

- Le nombre de paramètres effectifs doit être égal au nombre de paramètres formels. L'ordre et le type des paramètres effectifs doivent correspondre à l'ordre et au type des paramètres formels.

## Transmission des paramètres 
- Il existe deux modes de transmission de paramètres dans les langages de programmation: 
    - La transmission par valeur : les valeurs des paramètres effectifs sont affectées aux paramètres formels correspondants au moment de l'appel de la procédure. Dans ce mode le paramètre effectif ne subit aucune modification. 
    - La transmission par adresse (ou par référence) : les adresses des paramètres effectifs sont transmises à la procédure appelante. Dans ce mode, le paramètre effectif subit les mêmes modifications que le paramètre formel lors de l'exécution de la procédure. 

Remarque : les paramètres effectifs doit être une variable (et non une valeur) lorsqu'il s'agit d'une transmission par adresse

- En pseudo-code, on va préciser explicitement le mode de transmission dans la déclaration 

## Portée des variables

- Une variable déclarée dans le programme principal est appelée variable globale. Elle est accessible dans tout le programme et existe pendant toute la durée d'exécution du programme.

- Une variable déclarée dans une procédure est appelée variable locale. Elle n'est accessible que dans la procédure où elle est déclarée et existe pendant toute la durée d'exécution de la procédure.

## Exercice 

Ecrire un programme qui demande à l'utilisateur de saisir des notes et qui propose le menu suivant :
- Afficher la plus petite note
- Afficher la plus grande note
- Afficher la moyenne de la classe

On arrête quand l'utilisateur saisie la valeur 0.
Mettre le menu dans une procédure.

```bash
FONCTIONS_UTILISEES
FONCTION afficherMenu ()

VARIABLES_FONCTION

choix EST_DU_TYPE NOMBRE

DEBUT_FONCTION	  
	AFFICHER* "1. Afficher la plus petite note"
    AFFICHER* "2. Afficher la plus grande note"
    AFFICHER* "3. Afficher la moyenne de la classe"
    AFFICHER* "0. Quitter"
    AFFICHER "Saisir votre choix : "
        LIRE choix
        SI (choix == 1) ALORS
            DEBUT_SI
            AFFICHER "La plus petite note est : "
            AFFICHER* min
            FIN_SI
        SI (choix == 2) ALORS
            DEBUT_SI
            AFFICHER "La plus grande note est : "
            AFFICHER* max
            FIN_SI
        SI (choix == 3) ALORS
            DEBUT_SI
            AFFICHER "La moyenne de la classe est : "
            AFFICHER* moyenne
            FIN_SI
FIN_FONCTION

VARIABLES
note EST_DU_TYPE NOMBRE
i EST_DU_TYPE NOMBRE
a EST_DU_TYPE NOMBRE
b EST_DU_TYPE NOMBRE
min EST_DU_TYPE NOMBRE
max EST_DU_TYPE NOMBRE
moyenne EST_DU_TYPE NOMBRE
somme EST_DU_TYPE NOMBRE

DEBUT_ALGORITHME
POUR i ALLANT_DE 1 A 20
    DEBUT_POUR
        AFFICHER "Saisir une note : "
        LIRE note
    FIN_POUR
        
        SI (a < min) ALORS
            DEBUT_SI
            min PREND_LA_VALEUR a
            FIN_SI
        SI (a > max) ALORS
            DEBUT_SI
            max PREND_LA_VALEUR a
            FIN_SI
  
somme PREND_LA_VALEUR somme + a
        
moyenne PREND_LA_VALEUR somme / 20
        
APPELER_FONCTION afficherMenu()
    
FIN_ALGORITHME
```

# Les tableaux 

## Définition
- Un tableau est une structure de données qui permet de stocker plusieurs valeurs de même type dans une seule variable.

## Pourquoi utiliser un tableau ?
- Supposons que l'on veuille stocker les notes de 30 élèves pour extraire quelques informations. Par exemple : calcul du nombre d'étudiants ayant une note supérieure à 10, calcul de la moyenne de la classe, etc.

- Le seul moyen de stocker ces notes est d'utiliser 30 variables différentes. C'est fastidieux et peu pratique. 

- Pour résoudre ce problème, on peut utiliser un tableau. Un tableau est une structure de données qui permet de stocker plusieurs valeurs de même type dans une seule variable. 

- Un tableau est un ensemble de valeurs de même type. Chaque valeur est repérée par un indice. L'indice d'un tableau commence à 0.

- Une variable entière nommé indice permet de parcourir le tableau. Elle permet d'indiquer la position de la valeur dans le tableau.

- La déclaration d'un tableau s'effectue en précisant le type des valeurs qu'il contient et le nombre de valeurs qu'il contient. 

- En pseudo-code : 
```bash
Variable tableau identificateur[dimension] : type
```
Exemple : 
```bash
Variable notes[30] : réel
```

- On peut définir des tableaux de tous types : tableaux de réels, tableaux de caractères, tableaux de chaînes de caractères, tableaux de booléens, etc. 

Remarques :
> L'accès à un élément du tableau se fait par son indice.
> L'indice d'un tableau commence à 0.
> Il est possible de déclarer un tableau sans préciser au départ sa dimension. Cette précision est ultérieurment apportée par une instruction de redimensionnement.
> Un tableau est inutilisable tant qu'il n'a pas été redimensionné.
> Un grand avantage des tableaux est qu'on peut traiter les données qui y sont stockées de façon simple en utilisant des boucles.

Exemple : 
Procédures qui permettent de saisir et d'afficher les éléments d'un tableau : 

```bash
Procedure saisirTableau(var tab : tableau[1..30] de réel);
Variable i : entier;
Debut
    Pour i allant de 1 à 30 faire
        Ecrire("Saisir un réel : ");
        Lire(tab[i]);
    FinPour
Fin

Procedure afficherTableau(var tab : tableau[1..30] de réel);
Variable i : entier;
Debut
    Pour i allant de 1 à 30 faire
        Ecrire(tab[i], " ");
    FinPour
Fin
```
Exemple d'appel: 
Algorithme principal où on fait l'appel des procédures SaisieTab et AfficheTab:

```bash
Algorithme Tableaux
variable p : entier 
Tableau A[10]: réel 
Début
p←10 SaisieTab(p, A) 
AfficheTab(p,A)
Fin
```
Exemple : Tableaux : fonction longueur 
La plupart des langages offrent une fonc'on longueur qui donne la dimension
du tableau. Les procédures Saisie et Affiche peuvent être réécrites comme suit :

```bash
ProcédureSaisieTab( tableau T : réel par référence) variable i: entier
Pour i allant de 0 à longueur(T)-1
écrire ("Saisie de l'élément ", i + 1)
lire (T[i] )
FinPour
Fin Procédure
ProcédureAfficheTab(tableau T : réel par valeur) variable i: entier
Pour i allant de 0 à longueur(T)-1
écrire ("T[",i, "] =", T[i])
FinPour
Fin Procédure
```

## Exercice 19
Ecrire un algorithme qui déclare et stocke dans un tableau 10 chiffres, puis qui affiche le 9éme élément de ma liste.

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
tab EST_DU_TYPE LISTE

DEBUT_ALGORITHME

POUR i ALLANT_DE 0 A 9
   DEBUT_POUR
   AFFICHER "Saisir un nombre : "
   LIRE tab[i]
   FIN_POUR
AFFICHER "Le 9ème élément de la liste est : "
AFFICHER tab[8]
	
FIN_ALGORITHME
```

## Exercice 20
Écrire un algorithme permeWant de saisir 15 notes et de les afficher.

```bash
VARIABLES
i EST_DU_TYPE NOMBRE
tab EST_DU_TYPE LISTE

DEBUT_ALGORITHME

POUR i ALLANT_DE 1 A 15
   DEBUT_POUR
   AFFICHER "Saisir une note : "
   LIRE tab[i]
   FIN_POUR
AFFICHER "Les 15 notes sont : "
POUR i ALLANT_DE 1 A 15
   DEBUT_POUR
   AFFICHER* tab[i]
   FIN_POUR

FIN_ALGORITHME
```

exemple de lecture d’une matrice 
Procédure qui permet de saisir les éléments d'une matrice :
    
    ```bash
    Procedure saisirMatrice(var mat : tableau[1..30, 1..30] de réel; n, m : entier);
    Variable i, j : entier;
    Debut
        Pour i allant de 1 à n faire
            Pour j allant de 1 à m faire
                Ecrire("Saisir un réel : ");
                Lire(mat[i, j]);
            FinPour
        FinPour
    Fin
    ```

    Procédure qui permet d'afficher les éléments d'une matrice :
    
    ```bash
    Procedure afficherMatrice(var mat : tableau[1..30, 1..30] de réel; n, m : entier);
    Variable i, j : entier;
    Debut
        Pour i allant de 1 à n faire
            Pour j allant de 1 à m faire
                Ecrire(mat[i, j], " ");
            FinPour
            Ecrire();
        FinPour
    Fin
    ```

    Exemple d'algorithme principal où on fait l'appel des procédures définies précédemment pour la saisie, l'affichage et la somme des matrices :
        
        ```bash
        Algorithme Matrices
        variables tableauM1[3][4],M2 [3][4],M3 [3][4] : réel 
        Début
        SaisieMatrice(3, 4, M1) 
        SaisieMatrice(3, 4, M2) 
        AfficheMatrice(3,4, M1) 
        AfficheMatrice(3,4, M2) 
        SommeMatrice(3, 4, M1,M2,M3) 
        AfficheMatrice(3,4, M3)
        Fin
        ```




## Exercice 21

Écrire un algorithme permettant la saisie des notes d'une classe de 15 étudiants pour 3 matières, tel que: 
- la première ligne contient les notes de la première matière,
- la deuxième ligne contient les notes de la deuxième matière,
- la troisième ligne contient les notes de la troisième matière.

```bash
FONCTIONS_UTILISEES
VARIABLES
  i EST_DU_TYPE NOMBRE
  j EST_DU_TYPE NOMBRE
  tab EST_DU_TYPE LISTE
DEBUT_ALGORITHME
  POUR i ALLANT_DE 1 A 3
    DEBUT_POUR
    POUR j ALLANT_DE 1 A 3
      DEBUT_POUR
      AFFICHER "Saisir une note : "
      LIRE tab[i*3 + j]
      FIN_POUR
    FIN_POUR
  AFFICHER "Les notes de la première matière sont : "
  POUR j ALLANT_DE 1 A 3
    DEBUT_POUR
    AFFICHER* tab[1*3 + j]
    FIN_POUR
  AFFICHER "Les notes de la deuxième matière sont : "
  POUR j ALLANT_DE 1 A 3
    DEBUT_POUR
    AFFICHER* tab[2*3 + j]
    FIN_POUR
  AFFICHER "Les notes de la troisième matière sont : "
  POUR j ALLANT_DE 1 A 3
    DEBUT_POUR
    AFFICHER* tab[3*3 + j]
    FIN_POUR
FIN_ALGORITHME
```




    








