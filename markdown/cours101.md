<!-- Faire un titre en Markdown -->
# Cours sur le Markdown

<!-- Faire un sous-titre -->
## Qu'est-ce que le Markdown ? 

Le Md est un language de balisage léger. C'est un système de formatage de texte qui permet à l'utilisateur d'écrire du contenu en utilisant une syntaxe simple et lisible, puis de le convertir en HTML ou d'autres formats de documentation. Le Md a été crée par John Gruber en 2004 avec l'objectif de faciliter l'écriture pour le web en offrant une alternative plus simple et plus intuitive à la rédaction directe en HTML. 

La syntaxe de Md est conçue pour être facile à écrire et à lire, même sous forme brute, tout en permettant de définir la structure du contenu, telle que les titres, les listes, les liens, les images, les citations, etc... 

Le Md est souvent utilisé dans des contextes où une mise en forme simple et rapide est nécessaire, comme la rédaction de documents, de courriels, de pages de documentation, de messages sur les plateformes de collaborations, et même pour la rédaction de contenu de blog et d'articles en ligne. De nombreux sites et plateformes, y compris Github et Gitlab, Reddit et Discord, prennent en charge la syntaxe Md pour la création de contenu. 

## Mise en forme 

Si je souhaite passer à la ligne, j'utilise un double espace, suivi d'un retour à la ligne. 

Si je souhaite passer à un nouveau paragraphe, je saute simplement à la ligne. 

Je peux créer des séparateurs en enchaînant trois tirets aprés avoir sauté une ligne. 

---

## Balises importantes

Le Md est un language de balisage, cela signifie que si je veux l'utiliser, je dois entourer mon texte de balises spécifiques au langage : 

Si je souhaite mettre en **gras**, j'utilise la double étoile (elles doivent être collés au mot).  
Si je souhaite mettre mon texte en *italique*, j'utilise des étoiles simples.  
Le texte barré se fait avec deux tildes.  
Le texte souligné n'est pas possible en md, <u> contrairement au HTML.</u>

Si je souhaite faire une citation, je commence ma ligne par un chevron fermant (>) suivi d'un espace. 
Une citation peut faire plusieurs lignes. 

## Les listes

Je peux faire une liste en utilisant simplement les tiret, les sous listes sont possibles également grâce à **l'incrémentation** :  
- objet 1
- objet 2
    - sous-objet 1
    - sous objet 2 

Je peux également faire des listes numériques, en précisant le chiffre avec le point :  
1. objet 1
2. objet 2 
3. objet 3 

## Caractères d'échappement

Parfois j'ai besoin d'utiliser des caractères spéciaux, en dehors de mon interprétation par le Md, je peux les faires échapper du code grâce au **backlash** (\), je peux ainsi afficher ceci par exemple 

## Insérer du code en Md

Le Md nous permet d'ajouter du code, en le balisant entre backticks. 

On peut également préciser le langage :  

```javascript
let x, y; 
function function {
    while (x<y) {
        consol.log("error");
    }
}
```

## Ajout de liens et d'images

Si je souhaite ajouter un lien à mon fichier Md, il me faut utiliser la syntaxe suivante : 

Le texte du lien est entouré de crochets [], et pour les liens inclus au fil du texte, l'URL est entourée de parenthèses ().

[Texte du lien](https://www.google.com/)

Pour une image, c'est la même chose, je rajoute juste un point d'éxclamation au début de ma synthaxe. 

## Les tableaux 

Il est également possible de faire des tableaux. Pour ceci, je sépare mes colones par des pipes, et mes lignes par des tirets.  

| Aligné à gauche  | Centré          | Aligné à droite |
|:-|:-:|-:|
| Aligné à gauche  |   ce texte        |  Aligné à droite |
| Aligné à gauche  | est             |   Aligné à droite |
| Aligné à gauche  | centré          |    Aligné à droite |


