# Exercice 

Contexte : Vous travaillez sur une base de données pour une entreprise d'organisation d'événements. La base de données actuelle, sous format CSV, contient des informations détaillées sur les événements organisés, y compris les détails des participants, les types d'événements, les lieux, et les dates. Les données actuelles ne sont pas structurées de manière optimale et présentent des redondances.
Tâche : Votre objectif est de restructurer cette base de données pour atteindre la Troisième Forme Normale (3NF). Vous devez éliminer les redondances et organiser les données de manière logique et efficace.
Étapes :
1. Analyser le fichier CSV fourni pour identifier les anomalies de normalisation.
2. Concevoir un plan de normalisation pour structurer correctement la base de données. 
3. Proposer de nouvelles structures de tables qui respectent les normes de normalisation.

## 1. Analyse du fichier CSV

- Redondance des données : Les informations sur les évènements (Type, Lieu, Date) sont répétées pour chaque participant. Aussi, les participants sont répétés pour chaque évènement auquel ils participent.
- Manque d'atomicité : Chaque enregistrement contient à la fois des informations sur les évènements et des informations sur les participants. Il faudrait séparer ces informations dans des tables différentes.

## 2. Plan de normalisation

- Créer une table "Évènements" avec les colonnes suivantes :
  - ID (Clé primaire)
  - Type
  - Lieu
  - Date

- Créer une table "Participants" avec les colonnes suivantes :
    - ID (Clé primaire)
    - Nom
    - Email

- Créer une table "Participations" avec les colonnes suivantes :
    - ID (Clé primaire)
    - ID de l'évènement (Clé étrangère)
    - ID du participant (Clé étrangère)

## 3. Nouvelles structures de tables

- Table "Évènements" :
``` EvenementID,TypeEvenement,Date,Lieu
E01,Conférence,2021-09-15,Centre des Congrès
E02,Séminaire,2021-09-20,Hôtel de Ville 
```

- Table "Participants" :
``` ParticipantID,NomParticipant,EmailParticipant
P01,Jean Dupont,jean.dupont@email.com
P02,Marie Curie,marie.curie@email.com
P03,Albert Einstein,albert.einstein@email.com
P04,Isaac Newton,isaac.newton@email.com
```

- Table "Participations" :
``` EvenementID,ParticipantID
E01,P01
E02,P02
E02,P03
E01,P04
```

### Explications

- 1NF : Chaque table a des attributs atomiques. Chaque enregistrement est unique. 
- 2NF : Chaque table a une clé primaire. Chaque attribut est dépendant de la clé primaire.
- 3NF : Chaque table a une clé primaire. Chaque attribut est dépendant de la clé primaire. Chaque attribut ne dépend pas d'un autre attribut.


    
