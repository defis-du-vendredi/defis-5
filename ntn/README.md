# Defis 5
# Ceci est le depot pour les défis du vendredi.

## Comment l'utiliser:

### Allez sur la page du dépot github.

- Sur la page du dépot github, cliquez sur `Fork` en haut à droite:

  ![](https://imgur.com/YQm92Rw.jpg)

- Cliquez ensuite sur `Create Fork`:

  ![](https://imgur.com/SKCaw0H.jpg)

- Une fois sur votre fork du dépot, clonez le avec le terminal:

  ![](https://imgur.com/4DK7xQt.jpg)

  ![](https://imgur.com/kVMNpWp.jpg)

```
//Ceci est une exemple
git clone git@github.com:adriengou/defis-test.git
```

### Ouvrez votre terminal.

- Créez une branche à votre nom:

  ```
  git branch VotreNom
  ```

- Positionnez-vous sur cette branche:

  ```
  git checkout VotreNom
  ```

- Mettez votre branche à jour:

  ```
  git pull
  ```

- Envoyez vos modifications avec un commit:

  ```
  git add fichierModifié
  git commit -m message du commit
  git push --set-upstream origin VotreNom
  ```

## Une fois le défis terminé:

### Allez sur votre fork du depot sur github.

- Sur la page du dépot de github, cliquez sur `Compare & pull request`:

  ![](https://imgur.com/ydYMRaJ.jpg)

- Ajoutez un commentaire dans la zone de texte et cliquez sur `Create pull request`:

  ![](https://imgur.com/hf5hxYh.jpg)

- Cliquez sur le bouton `Merge pull request`:

  ![](https://imgur.com/N4Fh8hw.jpg)

- Puis sur `Confirm merge`:

  ![](https://imgur.com/5uWTlJH.jpg)

- Puis encore sur `Delete branch`:

  ![](https://imgur.com/coAKfFT.jpg)

### Retournez sur votre fork du dépot sur github pour la mettre à jour par rapport au dépot original.

- Cliquez sur `Fetch upstream` puis sur `Fetch and merge`:

![](https://imgur.com/IGkr0F9.jpg)

![](https://imgur.com/VSd2rdN.jpg)

## Maintenant que les fichiers sont envoyé sur le dépot github, il faut mettre à jour le dépot local et supprimer la branche.

### Retour sur le terminal

- Positionnez-vous sur la branche main:

```
git checkout main
```

- Mettez à jour la branche:

```
git pull
```

- Supprimmez la branche à votre nom:

```
git branch -d VotreNom
```
