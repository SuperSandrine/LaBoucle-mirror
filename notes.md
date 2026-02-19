# Notes

## codeberg et github
github est un miroir pour accéder à keystatic et netlify
### ordre des actions
#### un script
```json
"scripts": {
  "push": "git push origin main && git push github main"
}
```
 pour info:  L'utilisation de && signifie que si le premier push (vers Codeberg) échoue pour une raison quelconque (panne de serveur, conflit), le second vers GitHub ne se lancera pas. C'est une sécurité pour éviter que tes deux dépôts ne soient plus synchronisés.

#### Le flux de travail final
Désormais, ton terminal devient ton centre de commande :

1 -Tu développes tes changements.
2 -git add .
3 -git commit -m "Ajout d'une œuvre"
4 -npm run push (Et hop, les deux serveurs sont mis à jour !)

#### synchronisation avec artiste
Quand l'artiste va utiliser Keystatic, il va créer des commits directement sur GitHub. Ton dépôt local (sur ton PC) et ton dépôt Codeberg seront alors "en retard" par rapport à GitHub.

Ma recommandation : Avant de commencer à travailler ou avant de faire ton npm run push, prends l'habitude de faire un : 
```js
git pull github main
```

Cela rapatrie les modifications de l'artiste sur ton PC. Ensuite, ton npm run push renverra tout ça vers Codeberg pour que ta sauvegarde soit bien à jour.




## convention de nommage
z-0   : Fond (backgrounds)
z-10  : Contenu normal
z-20  : Éléments au-dessus (cards, sections)
z-30  : Overlays (modals, dropdowns)
z-40  : Navigation fixe
z-50  : Header/Menu burger
z-[100] : Tooltips/notifications
