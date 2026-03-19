# La Boucle de la Boucle

## About the Project

Ce projet est le site vitrine de la compagnie **La Boucle de la Boucle**.

Il a pour objectif de présenter :
- la compagnie 
- les spectacles du répertoire ;
- les stages et ateliers proposés par la compagnie;
- un inventaire des dates à venir et passées;
- les informations de contact ;
- un espace d'edition de contenu avec Keystatic.

Le site est developpe avec **Astro**, **Tailwind CSS**, **React**, **Markdoc** et **Keystatic**, avec un deploiement prevu sur **Netlify**.

[![Astro][Astro.js]][Astro-url]
[![Tailwind CSS][Tailwind.css]][Tailwind-url]
[![React][React.js]][React-url]
[![Markdoc][Markdoc.js]][Markdoc-url]
[![Keystatic][Keystatic.js]][Keystatic-url]
[![Netlify][Netlify.js]][Netlify-url]

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Depuis la racine du projet :

```sh
npm install
```

### Run the Project

Pour lancer le site en local :

```sh
npm run dev
```

Le serveur de developpement est generalement disponible sur `http://localhost:4321`.

## Usage

### Useful Commands

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de developpement |
| `npm run build` | Genere le build de production |
| `npm run preview` | Previsualise le build localement |
| `npm run astro -- --help` | Affiche l'aide de la CLI Astro |
| `npm run keystatic` | Lance la CLI Keystatic |
| `npm run push` | Push vers `origin/main` puis `github/main` |

### Project Structure

```text
site-LaBoucleDeLaBoucle/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── dates/
│   │   ├── spectacles/
│   │   └── stages/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── keystatic.config.ts
└── package.json
```

### Content Management

Le contenu editorial est defini dans [src/content/config.ts](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/src/content/config.ts) et organise en trois collections :

- `spectacles`
- `dates`
- `stages`

Les contenus sont stockes dans :
- [src/content/spectacles](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/src/content/spectacles)
- [src/content/dates](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/src/content/dates)
- [src/content/stages](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/src/content/stages)

### Admin Interface

L'edition passe par Keystatic :
- `/admin` affiche une page d'entree et redirige vers l'interface ;
- `/keystatic` correspond a l'interface d'administration ;
- l'admin est desactivee en production.

La configuration se trouve dans [keystatic.config.ts](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/keystatic.config.ts).

## Roadmap

- [ ] ameliorer l'experience d'edition Keystatic pour les contenus
- [ ] finaliser et fiabiliser le parcours d'administration
- [ ] nettoyer les contenus et collections non utilises
- [ ] continuer l'amelioration du design et des pages du site

## Contributing

Les contributions sont les bienvenues.

Pour contribuer :

1. cloner le depot ;
2. creer une branche de travail ;
3. effectuer les modifications ;
4. verifier que le projet build correctement ;
5. proposer les changements a la revue.

Commande utile de verification :

```sh
npm run build
```

## License

Aucune licence n'est definie pour le moment dans ce depot.

## Contact

Compagnie **La Boucle de la Boucle**

- Email : `laboucledelaboucle@gmail.com`
- Page contact : [src/pages/contact.astro](/Users/sandrine/Developer/projet 26 LaBoucle/site-LaBoucleDeLaBoucle/src/pages/contact.astro)

## Acknowledgement

Merci aux outils et bibliotheques utilises dans ce projet :

- [ReadMe template](https://github.com/othneildrew/Best-README-Template)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)

- [Astro](https://astro.build/)
- [Keystatic](https://keystatic.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- [Netlify](https://www.netlify.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[Astro.js]: https://img.shields.io/badge/astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/
[Tailwind.css]: https://img.shields.io/badge/tailwind_css-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[React.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Markdoc.js]: https://img.shields.io/badge/markdoc-000000?style=for-the-badge&logo=markdown&logoColor=white
[Markdoc-url]: https://markdoc.dev/
[Keystatic.js]: https://img.shields.io/badge/keystatic-1F1F1F?style=for-the-badge&logo=github&logoColor=white
[Keystatic-url]: https://keystatic.com/
[Netlify.js]: https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://www.netlify.com/
