Pour modéliser la base de données d'un hôpital selon les informations fournies, nous allons suivre les étapes indiquées :

### 1. Définir l'ensemble des propriétés de ce système

- **Employés (Docteurs et Infirmières)**
  - Numéro d'employé (unique)
  - Nom
  - Prénom
  - Adresse
  - Numéro de téléphone

- **Services**
  - Code du service (unique)
  - Nom du service
  - Bâtiment
  - Directeur (Docteur)

- **Salles**
  - Numéro de salle (unique dans un service)
  - Surveillant (Infirmier)
  - Nombre de lits
  - Code du service (clé étrangère)

- **Docteurs**
  - Spécialité
  - (Autres attributs hérités d'Employé)

- **Infirmiers**
  - Rotation
  - Salaire
  - Code du service (affectation)
  - (Autres attributs hérités d'Employé)

- **Patients**
  - Numéro du patient (unique)
  - Nom
  - Prénom
  - Adresse
  - Numéro de téléphone
  - Numéro de lit
  - Diagnostic
  - Docteur traitant (Numéro d'employé du docteur)

### 2. Définir les entités de ce système

- **Employé** (Entité généralisée pour Docteur et Infirmier)
- **Docteur**
- **Infirmier**
- **Service**
- **Salle**
- **Patient**

### 3. Définir le MCD (Modèle Conceptuel de Données)

- **Employé**
  - Numéro d'employé (Clé primaire)
  - Nom
  - Prénom
  - Adresse
  - Numéro de téléphone

- **Docteur (Hérite d'Employé)**
  - Spécialité
  - Dirige 0 ou 1 service

- **Infirmier (Hérite d'Employé)**
  - Rotation
  - Salaire
  - Affecté à 1 service

- **Service**
  - Code du service (Clé primaire)
  - Nom
  - Bâtiment
  - Directeur (Numéro d'employé du docteur)

- **Salle**
  - Numéro de salle (Clé primaire)
  - Nombre de lits
  - Surveillant (Numéro d'employé de l'infirmier)
  - Appartient à 1 service (Code du service)

- **Patient**
  - Numéro du patient (Clé primaire)
  - Nom
  - Prénom
  - Adresse
  - Numéro de téléphone
  - Numéro de lit
  - Diagnostic
  - Soigné par 1 docteur (Numéro d'employé du docteur)

#### Relations :

- **Docteur-Service** : Un docteur peut diriger au plus un service. Un service est dirigé par un docteur.
- **Infirmier-Service** : Un infirmier est affecté à un seul service. Un service peut avoir plusieurs infirmiers.
- **Service-Salle** : Un service contient plusieurs salles. Une salle appartient à un seul service.
- **Patient-Docteur** : Un patient est soigné par un docteur. Un docteur peut soigner plusieurs patients.

Pour visualiser ces relations, vous pouvez utiliser un outil de modélisation de base de données pour créer le MCD, en représentant chaque entité avec ses attributs et les liens entre elles.