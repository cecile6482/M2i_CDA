# Le Cascading Style Sheets (CSS)

## Introduction

### Qu'est-ce que le CSS ?
Le CSS est un langage de style utilisé pour décrire la présentation d'un document écrit en HTML ou XML (ainsi que le langage SVG ou encore XHTML). Il permet de contrôler l'apparence, la mise en page et le design du site.

### Pourquoi utiliser le CSS ?
- Le CSS permet de séparer le contenu de la présentation d'un site web. Il permet de modifier l'apparence de plusieurs pages en même temps. Il permet également de créer des sites web plus accessibles.
- Il offre un contrôle précis sur la couleur, la police, la taille, la position et l'espacement des éléments, des mises en page multiples, des styles différents pour les périphériques différents et des styles de base pour les éléments HTML.
- Adaptabilité : le CSS permet de créer des design réactifs et adaptatifs. Il permet de créer des sites web qui s'adaptent à la taille de l'écran de l'utilisateur.

### La syntaxe de base du CSS

```css
selector {
  property: value;
}
```

- **Sélecteur** : cible les éléments HTML que vous souhaitez styliser.
- **Propriété** : l'aspect que vous souhaitez modifier.
- **Valeur** : la valeur de la propriété.

Par exemple, si je souhaite transformer tous mes titres de niveau 1 (h1) en rouge, je vais écrire :

```css
h1 {
  color: red;
}
```

## Trois types d'insertion du style dans le HTML

### Inline CSS
L'inline CSS est utilisé pour appliquer un style à un seul élément. Il est utilisé en ajoutant un attribut `style` à un élément HTML.

```html
<h1 style="color: red;">Titre</h1>
```

### Internal CSS
L'internal CSS est utilisé pour appliquer un style à un seul document. Il est utilisé en ajoutant un élément `style` dans la balise `head` du document.

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

### External CSS
L'external CSS est utilisé pour appliquer un style à plusieurs documents. Il est utilisé en ajoutant un lien vers un fichier CSS dans la balise `head` du document.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## Sélecteurs et priorités

### Sélecteurs CSS
Les sélecteurs CSS sont utilisés pour cibler les éléments HTML que vous souhaitez styliser. Il existe plusieurs types de sélecteurs CSS :

- **Sélecteurs de type** : cible les éléments HTML en fonction de leur type.(`p`, `h1`, `div`, `span`, etc.)
- **Sélecteurs de classe** : cible les éléments HTML en fonction de leur classe. (`.ma-classe`)
- **Sélecteurs d'identifiant** : cible les éléments HTML en fonction de leur identifiant. (`#mon-id`)
- **Sélecteurs de relation** : cible les éléments HTML en fonction de leur relation avec un autre élément. (`p > span`, `div + p`, etc.)

### Priorités CSS
Lorsque plusieurs règles CSS sont appliquées à un même élément, il faut déterminer laquelle sera appliquée. Pour cela, on utilise la priorité CSS. La priorité CSS est déterminée par trois facteurs :

#### Facteur 1 : Importance
L'importance est déterminée par le type de sélecteur utilisé. Voici comment les sélecteurs sont classés par ordre d'importance :

- **Styles déclarés avec `!important`** : `!important` est une instruction qui peut être ajoutée à une règle CSS pour donner la priorité à cette règle sur toutes les autres règles. Elle est utilisée en ajoutant `!important` à la fin de la valeur de la propriété. (`color: red !important;`) Ainsi elles seront appliqués même si d'autres styles sont appliqués après.

```css
h1 {
  color: red !important;
}
```

- **Styles définis dans l'attribut `style`** : les styles définis dans l'attribut `style` d'un élément HTML ont une priorité plus élevée que les styles définis dans un fichier CSS externe ou dans la balise `style` du document.

```html
<h1 style="color: red;">Titre</h1>
```
- **Styles intégrés au document** : les styles définis dans la balise `style` du document ont une priorité plus élevée que les styles définis dans un fichier CSS externe.

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

- **Styles définis dans un fichier CSS externe** : les styles définis dans un fichier CSS externe ont une priorité plus faible que les styles définis dans la balise `style` du document.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

#### Facteur 2 : Spécificité
La spécificité est déterminée par le type de sélecteur utilisé. Voici comment les sélecteurs sont classés par ordre de spécificité :

- **Sélecteurs d'identifiant** : les sélecteurs d'identifiant ont une spécificité plus élevée que les sélecteurs de classe et de type. (`#mon-id`) Chaque identifiant ciblé dans la règle CSS ajoute 100 points à la spécificité de la règle.

- **Sélecteurs de classe** : les sélecteurs de classe ont une spécificité plus élevée que les sélecteurs de type. (`.ma-classe`) Chaque classe ciblée dans la règle CSS ajoute 10 points à la spécificité de la règle.

