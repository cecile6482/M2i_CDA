# Les unités de mesure en CSS 

## 1. Pixel (px)
- **Définition** : le pixel est une unité de mesure qui correspond à un point sur un écran d'ordinateur. Il est utilisé pour définir des dimensions fixes. Les tailles en pixels ne changent pas en fonction de la taille de l'écran de l'utilisateur.

```css
p {
  font-size: 16px;
}
```

## 2. Point (pt)
- **Définition** : le point est une unité de mesure qui correspond à 1/72e de pouce. Il est utilisé pour définir des dimensions fixes. Les tailles en points ne changent pas en fonction de la taille de l'écran de l'utilisateur.

```css
p {
  font-size: 12pt;
}
```

## 3. Em (em)
- **Définition** : l'em est une unité de mesure qui correspond à la taille de la police de l'élément parent. Il est utilisé pour définir des dimensions relatives. Les tailles en em changent en fonction de la taille de la police de l'élément parent. Par exeple, si la taille de la police de l'élément parent est de 16px, 1em correspondra à 16px. Si la taille de la police de l'élément parent est de 20px, 1em correspondra à 20px. 

```css
p {
  font-size: 1.2em;
}
```

## 4. Rem (rem)
- **Définition** : le rem est une unité de mesure qui correspond à la taille de la police de l'élément racine (la balise `html`). Il est utilisé pour définir des dimensions relatives. Les tailles en rem changent en fonction de la taille de la police de l'élément racine. Par exemple, si la taille de la police de l'élément racine est de 16px, 1rem correspondra à 16px. Si la taille de la police de l'élément racine est de 20px, 1rem correspondra à 20px. 

```css
p {
  font-size: 1.2rem;
}
```

## 5. Pourcentage (%)
- **Définition** : le pourcentage est une unité de mesure qui correspond à un pourcentage de la taille de l'élément parent. Il est utilisé pour définir des dimensions relatives. Les tailles en pourcentage changent en fonction de la taille de l'élément parent. Par exemple, si la taille de l'élément parent est de 16px, 100% correspondra à 16px. Si la taille de l'élément parent est de 20px, 100% correspondra à 20px. 

```css
p {
  font-size: 120%;
}
```

## 6. Viewport Height (vh) et Viewport Width (vw)
- **Définition** : le viewport height et le viewport width sont des unités de mesure qui correspondent respectivement à la hauteur et à la largeur de la fenêtre du navigateur. Ils sont utilisés pour définir des dimensions relatives. Les tailles en viewport height et viewport width changent en fonction de la taille de la fenêtre du navigateur. Par exemple, si la hauteur de la fenêtre du navigateur est de 1000px, 100vh correspondra à 1000px. Si la largeur de la fenêtre du navigateur est de 800px, 100vw correspondra à 800px. 

```css
p {
  font-size: 3vh;
}
```



