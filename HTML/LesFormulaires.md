# Les formulaires en HTML

Pour ouvrir et fermer un formulaire, on applique les balises `<form></form>`. Cette balise contiendra beaucoup d'attributs important pour notre JavaScript. Mais nous allons d'abord voir le placement des inputs en HTML:

## Les inputs

En HTML, les éléments `<input>` sont utilisés pour collecter des données entrées par les utilisateurs. Il existe plusieurs types d'input couramment utilisés pour différents types de données et d'interaction.
Si je veux rendre l'un de mes inputs **obligatoire**, j'utilise l'attribut `required`.

1. **Texte (`text`):** Ce type d'input permet aux utilisateurs de saisir du texte libre, comme des noms, des adresses, des commentaires, etc.

```html
<input type="text" placeholder="Votre nom" name="nom">
```

2. **Mot de passe (`password`):** Utilisé pour collecter des mots de passe, ce type masque les caractères saisis

```html
<input type="password" placeholder="Votre mot de passe" name="password">
```

3. **Cases à cocher (`checkbox`):** Les cases à cocher permettent aux utilisateurs de sélectionner plusieurs options parmi un groupe d'éléments.

```html
<input type="checkbox" name="sports" value="football"> Football
<input type="checkbox" name="sports" value="basketball"> Basketball
```

Le name servira à regrouper des checkbox autour d'une thématique commune. C'est l'attribut value qui nous retourna la valeur de nos checkboxes indépendantes

4. **Boutons radio (`radio`):** Les boutons radio permettent aux utilisateurs de ne sélectionner qu'une seule option parmi un groupe d'éléments. C'est là aussi l'attribut `name` qui permet de rattacher les éléments entre eux

```html
<input type="radio" name="sports" value="football"> Football
<input type="radio" name="sports" value="basketball"> Basketball
```

5. **E-mail (`email`):** Utilisé pour collecter des adresses e-mail, il vérifie également la validité de la syntaxe de l'adresse saisie.

```html
<input type="email" placeholder="Votre email" name="email">
```

6. **Date (`date`):** Utilisé pour collecter des dates, il affiche un sélecteur de date.

```html
<input type="date" name="date">
```

7. **Numérique (`number`):** Ce type d'input permet aux utilisateurs de saisir des valeurs numériques.

```html
<input type="number" name="quantite" min="0" max="10" step="1">
```

8. **URL (`url`):** Utilisé pour collecter des URL (adresses de site web), il vérifie également la validité de la syntaxe de l'URL saisi.

```html
<input type="url" placeholder="Votre lien" name="URL_web">
```

9. **Téléphone (`tel`):** Utilisé pour collecter des numéros de téléphone, il vérifie également la validité de la syntaxe du numéro saisi.

```html
<input type="tel" placeholder="Votre numéro de téléphone" name="telephone">
```

10. **Fichier (`file`):** Utilisé pour collecter des fichiers, il affiche un bouton permettant de sélectionner un fichier sur l'ordinateur de l'utilisateur.

```html
<input type="file" name="fichier">
```

11. **Bouton (`button`):** Utilisé pour créer un bouton cliquable.

```html
<input type="button" value="Cliquez ici" name="boutton">
```
>> Pour envoyer un formulaire, on utilise un bouton de type `submit`:

```html
<input type="submit" value="Envoyer" name="boutton">
```
>> Pour réinitialiser un formulaire, on utilise un bouton de type `reset`:

```html
<input type="reset" value="Réinitialiser" name="boutton">
```

### Les labels 

Les labels sont des éléments HTML qui permettent de décrire un input. Ils sont très importants pour l'accessibilité de votre site web. Ils permettent aux personnes malvoyantes de comprendre le fonctionnement de votre formulaire. Pour lier un label à un input, on utilise l'attribut `for` sur le label et l'attribut `id` sur l'input. Les valeurs de ces attributs doivent être identiques.

```html 
<label for="nom">Nom</label>
<input type="text" id="nom" name="nom">
```
### Autres attributs communs

- 'autofocus' : Permet de mettre le focus sur un input au chargement de la page

- 'pattern' : Permet de définir une expression régulière pour valider le contenu d'un input

- 'maxlength' : Permet de définir le nombre maximum de caractères autorisés dans un input

- 'size' : Permet de définir la taille d'un input

- 'readonly' : Permet de rendre un input en lecture seule

- 'value' : Permet de définir une valeur par défaut pour un input


### La liste de selection 'select'

Pour afficher une liste de choix, on utilise la balise `<select></select>`. Cette balise contiendra des balises `<option></option>` qui seront les choix possibles. Pour lier un label à un select, on utilise l'attribut `for` sur le label et l'attribut `id` sur le select. Les valeurs de ces attributs doivent être identiques.

```html
<label for="pays">Pays</label>
<select id="pays" name="pays">
    <option value="france">France</option>
    <option value="espagne">Espagne</option>
    <option value="italie">Italie</option>
</select>
```

### La boite de texte 'textarea'

Pour afficher une boite de texte, on utilise la balise `<textarea></textarea>`. Cette balise contiendra le texte par défaut de la boite. Pour lier un label à un textarea, on utilise l'attribut `for` sur le label et l'attribut `id` sur le textarea. Les valeurs de ces attributs doivent être identiques.

```html
<label for="message">Message</label>
<textarea id="message" name="message">Votre message</textarea>
```





