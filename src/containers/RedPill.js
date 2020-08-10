import React from "react";
import MainTitle from "../components/MainTitle";
import Image from "../components/Image";
import ShellTitle from "../components/ShellTitle";
import ShellText from "../components/ShellText";
import Important from "../components/Important";
import Italic from "../components/Italic";
import ddos1 from "../ddos1.png";
import ddos2 from "../ddos2.png";
import ddos3 from "../ddos3.png";
import mitm from "../mitm1.png";
import csrf1 from "../attaqueCSRF.png";
import lulz from "../forTheLulz.png";

const RedPill = () => {
  return (
    <div>
      <MainTitle>take the red pill</MainTitle>
      <ShellText>
        <Italic>le voyage continue...</Italic>
      </ShellText>
      <ShellTitle>Quelle est la prochaine étape ?</ShellTitle>
      <ShellText>
        Maintenant que tu connais tout les secrets des malwares qui t'entoure
        que dirais-tu d'apprendre à mieux connaître les differentes techniques
        utilisées par les <Important>h4ck3rs</Important> ?
      </ShellText>
      <ShellText>
        Donc, sur cette page tu apprendras ce qu'est une attaque, les différents
        types d' attaques et toutes les méthodes qui leurs sont associées.
      </ShellText>
      <ShellTitle>Une attaque qu'est ce que c'est ?</ShellTitle>
      <ShellText>
        Sur cette page lorsque l'on va parler d'attaque on parlera en faite de
        méthode, de manière d'accomplir un hack. En tant que futur développeur
        web, certaines attaques te concerneront plus que d'autres. Nous
        essayerons d'entrer un peu plus dans les détails pour celles là.
      </ShellText>
      <ShellTitle>~/1-l'attaque DDOS</ShellTitle>
      <Image src={ddos1} alt="schéma basique du principe d'une attaque DDOS" />
      <ShellText>
        L'attaque <Important>DDOS</Important> (
        <Italic>distributed denial of service</Italic>) vise à saturer de
        requêtes un site pour qu'il ne soit plus en mesure de répondre. Dans les
        faits, il faut une armée d'ordinateurs pour accomplir une telle attaque
        mais c'est là que les notions abordées dans la page précédente vont te
        servir. Tu te rappelles que certains malwares permettent aux hackers de
        prendre le contrôle de ta machine ou d'utiliser ses ressources, et bien
        grâce à cela le hacker va se créer une armée d'ordinateurs dit{" "}
        <Important>"zombie"</Important> (car il ne sont plus sous le contrôle de
        leur propriétaire). Puis il va tout simplement envoyer des requêtes en
        continue depuis les ordinateurs <Important>"zombie"</Important> (connu
        aussi sous le nom <Important>"botnet"</Important>) jusqu'à exploser le
        nombre de requêtes autorisées du serveur ou saturer sa bande passante.
      </ShellText>
      <Image
        src={ddos2}
        alt="schéma plus précis du fonctionement d'une attaque DDOS"
      />
      <ShellText>
        En 2010 le groupe de hackers <Important>"Anonymous"</Important> a
        massivement utiliser l'attaque <Important>DDOS</Important> pour son{" "}
        <Italic>opération PayBack</Italic> dont le but était de se venger des
        adversaires de l'internet libre notament en attaquant Mastercard, Visa
        et paypal qui avaient privé de leurs services le site{" "}
        <Important>"wikileaks"</Important> qui ne pouvait alors plus recevoir de
        donation. Certains parle de cette opération comme la première cyber
        guerre. Dans ce cas précis les <Important>DDOS</Important> n'ont pas
        utilisé d'ordinateurs zombies, Anonymous à créer un programme qui
        s'appelle <Important>LOIC</Important> (
        <Italic>Low Orbit Ion Canon</Italic>) qui est très facile d'utilisation
        et permettait à chaque partisan du mouvement de pouvoir participer aux
        attaques DDOS sans aucune connaissance du hack.
      </ShellText>
      <Image src={ddos3} alt="exemple du programme d'Anonymous LOIC" />
      <ShellText>
        <Italic>
          Cette attaque fait partie de celle qui te concerne particulièrement en
          tant que dev web donc je t'invite à te renseigner sur les différents
          types de DDOS:
        </Italic>
      </ShellText>
      <ul>
        <li>
          <Important>HTTP Flood</Important>
        </li>
        <li>
          <Important>SYN Flood</Important>
        </li>
        <li>
          <Important>Smurf</Important>
        </li>
        <li>
          <Important>UDP Flood</Important>
        </li>
        <li>
          <Important>Ping Flood</Important>
        </li>
      </ul>
      <ShellText>
        <Italic>
          De nos jours, il existe des entreprises qui propose des solutions de
          protection anti-DDOS comme <Important>"Cloudflare"</Important> par
          exemple.
        </Italic>
      </ShellText>
      <ShellTitle>~/2-l'attaque Man In The Middle (MITM)</ShellTitle>
      <ShellText>
        L'attaque <Important>Man In The Middle</Important> est plus une méthode
        globale (<Italic>un schéma d'attaque</Italic>) plutôt qu'un type
        d'attaque précis. Mais comprendre son fonctionement t'aidera à mieux
        comprendre plusieurs autres attaques dont nous parlerons plus tard. Le
        principe de base est simple et donc facile à expliquer, le but du hacker
        est de se placer entre deux parties, par exemple entre un utilisateur et
        un site internet, et de faire transiter l'échange par lui en se faisant
        passer pour le site internet auprès de l'utilisateur et en se faisant
        passer pour l'utilisateur auprès du site internet. Ainsi tous les
        paquets passeront entre ses mains lui offrant une multitude de
        possibilités que nous aborderons en détails lorsque nous parlerons
        d'autres attaques.
      </ShellText>
      <Image
        src={mitm}
        alt="schéma basique du principe d'une attaque man in the middle"
      />
      <ShellTitle>~/3-le SIDEJACKING</ShellTitle>
      <ShellText>
        Maintenant que tu comprend le principe du{" "}
        <Important>Man in the Middle</Important> nous allons voir ensemble une
        manière de s'en servir. Lorsque vous vous connectez à un site en entrant
        votre nom d'utilisateur et mot de passe, le serveur vérifie si un compte
        correspondant existe et place alors un cookie sur votre ordinateur pour
        ne pas avoir à vous ré-identifier pour les requêtes suivantes. Si un
        hacker récupère ce cookie, il peut alors détourner la session HTTP et
        utiliser votre compte à votre place. C'est cela que l'on appel le{" "}
        <Important>Sidejacking</Important>. Si on reprend la méthode{" "}
        <Important>Man in The Middle</Important> on imagine très facilement le
        déroulement de l'opération. Le hacker va se placer entre vous et le site
        internet. Il va détourner le trafic par exemple en vous faisant croire
        qu'il est votre box internet (si il a hacké votre wifi au préalable) et
        va se faire passer pour vous auprès du site internet. Du coup il recevra
        vos infos qu'il redirigera vers le site internet et au moment où le site
        vous enverra le fameux cookie le hacker le recevra avant vous et pourra
        donc être connecté à votre session avec les mêmes droits que vous même.
      </ShellText>
      <ShellText>
        <Italic>
          Pour résumer très simplement un Sidejacking c'est comme un carjacking
          mais c'est pas votre voiture qu'on vole c'est votre compte sur un site
          internet.
        </Italic>
      </ShellText>
      <ShellTitle>~/4-ARP POISENING ou ARP SPOOFING</ShellTitle>
      <ShellText>
        Nous allons voir maintenant une autre technique utilisée pour faire du{" "}
        <Important>Man In The Middle</Important>. Celle-ci possède deux noms.
        Certains l'appellent <Important>ARP Poisoning</Important> d'autres
        l'appellent <Important>ARP Spoofing</Important> mais il s'agit
        exactement de la même chose. L ' <Important>ARP Spoofing</Important>{" "}
        permet à l'attaquant de détourner des flux de communications transitant
        entre une machine cible et une passerelle : routeur, box, etc.
        L'attaquant peut ensuite écouter, modifier ou encore bloquer les paquets
        réseaux. Le hacker doit pour cela être connecté au même réseau que la
        victime (un wifi public par exemple). Cela permet à l'attaquant
        d'écouter, de corrompre, de couper l'accès réseau mais aussi d'usurper
        une adresse IP ou de bloquer le trafic. Donc pour reprendre l'exemple
        précédent, l'attaque aurait pu se dérouler ainsi: dans un premier temps
        hack de votre <Italic>wifi</Italic> ou connexion a un{" "}
        <Italic>wifi public</Italic>, dans un second temps utilisation de l'
        <Important>ARP Spoofing</Important> et enfin le{" "}
        <Important>Sidejacking</Important>.
      </ShellText>
      <Image
        src="https://tenor.com/view/hacker-hoodie-gif-12540732.gif"
        alt="a hacker"
      />
      <ShellTitle>~/5-Le Phishing</ShellTitle>
      <ShellText>
        Changeons un peu de sujet et attaquons-nous aux secteurs des{" "}
        <Italic>e-mails</Italic>. Le <Important>Phishing</Important> tout le
        monde en entend parler, tout le monde sait ce que c'est, mais en tant
        que dev web, un jour tes bases de données pourraient être victime d'une
        fuite de données suite à une attaque. Tu seras alors bien content
        d'avoir revue tout ça avec moi pour pouvoir faire une belle campagne
        anti-phishing à envoyer à tous tes clients. Il s'agit plus d'un piège
        tendu que d'une attaque car absolument aucune technique de hack n'est
        requise pour l'utiliser. Le <Important>phishing</Important> est donc une
        arnaque (de préférence à grande échelle pour multiplier les chances de
        trouver une victime crédule ou même innatentive) qui vise à récupérer
        les données confidentielles d'un internaute. Le pirate va envoyer un
        mail aux victimes en se faisant passer pour une entreprise chez qui vous
        avez un compte. Dans ce mail vous trouverez un lien vous renvoyant vers
        une copie très bien faite d'une page de connexion de l'entreprise dont
        ils usurpent l'identité.{" "}
        <Italic>
          Si par malheur vous entrez vos identifiants et mot de passe sur ces
          fausses pages ils atterriront directement entre les mains du hacker
        </Italic>
        .
      </ShellText>
      <Image
        src="https://tenor.com/view/phishing-phisher-hacker-security-gif-16575067.gif"
        alt="an humouristic gif about phishing"
      />
      <ShellTitle>~/6-Les Injection SQL</ShellTitle>
      <ShellText>
        Il existe plusieurs types d'<Important>injection SQL</Important>, mais
        toutes fonctionnent sur le même modèle comportant une application
        interagissant avec une base de données. Commençons avec un exemple
        typique pour mieux comprendre le procédé de l'attaque. Prenons un site
        programmé en <Italic>PHP</Italic> qui communique avec une{" "}
        <Italic>base SQL</Italic>. Si le formulaire de connexion du site
        comporte une faille, il sera alors possible par exemple de se connecter
        directement à l'interface du webmaster en tapant une requête SQL non
        prévue par l'application directement dans le champ "mot de passe". Bref
        pour faire simple au lieu de chercher à deviner le mot de passe, vous
        envoyer un petit bout de code qui sera interprété comme valide. Il
        existe des outils permettant d'automatiser ce type d'attaque (notamment
        le logiciel iranien <Important>"Havij"</Important>) car les taper à la
        main est assez fastidieux et plus compliqué aussi. Mais ces outils
        servent aussi bien aux devs voulant vérifier la sécurité de leur
        application qu'aux scripts kiddies voulant jouer aux hackers, car il
        facilite vraiment l'attaque par <Important>injection SQL</Important>.
      </ShellText>
      <ShellText>
        Pour aller plus loin et avoir plus de détails sur les injections SQL tu
        peux te renseigner sur ces différentes méthodes d'injections:
      </ShellText>
      <ul>
        <li>
          <Important>blind based</Important>
        </li>
        <li>
          <Important>error based</Important>
        </li>
        <li>
          <Important>union based</Important>
        </li>
        <li>
          <Important>Stacked queries</Important>
        </li>
      </ul>
      <ShellText>
        <Italic>
          Une manière simple d'éviter ce genre d'attaque est l'échappement des
          caractères spéciaux dans les champs de formulaires pour ne pas laisser
          l'utilisateur taper du code dans les champs.
        </Italic>
      </ShellText>
      <ShellTitle>~/7-Le Sniffing</ShellTitle>
      <ShellText>
        Le <Important>sniffing</Important> permet, grâce à un logiciel adapté,
        de lire ou d'enregistrer des <Italic>paquets</Italic> de données qui
        transitent par un réseau. Si ces données circulent en "clair" (non
        chiffrées), alors le pirate pourra directement récupérer les
        informations qui transitent. Dans le cas contraire il est aussi possible
        d'analyser les <Italic>paquets</Italic> récupérés pour déchiffrer leur
        contenu à l'aide d'autres logiciels. Pour mieux comprendre les liaisons
        qui existe entre les différentes méthodes je vais reprendre notre
        exemple utilisé pour l'attaque <Important>Man In The Middle</Important>.
        Rappelez-vous, l'attaque se déroulait comme ceci: hack du wifi, ARP
        Spoofing puis SideJacking. Et bien maintenant avec le sniffing l'ordre
        pourrait devenir
        <Important>Sniffing</Important> <Italic>=&gt;</Italic>{" "}
        <Important>hack du wifi</Important> <Italic>=&gt;</Italic>{" "}
        <Important>ARP Spoofing</Important> <Italic>=&gt;</Italic>{" "}
        <Important>Sniffing</Important> <Italic>=&gt;</Italic>{" "}
        <Important>SideJacking</Important>. Prenons un autre exemple, je veux
        hacker la box wifi de mes voisins et bien pour se faire je vais utiliser
        un logiciel comme "<Important>aircrack-ng</Important>" par exemple. Puis
        je vais mettre ma carte wifi en mode écoute (mode monitor) afin
        d'espionner le traffic sur la box que je veux hacker. Ensuite deux
        possibilités s'offre à moi. Je suis patient et j'attends qu'une nouvelle
        connexion s'établisse ou je déconnecte un utilisateur pour le forcer à
        se reconnecter. Maintenant il ne me reste plus qu'à récupérer le{" "}
        <Important>handshake</Important> (
        <Italic>se qui contient la clé WEP, WPA ou WPA2</Italic>) au moment de
        la connexion afin de le déchiffrer pour récupérer le mot de passe du
        wifi. L'étape où je récupère le <Important>handshake</Important>{" "}
        représente très bien le sniffing, je capture un paquet qui contient une
        donnée. Pour faire encore plus simple sans aucun mot technique le
        sniffing c'est comme écouter aux portes en attendant d'entendre quelque
        chose d'intérressant.
      </ShellText>
      <Image
        src="https://tenor.com/view/sniffing-doggy-dog-nose-dog-nose-gif-14329933.gif"
        alt="an humouristic gif of dog sniffing in hole"
      />
      <ShellText>
        <Italic>
          Il n'y a pas de réel solution pour se protéger du sniffing, essayer
          simplement de rester à jour par exemple pour les box internet sachez
          que de nos jours elles utilisent toutes le protocole de sécurité WPA2
          qui est beaucoup plus dur à "cracker" que son ancètre le WEP. De même
          le protocole HTTP n'est presque plus utilisé car il faisait transiter
          les données en "clair" (non chiffré) contrairement aux HTTPS qui est
          maintenant devenu la norme.
        </Italic>
      </ShellText>
      <ShellTitle>~/8-L'attaque XSS (Cross Site Scripting)</ShellTitle>
      <ShellText>
        Il s'agit ici de polluer un site avec des bouts de code malveillants (
        <Italic>dans un forum, des commentaires, des inputs, etc...</Italic>)
        pour que le naviguateur de la ou les victimes interpète ce code. Il peut
        s'agir d'un site complice ou d'un site victime car les{" "}
        <Important>failles XSS</Important> sont très répandues sur de nombreux
        sites. Les possibilités des <Important>attaques XSS</Important> sont
        très larges puisque le pirate peut utiliser tous les languages supportés
        par le naviguateur (
        <Italic>
          HTML, CSS, mais bon le plus intérressant reste le JavaScript
        </Italic>
        ) afin d'éxécuter du code qu'il injecte dans le site grâce à ces
        failles. Généralement, ce type d'attaque permet de rediriger vers une
        autre page ou de voler la session en usurpant des cookies. Mais un petit
        rigolo pourrait aussi modifier l'aspect du site ou faire disparaitre
        messages et commentaires d'autres utilisateurs. Pour expliquer
        simplement cette attaque, prenons l'exemple d'un petit rigolo (
        <Italic>qu'on nommera Trad, pour l'exemple bien sûr</Italic>) qui
        voudrait afficher une image pornographique sur un forum de discussion
        tout public. Et bien Trad devrait d'abord vérifier si le site est
        vulnérable (<Italic>si des failles XSS sont présente</Italic>) et si
        c'est le cas il pourrait alors tenter de rentrer du{" "}
        <Important>code HTML</Important> dans un commentaire afin de faire
        passer son bout de code (<Italic>une balise "img" par exemple</Italic>)
        dans le code originel de la page web.
      </ShellText>
      <Image
        src="https://tenor.com/view/hacker-hackerman-kung-fury-gif-7953536.gif"
        alt="an humouristic gif of dog sniffing in hole"
      />
      <ShellText>
        Il existe trois sous type d'attaque <Important>XSS</Important>:
      </ShellText>
      <ShellText>
        <Important>1. Attaques XSS stockées (Stored XSS) :</Important>
      </ShellText>
      <ShellText>
        Celle-ci est la plus simple à comprendre, le pirate va envoyer un code
        malicieux dans une application web qui va le stocker (par exemple dans
        sa base de données). Ensuite le contenu malicieux sera retourné dans le
        navigateur des autres utilisateurs à chaque fois qu'ils iront sur le
        site.
      </ShellText>
      <ShellText>
        <Important>2. Attaques XSS reflétées (reflected XSS) :</Important>
      </ShellText>
      <ShellText>
        Ce deuxième type d'attaque XSS ne stocke pas le contenu malicieux sur le
        serveur web. Le contenu malicieux est par exemple livré à la victime via
        un url qui le contient. Et donc le code malicieux ne sera exécuté que
        pour les personnes passant par l'url falsifié.
      </ShellText>
      <ShellText>
        <Important>3. Attaques basées sur le DOM (DOM based XSS) :</Important>
      </ShellText>
      <ShellText>
        Cette variante est plus complexe à expliquer car elle ressemble beaucoup
        à la deuxième, mais retient juste que contrairement aux deux autres elle
        n'utilise par le serveur web et que tout se passe directement dans le
        navigateur de la victime.
      </ShellText>
      <ShellText>
        <Italic>
          En tant que futur dev Web cette faille sera ta priorité, celle que tu
          croiseras le plus, celle que tu pourras créer sans t'en rendre compte.
          Pour l'éviter tu dois toujours considérer que les données venant de
          l'exterieur ne sont pas sûres. Tu devras vérifier tous les champs où
          l'utilisateur peut taper des choses (formulaire, url, input, etc...)
          et échapper tous les caractères spéciaux et vérifier que le contenu
          est conforme à ce qui est attendu. Cependant si tu code en React sache
          que les caractères seront déjà échappés sans ton intervention.
        </Italic>
      </ShellText>
      <ShellTitle>~/9-L'attaque CSRF (Cross Site Request Forgery)</ShellTitle>
      <ShellText>
        Le but d'une attaque <Important>CSRF</Important> est de transmettre à un
        utilisateur connecté une <Italic>requête HTTP</Italic> frauduleuse qui
        pointe sur une action interne au site afin que l'utilisateur exécute la
        requête sans s'en rendre compte et avec son compte. L'utilisateur
        devient donc sans en avoir conscience complice de l'attaque. Pour mieux
        comprendre nous allons étudier le déroulement d'une attaque{" "}
        <Important>CSRF</Important>.
      </ShellText>
      <Image src={csrf1} alt="schéma d'une attaque CSRF" />
      <ShellText>
        <Important>étape 1:</Important>
      </ShellText>
      <ShellText>
        La victime est connectée à un forum et un autre utilisateur
        malintentionné lui envoie un lien vers un site web malicieux. Cette page
        web contiendra quelques lignes de code qui déclencheront automatiquement
        une requête vers le site cible (<Italic>le forum</Italic>). Ces quelques
        lignes pourraient par exemple être une <Italic>balise img</Italic> qui,
        au lieu de charger une image effectuera une requête vers le site cible.
      </ShellText>
      <ShellText>
        <Italic>
          &lt;img
          src=“http://mytarget.com/change_password.php?new_password=letmein”
          height=0 width=0&gt;
        </Italic>
      </ShellText>
      <ShellText>
        <Important>étape 2:</Important>
      </ShellText>
      <ShellText>
        Lors de sa navigation sur le site malicieux, le navigateur de la victime
        va parcourir le code écrit par l'attaquant et donc lire les quelques
        lignes de code contenues dans la <Italic>balise img</Italic>.
      </ShellText>
      <ShellText>
        <Important>étape 3:</Important>
      </ShellText>
      <ShellText>
        La victime va donc sans s'en apercevoir envoyer la requête vers le
        forum, exécutant ainsi l'action que souhaite l'attaquant. Dans notre
        exemple la victime envoie une requête pour effectuer un changement de
        mot de passe sur le forum sans le savoir, mais du point du vue du forum
        c'est bel et bien la victime qui souhaite effectuer ce changement.
      </ShellText>
      <ShellText>
        <Italic>
          En tant qu'utilisateur pour éviter d'être pris au piège par ce type
          d'attaque je vous recommande de toujours vous déconnecter après avoir
          terminé votre navigation et de ne jamais autoriser votre navigateur à
          enrigister vos identifiants ou même les sites web à se souvenir de
          vous. Côté dev c'est un peu plus compliqué pour empêcher ce genre
          d'attaque. Il faut mettre en place un système de tokens anti-CSRF ou
          demander une ré-authentification à l'utilisateur pour certaines
          requêtes afin de s'assurer qu'il en est bien l'auteur.
        </Italic>
      </ShellText>
      <MainTitle>FOR THE LULZ ^^</MainTitle>
      <Image src={lulz} alt="a bigUp to lulzsec" />
      <MainTitle>THANKS FOR WATCHING</MainTitle>
    </div>
  );
};

export default RedPill;