- **Sélecteurs de type** : les sélecteurs de type ont une spécificité plus faible que les sélecteurs de classe et d'identifiant. (`p`, `h1`, `div`, `span`, etc.) Chaque type ciblé dans la règle CSS ajoute 1 point à la spécificité de la règle. 

- **Sélecteurs de relation** : les sélecteurs de relation ont une spécificité plus faible que les sélecteurs de type. (`p > span`, `div + p`, etc.) Chaque relation ciblée dans la règle CSS ajoute 0 point à la spécificité de la règle.

Exemple : 
    
```css  
    p {
      color: red;
    }

    p#unique {
      color: green;
    }

    p.ma-classe {
      color: blue;
    }
 ```
>> Au final, le p sera de couleur verte. En effet, la règle `p#unique` a une spécificité de 101 (1 pour le p + 100 pour l'id unique) et la règle `p.ma-classe` a une spécificité de 11 (1 pour le p + 10 pour la classe). La règle `p` a une spécificité de 1. La règle `p#unique` a donc une spécificité plus élevée que la règle `p.ma-classe` et sera donc appliquée.

#### Facteur 3 : Ordre
L'ordre est déterminé par l'ordre dans lequel les règles CSS sont déclarées. Si deux règles ont la même importance et la même spécificité, la règle qui est déclarée en dernier sera appliquée.

Exemple : 
    
```css  
    p {
      color: red;
    }

    p {
      color: green;
    }
 ```
>> Au final, le p sera de couleur verte. En effet, les deux règles ont la même importance et la même spécificité. La règle `p` est déclarée en dernier, elle sera donc appliquée.

En comprenant ces trois facteurs, vous pouvez déterminer quelles règles CSS seront appliquées à un élément.

## Les pseudo-classes
Les pseudo-classes en CSS sont des sélecteurs spéciaux qui permettent de cibler les élements HTML dans un état particulier. Elles sont précédés de deux points (`:`) et sont ajoutées à la fin du sélecteur. Il y en a plusieurs types :

### Les pseudo-classes de base
Les pseudo-classes de base permettent de cibler les éléments HTML dans un état particulier. Voici les plus utilisées :

1. `:hover` : cible les éléments HTML lorsque la souris est dessus.

2. `:active` : cible les éléments HTML lorsque l'utilisateur clique dessus. On peut l'utiliser pour créer un effet de clic visuel.

3. `:focus` : cible les éléments HTML lorsque l'utilisateur clique dessus ou les sélectionne avec la touche Tab. On peut l'utiliser pour créer un effet de focus visuel pour styliser les formulaires.

### Les pseudo-classes de lien

1. `:link` : cible les liens HTML non visités, c'est-à-dire les liens qui n'ont pas encore été cliqués. 

2. `:visited` : cible les liens HTML visités, c'est-à-dire les liens qui ont déjà été cliqués.

### Les pseudo-classes de position

1. `:first-child` : cible le premier élément HTML enfant d'un autre élément HTML. Vous pouvez par exemple l'utiliser pour styliser le premier élément d'une liste.

2. `:last-child` : cible le dernier élément HTML enfant d'un autre élément HTML. Vous pouvez par exemple l'utiliser pour styliser le dernier élément d'une liste.

3. `:nth-child(n)` : cible le n-ième élément HTML enfant d'un autre élément HTML. Vous pouvez par exemple l'utiliser pour styliser le 3ème élément d'une liste. On peut également utiliser des formules mathématiques pour cibler des éléments HTML spécifiques. Par exemple, `:nth-child(even)` cible tous les éléments HTML pairs.

### Les pseudo-classes de formulaire

1. `:checked` : cible les éléments HTML qui sont cochés. On peut l'utiliser pour styliser les cases à cocher et les boutons radio.

2. `:disabled` : cible les éléments HTML qui sont désactivés. On peut l'utiliser pour styliser les éléments désactivés.
    
## Les propriétés CSS

Le CSS offre un large éventail de propriétés pour contrôler l'apparence, la mise en page et le design du site. Voici quelques-unes des propriétés les plus utilisées :

### Les propriétés de texte

1. **`font-family` :** définit la police de caractères utilisée pour le texte.Elle peut être définie par une liste de nom de police ou par un nom de police générique. Par exemple, `font-family: Arial, Helvetica, sans-serif;` définit la police de caractères à utiliser pour le texte. Si la police Arial n'est pas disponible, la police Helvetica sera utilisée. Si la police Helvetica n'est pas disponible, une police sans-serif sera utilisée.

2. **`font-size` :** définit la taille de la police de caractères utilisée pour le texte. Elle peut être définie en pixels, en pourcentage ou en d'autres unités de mesures (em, rem, ...). Par exemple, `font-size: 16px;` définit la taille de la police de caractères à 16 pixels. 
>> L'unité à utiliser devrait être généralement le rem. Le rem est une unité de mesure relative à la taille de la police de caractères de l'élément racine (la balise `html`). Par exemple, si la taille de la police de caractères de l'élément racine est de 16px, `font-size: 1rem;` définit la taille de la police de caractères à 16px. Si la taille de la police de caractères de l'élément racine est de 20px, `font-size: 1rem;` définit la taille de la police de caractères à 20px.

3. **`font-weight` :** Cette propriété détermine l'épaisseur de la police utilisée pour le texte à l'intérieur d'un élément. Elle peut être définie avec des valeurs telles que `normal`, `bold`, `bolder`, `lighter`, ou des numériques pour des épaisseurs spécifiques.

4. **`font-style` :** Cette propriété permet de définir le style de la police, tel que `normal` (par défaut), `italic`, ou `oblique`.

5. **`color` :** Cette propriété définit la couleur du texte à l'intérieur d'un élément HTML. Vous pouvez utiliser des noms de couleurs, des codes hexadécimaux, ou des valeurs `rgb` pour définir la couleur.

6. **`line-height` :** La propriété `line-height` contrôle la hauteur de ligne, c'est à dire l'espace vertical entre les lignes de texte. Elle peut être définie en tant que valeur numérique ou en pourcentage de la taille de la police. Sa valeur de base est 1.2, on privilégiera une taille entre 1.5 et 1.7 pour une lecture confortable.

7. **`text-align` :** Cette propriété règle l'alignement horizontal du texte à l'intérieur de son parent. Les valeurs courantes sont `left`, `right`, `center` et `justify`.

8. **`text-transform` :** Cette propriété permet de modifier la casse du texte. Vous pouvez l'utiliser pour mettre en majuscules (`uppercase`), en minuscules (`lowercase`), ou pour capitaliser la première lettre de chaque mot (`capitalize`).

9. **`text-decoration` :** Cette propriété contrôle la décoration du texte, telle que les soulignements (`underline`), les surlignements (`overline`), et les mots barrés (`line-through`). Elle peut également être utilisée pour supprimer ces décorations si elles sont mises par défaut en mettant la valeur `none`.


### Les propriétés de mise en page

#### Le box-model (modèle de boîte)

Le box-model est un modèle de mise en page qui permet de contrôler la taille et la position des éléments HTML. Il est composé de quatre parties :

1. **Le contenu (content)** : c'est le contenu de l'élément HTML. Il peut être du texte, des images, des vidéos, etc. La taille de ce contenu est déterminée par les propriétés `width` et `height`.

2. **Le rembourrage (padding)** : c'est l'espace entre le contenu et la bordure de l'élément HTML. La taille de ce rembourrage est déterminée par les propriétés `padding-top`, `padding-right`, `padding-bottom` et `padding-left`.

3. **La bordure (border)** : c'est la bordure de l'élément HTML. La taille de cette bordure est déterminée par les propriétés `border-top-width`, `border-right-width`, `border-bottom-width` et `border-left-width`. La couleur de cette bordure est déterminée par les propriétés `border-top-color`, `border-right-color`, `border-bottom-color` et `border-left-color`. La forme de cette bordure est déterminée par les propriétés `border-top-style`, `border-right-style`, `border-bottom-style` et `border-left-style`.   
- `border` est une propriété raccourcie qui permet de définir la largeur, la couleur et la forme de la bordure en une seule propriété.  
- `border-radius` est une propriété qui permet de définir la forme des coins de la bordure.

4. **La marge (margin)** : c'est l'espace entre la bordure de l'élément HTML et les éléments HTML voisins. La taille de cette marge est déterminée par les propriétés `margin-top`, `margin-right`, `margin-bottom` et `margin-left`.

![Box-model](https://www.w3schools.com/css/box-model.gif)

5. **Largeur totale (total width)** : c'est la largeur totale de l'élément HTML. Elle est déterminée par la somme de la largeur du contenu, du rembourrage, de la bordure et de la marge. Elle est déterminée par la propriété `width`.

6. **Autres propriétés** : il existe d'autres propriétés qui permettent de contrôler le box-model. Par exemple, 

- `box-sizing` permet de définir si la largeur et la hauteur de l'élément HTML incluent le rembourrage et la bordure ou non. Par défaut, la largeur et la hauteur de l'élément HTML incluent le rembourrage et la bordure. Si vous souhaitez que la largeur et la hauteur de l'élément HTML incluent le rembourrage et la bordure, vous pouvez utiliser `box-sizing: border-box;`. Si vous souhaitez que la largeur et la hauteur de l'élément HTML n'incluent pas le rembourrage et la bordure, vous pouvez utiliser `box-sizing: content-box;`.
- `outline` permet de définir la bordure extérieure de l'élément HTML. Elle est similaire à la propriété `border`, mais elle ne prend pas de place et elle ne peut pas être arrondie. Elle est souvent utilisée pour créer un effet de focus visuel pour styliser les formulaires.
- `box-shadow` permet de définir une ombre pour l'élément HTML. Elle est souvent utilisée pour créer des effets de profondeur.

Le box-model est essentiel pour comprendre comment fonctionne la mise en page en CSS. Il est important de comprendre que la largeur et la hauteur de l'élément HTML sont déterminées par la somme de la largeur du contenu, du rembourrage, de la bordure et de la marge.

### Propriétés de fond 

Ces propriétés permettent de définir un arrière-plan pour l'élément HTML. Voici quelques-unes des propriétés les plus utilisées :

1. **`background-color` :** Cette propriété définit la couleur de l'arrière-plan de l'élément HTML. Vous pouvez utiliser des noms de couleurs, des codes hexadécimaux, ou des valeurs `rgb` pour définir la couleur.

2. **`background-image` :** Cette propriété définit l'image de fond de l'élément HTML. Vous pouvez utiliser une image locale ou une image distante. Par exemple, `background-image: url("image.jpg");` définit l'image de fond de l'élément HTML à l'image `image.jpg` qui se trouve dans le même dossier que le fichier CSS. `background-image: url("https://image.jpg");` définit l'image de fond de l'élément HTML à l'image `image.jpg` qui se trouve à l'adresse `https://image.jpg`.

3. **`background-size` :** Cette propriété définit la taille de l'image de fond de l'élément HTML. Elle peut être définie en pixels, en pourcentage ou en d'autres unités de mesures (em, rem, ...). Par exemple, `background-size: 100px 100px;` définit la taille de l'image de fond de l'élément HTML à 100 pixels de largeur et 100 pixels de hauteur. `background-size: 100% 100%;` définit la taille de l'image de fond de l'élément HTML à 100% de largeur et 100% de hauteur.

4. **`background-repeat` :** Cette propriété définit si l'image de fond de l'élément HTML doit être répétée ou non. Par défaut, l'image de fond de l'élément HTML est répétée. Si vous souhaitez que l'image de fond de l'élément HTML ne soit pas répétée, vous pouvez utiliser `background-repeat: no-repeat;`.

5. **`background-position` :** Cette propriété définit la position de l'image de fond de l'élément HTML. Elle peut être définie en pixels, en pourcentage ou en d'autres unités de mesures (em, rem, ...). Par exemple, `background-position: 100px 100px;` définit la position de l'image de fond de l'élément HTML à 100 pixels de distance du haut et 100 pixels de distance de la gauche. `background-position: 100% 100%;` définit la position de l'image de fond de l'élément HTML à 100% de distance du haut et 100% de distance de la gauche.

6. **`background-attachment` :** Cette propriété définit si l'image de fond de l'élément HTML doit défiler avec le reste de la page ou non. Par défaut, l'image de fond de l'élément HTML défiler avec le reste de la page. Si vous souhaitez que l'image de fond de l'élément HTML ne défiler pas avec le reste de la page, vous pouvez utiliser `background-attachment: fixed;`.

### Contrôle de flux de page (display)

La propriété `display` permet de contrôler le flux de page. Elle permet de définir si un élément HTML doit être affiché comme un bloc ou en ligne. Le choix de la valeur display influence la façon dont l'élément interragit avec les autres éléments. Voici quelques-unes des valeurs les plus utilisées :

1. **`display: block;` :** 
    - L'élément HTML est affiché comme un bloc. 
    - Il commence sur une nouvelle ligne et occupe toute la largeur disponible.
    - Les propriétés `width`, `height`, `margin`, `padding` peuvent être utilisées.

2. **`display: inline;` :**
    - L'élément HTML est affiché comme une ligne.
    - Il commence sur la même ligne que l'élément précédent et se termine sur la même ligne que l'élément suivant.
    - Les propriétés `width`, `height`, `margin`, `padding` ne peuvent pas être utilisées.

3. **`display: inline-block;` :**
    - L'élément HTML est affiché comme une ligne.
    - Il commence sur la même ligne que l'élément précédent et se termine sur la même ligne que l'élément suivant.
    - Les propriétés `width`, `height`, `margin`, `padding` peuvent être utilisées.

4. **`display: none;` :**
    - L'élément HTML n'est pas affiché.
    - Il n'occupe pas d'espace sur la page.
    
5. **`display: flex;` :**
    - L'élément HTML devient un conteneur flexible, permettant de créer des mises en page réactives et adaptatives.

6. **`display: grid;` :**
    - L'élément HTML devient un conteneur de grille, permettant de créer des mises en page basé sur une grille, en utilisant des propriétés associés. 

Ces valeurs de la propriété display sont essentielles pour contrôler la mise en page et la présentation des élements HTML dans une page web, en leur donnant différents comportements de rendu en fonction des besoins de conception. 