## Backpack Factory

https://bp-factory.myshopify.com/

Password : bpfactory

Repo Github :  

**Environnement et technologies**
 - Projet Shopify développé avec Tailwind
 - Theme custom
 - HTML, CSS, JS, Liquid
 - Swiper
 - Grid

**Structure du repo**
- Un seul template qui correspond à celui de la home (index.json)
- Un fichier Tailwing configuré aux normes de la maquette
- Une feuille de style par composant
- Une feuille de style globale où sont importées les feuilles de style de chaque composant et contenant des classes utilitaires
- Un fichier theme.js contenant :
	- la fonction pour montrer le menu panel, 
	- la fonction pour toggle le check de la checkbox du newsletter form, 
	- l'initialisation du slider produits en mobile, 
	- la fonction de add to cart

**Composants du theme**

*Snippets*

Création de snippets pour les composants réutilisables.
 1. Icon
	 
   Regroupe tous les icons en svp utilisés sur la maquette 
 
 2. Logo
	 
   Regroupe les deux logos utilisés sur le site : le "main" utilisé dans le header et le "secondary" utilisé dans le footer
 
 3. Newsletter
	
  Snippet contenant le code du newsletter form, appelé dans le footer
 
 4. Product card
	 
   Snippet contenant le code d'une product card qui permet d'être rendue sur la product grid de la homepage

*Sections*

 1. header
	 
   Section sans pressets, appelée directement dans le theme.liquid
 
 2. footer
	 
   Section sans pressets, appelée directement dans le theme.liquid. Le snippet de newsletter y est appelé, ainsi que le snippet logo (avec le secondary logo). 
	 
   Le schema permet de :
	 
   - choisir le titre et le sous-titre du newsletter form
	 - choisir le titre des navigations
	 - de choisir les 3 navigations
 
 3. home_banner
	 
   Section sans pressets appelée dans le template index.json.
	 
   Le schema permet de :
	 
   - choisir la photo (ratio différent appliquée en css en desktop et en mobile)
	 - choisir le titre et le sous-titre
	 - choisir la tagline. Le outline du texte est fait en css, le rendu n'est pas conforme à la maquette du fait de la police. Idéalement, il faudrait une autre police avec laquelle les lettres seraient désignées différemment.
 
 4. menu-panel
	
  Section sans pressets appelée directement dans le theme. Le menu panel est toggle grâce à une fonction qui se trouve dans theme.js.
	
  Le schema permet de choisir le titre et la navigation.
 
 5. product-grid
	
  Cette section est appelée dans dans le template index.json.
	
  La grid se transforme en slider en mobile.
	
  Le schema permet de :
	
  - choisir la collection à montrer en limitant le nombre d'articles
	- choisir le title, le sous-titre
	- choisir le titre du lien et le lien
