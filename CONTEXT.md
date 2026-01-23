# Contexte du Projet : Site Vitrine 

## Stack Technique
- **Framework** : Astro (pour les pages statiques).
- **CMS** : Keystatic (pour l’auto-édition via Codeberg).
- **Design** : Tailwind CSS. (animation: GSAP ou daisy ou JS pur)
- **Hébergement** : Netlify (prototype) → Infomaniak (final).
- **Dépôt** : Codeberg (pour le contenu en Markdown).

## Structure du Projet
site-*/
├── src/
│   ├── pages/           # Pages Astro
│   ├── components/      # Composants réutilisables
│   └── content/         # Contenu (géré par Keystatic)
├── keystatic.config.ts  # Configuration Keystatic
├── package.json
└── CONTEXT.md           # Ce fichier !


## Objectifs
- Créer un site **auto-éditable** par des artistes (sans compétences techniques).
- **Ton décalé et immersif** (humour grinçant, visuels provocateurs).
- **Sans PHP**, léger et éco-responsable.

## Contraintes
- Budget : 2 500 € max (création) + < 200 €/an (hébergement).
- Hébergement éthique (pas de GAFAM).
- Les artistes doivent pouvoir modifier :
  - Le calendrier des spectacles/ateliers (1x/mois).
  - Les fiches des spectacles (4x/an).

