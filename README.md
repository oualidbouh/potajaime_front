## Installation du poste

L'environnement de développement est encapsulé dans une machine virtuelle ubuntu, basée sur
https://github.com/jhipster/jhipster-devbox

1. Télécharger et installer **Docker4WL** (virtualbox + vagrant + conf spécifiques à Worldline) sur https://kazan.atosworldline.com/share/data/docker/installers/windows/docker4wl-setups/stables

2. Télécharger le zip du projet sags https://gitlab.kazan.atosworldline.com/sags/sags/repository/archive.zip?ref=dev

3. L'extraire dans un dossier pérène (ex C:/Projets/sags)

4. Aller dans sags/common/devbox

5. Sur une console (cmd ou console2) lancer et attendre (~40 min pour le téléchargement de l'OS) la fin de:
```
vagrant up
```
  Si la commande échoue avec ce message : 
````
The version of powershell currently installed on this host is less than the required minimum version. 
Please upgrade or installed the installed version of powershell to the minimum required version and run the command again

  Installed version : N/A
  Minimum required version : 3
````

   Alors de ce cas pense à télécharger et installer la version de 4.5 de .NET depuis https://www.microsoft.com/en-us/download/confirmation.aspx?id=30653 pour pallier à ce problème.

6. Quand le vagrant up est terminé, ouvrir virtualbox et faire clic droit > Afficher sur la VM devbox_default_xxxxxxxxxxx
**vagrant up**
