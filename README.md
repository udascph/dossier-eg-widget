# Widgets Experience Builder

Ce repo contient la version compilée des widgets Experience Bilder.

## Prerequis pour compiler les widgets
 - Version Experience Builder locale
 - Code source des widgets

## Étapes pour compiler les widgets

1. Utiliser un terminal pour aller dans le dossier  
**arcgis-experience-builder**/client/your-extension/widgets

2. Exécuter la commande suivante:  
`npm run build:prod`

3. Le code compilé des widgets est généré dans le dosser  
**arcgis-experience-builder**/client/dist-prod/widgets/exp-builder-widgets

## Étapes pour publier les widgets avec GitHub
Le widget doit être publié sur un serveur d'hébergement (comme une page web statique) pour l'utiliser dans ArcgGIS Entreprise. Dans notre cas, on utilise "Pages" de GitHub. On peut également utiliser un serveur IIS ou un autre serveur d'hébergement de pages web statiques. 

1. Envoyer le code compilé sur le repo GitHub
2. Dans GitHub, aller sur "Settings", ensuite "Pages"
3. Choisir la branche et et publier la page
4. Noter que ça peut prendre environ 10 minutes pour que la page soit activée

## Étapes pour publier un widget sur le portail ArcGIS Entreprise
1. Sur le portail, choisir "Content" et ensuite "New item"
2. Choisir "Application" et ensuite "Experience builder widget"
3. Indiquer le chemin vers le fichier manifest.json sur le serveur d'hébergemetnt (GitHub Page)
4. Choisir un nom pour le widget et compléter la décrispation
5. Partager le widget dans les groupes ciblés du portail
6. Le widget est maintenant disponible dans Experience Builder sur le portail ArcGIS Entreprise

## Actualiser les widgets
1. Recompiler les widgets
2. Pousser le code compilé vers la branche correspondante du repo GitHub


## Références
Pour plus de détails sur la mise en production des widgets voir les articles suivants :

* [Add Experience Builder Custom Widgets In ArcGIS Enterprise](https://www.esri.com/arcgis-blog/products/arcgis-enterprise/developers/add-experience-builder-custom-widgets-in-arcgis-enterprise)
* [Add custom widgets](https://doc.arcgis.com/en/experience-builder/11.0/configure-widgets/add-custom-widgets.htm)
