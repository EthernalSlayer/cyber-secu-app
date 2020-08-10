import React from "react";
import MainTitle from "../components/MainTitle";
import Image from "../components/Image";
import wannaCry from "../wannaCry.png";
import iLoveYou from "../iLoveYou.png";
import ShellTitle from "../components/ShellTitle";
import ShellText from "../components/ShellText";
import Important from "../components/Important";
import Italic from "../components/Italic";
import Lien from "../components/Lien";

const HelloWorld = () => {
  return (
    <div>
      <MainTitle>Follow the white rabbit</MainTitle>
      <ShellText>
        <Italic>L'univers de la cyber sécurité est très vaste...</Italic>
      </ShellText>
      <ShellTitle>Par où commencer ?</ShellTitle>
      <ShellText>
        Par où commencer quand l'univers est vaste et en perpetuel expansion ?
        Moi-même je n'ai pas la réponse mais je pense que les malwares feront
        une bonne introduction pour ton initiation.
      </ShellText>
      <ShellText>
        Donc sur cette page tu apprendras ce qu'est un malware, les différents
        types de malwares qui existent et en bonus je te parlerai pour chaque
        type de malwares d'un exemple ayant marqué l'histoire de l'informatique
        pour que tu puisse briller en société.
      </ShellText>
      <ShellTitle>Un malware qu'est ce que c'est ?</ShellTitle>
      <ShellText>
        On commence par le plus facile à expliquer, un malware est un logiciel
        malveillant qui a pour but d'infecter, nuire ou corrompre un système
        informatique sans le consentement de l'utilisateur. Mais là où cela
        devient intérressant c'est qu'il existe plein de sortes de malwares donc
        faisons un petit tour parmi les différents types qui lui sont associés.
      </ShellText>
      <Image
        src="https://tenor.com/view/surprise-lights-food-anonymous-silly-gif-5003257.gif"
        alt="funny anonymous spotted"
      />
      <ShellTitle>~/1-les virus</ShellTitle>
      <ShellText>
        L'histoire commence avec les virus. Un virus est un morceau de code
        s'intégrant dans un autre logiciel ou fichiers exécutables. Chaque fois
        que l'utilisateur exécute ce logiciel infecté, il active ainsi le virus
        qui ira se greffer sur d'autres logiciels. A la longue, cela peut rendre
        inutilisable l'ordinateur et cela peut signifier la perte de toutes vos
        données.
      </ShellText>
      <ShellText>
        Les premiers virus n'avait pas comme but d'être malveillant mais c'est
        eux qui ont poser les bases pour faire naître tout les autres malwares
        dont nous parlerons plus tard. Au départ les virus était utilisés par
        des nerds pour jouer. Par exemple en 1970 Victor A. Vyssotsky, Robert
        Morris Sr. et M. Douglas McIlroy, trois informaticiens de Bell Labs ont
        inventé le jeu <Important>"core war"</Important>. Le but du jeu est
        simple chaque participant crée un programme qui doit se répliquer et
        doit essayer de détruire le programme de ses adversaires. Le gagnant est
        celui dont le programme a créer le plus de copie de lui même ou si les
        programmes de ses adversaires sont totalement inactifs. Vous vous doutez
        que l'idée n'a pas mis longtemps à être détourner pour servir des
        objectifs moins louables.
      </ShellText>
      <ShellTitle>~/2-les vers informatique(worm)</ShellTitle>
      <ShellText>
        Le ver informatique est un malware qui se propage sur des ordinateurs
        grâce à internet. Contrairement au virus, le ver n'a pas besoin d'un
        programme hôte pour se reproduire. Il exploite des failles dans des
        programmes (messagerie instantanée, client mail, etc) afin d'assurer sa
        propagation et corrompre votre système. Le ver informatique pour parler
        en terme pokemon c'est l'évolution du virus, car il ressemble au virus
        sur plusieurs point mais il n'a pas besoin d'un programme hôte pour se
        reproduire et il se propage a travers des failles informatiques.
      </ShellText>
      <ShellText>
        Pour celui-là nous avons un exemple ultra populaire si je vous dit{" "}
        <Important>"I love you"</Important>, cela vous rappel quelque chose ?
        Cela doit être le ver le plus connu au monde avec ses dizaines de
        millions de victimes et les 10 milliards de dollars de dommages qui lui
        sont attribués. Ce malware était dissimulé dans une pièce jointe d'un
        mail, quand la personne ouvrait la pièce jointe le ver parcourait ses
        fichiers et remplaçais tous les fichiers en .jpg .jpeg .vbs .js .jse
        .css .wsh .sct etc ... par une copie de lui-même, ensuite il se servait
        d'outlook pour s'envoyer à toute votre liste de contacts et ainsi il
        s'est propagé très rapidement dans le monde entier.
      </ShellText>
      <Image src={iLoveYou} alt="exemple du mail 'i love you'" />
      <ShellText>
        <Important>Rappel:</Important>
        <Italic>
          {" "}
          Les vers sont beaucoup moins nombreux que dans les années 90 mais
          restez vigilant et n'ouvrez pas une pièce jointe dans un mail douteux.
          Pour celui-là votre antivirus est votre meilleur allier. Mais
          n'oubliez pas que certains vers s'activent à une date précise et
          effectuez régulièrement un petit scan.
        </Italic>
      </ShellText>
      <ShellTitle>~/3-le cheval de troie(trojan)</ShellTitle>
      <ShellText>
        Celui-là a un nom plutôt évocateur, comme son nom l'indique il se sert
        de la même ruse utilisée par Ulysse pendant la guerre de Troie. En
        effet, la méthode consiste à dissimuler du code malveillant sous
        l'apparence d'un logiciel "légitime/propre"(logiciel connu et sûre et de
        préférence réputé) celui-ci exécutera ainsi des actions nuisibles dans
        le dos de l'utilisateur. Vous pouvez donc, sans le savoir, servir d'hôte
        pour un pirate qui usurpera votre identité ou utilisera vos ressources à
        son compte. C'est un type de malware très répandu, car il ouvre la porte
        aux autres.
      </ShellText>
      <ShellText>
        Cette fois nous allons prendre comme exemple le trojan{" "}
        <Important>"Zeus"</Important> il est considéré comme le pire cheval de
        troie de l'histoire. Il a perduré pendant 4 ans (de 2007 a 2011) son but
        était le vol d'informations bancaires. Un rapport de l'entreprise de
        sécurité Trusteer indiquait que les cartes de crédits de 15 banques
        americaines était totalement compromises.
      </ShellText>
      <ShellText>
        <Important>Rappel:</Important>
        <Italic>
          {" "}
          Comme les vers, ils sont facilement détecter par les antivirus. Ils
          aiment aussi communiquer avec l'exterieur, donc un firewall bien
          configuré leur coupera pas mal de possibilités.
        </Italic>
      </ShellText>
      <ShellTitle>~/4-les logiciel espions(spyware)</ShellTitle>
      <ShellText>
        Cette fois, il s'agit plutôt d'une famille de malwares que d'un type de
        malware. Cette famille regroupe tous les logiciels qui ont pour but
        d'espionner, vol de password, enregistrement des frappes du clavier
        etc... Le but des spywares est d'épier vos surfs sur le net, vos
        horaires de connexion, vos adresses mails et tout se qui peut aider à
        dresser une fiche sur vous (footprint), votre famille ou votre
        entreprise. Par exemple dans cette catégorie on retrouve les keyloggers,
        des logiciels fait pour enregistrer toutes vos frappes clavier. Les
        Keyloggers sont relativement simple à coder, facile à mettre en place et
        malgré leur simplicité il reste très efficace. Car par exemple même si
        vos mots de passe sont cryptés cela ne change rien pour un keylogger vu
        que c'est les saisies sur votre clavier qui sont enregistées.
      </ShellText>
      <ShellText>
        Cette fois nous parlerons de l'attaque{" "}
        <Important>"DarkHotel"</Important>, des attaques très organisées qui
        ciblaient uniquement des cadres supèrieurs de grosses entreprises. Les
        hackers pirataient le réseau wifi d'un hôtel où il savait à l'avance que
        leur cible y séjournerai. Ensuite il n'avait plus qu'à attendre que leur
        cible se connecte au wifi de l'hôtel pour le pirater à son tour. Ils
        installaient sur l'ordinateur différents types de spywares afin de
        récolter un maximum d'informations sur la cible et son entreprise.
      </ShellText>
      <ShellText>
        <Important>Rappel:</Important>
        <Italic>
          {" "}
          Les spywares sont difficilement détecter par les antivirus (ne
          présente aucun danger pour le système) donc pour se protéger il est
          préférable d'avoir un firewall bien configuré et d'utiliser un vpn
          quand vous êtes sur un réseau public.
        </Italic>
      </ShellText>
      <ShellTitle>~/5-les rogues ou roguewares</ShellTitle>
      <Image
        src="https://tenor.com/view/computer-malware-pop-up-mr-robot-gif-10668689.gif"
        alt="infected computer in Mr.Robot"
      />
      <ShellText>
        Les Rogues sont de faux antivirus créés par des petits filous pour se
        faire de l'argent en abusant de la crédulité de leurs victimes. Ces
        programmes ont pour but de créer une fausse alerte de sécurité (pop up,
        avertissement windows etc...). Bien sûr la menace est totalement fictive
        mais elle à pour but de vous convaincre de payer afin d'éliminer cette
        menace. Les rogues sont utilisés principalement par des sociétés
        éditrices de logiciels aux pratiques commerciales peu scrupuleuses.
      </ShellText>
      <ShellText>
        N'ayant pas d'exemple historique d'attaque avec des rogues je t'invite a
        aller voir la serie de vidéos{" "}
        <Italic>"j'ai infiltré un réseau d'arnaqueurs"</Italic> de{" "}
        <Important>Micode</Important> sur youtube. (Micode n'est pas mon
        youtubeur préféré, mais même si je ne l'aime pas trop cette série de
        vidéos te permettra de comprendre tout les rouages du fonctionnement
        d'un rogue)
      </ShellText>
      <Lien
        href="https://www.youtube.com/watch?v=gbYdQOde6EU"
        title="Micode infiltre un réseau d'arnaqueur"
      >
        le lien vers la première vidéo
      </Lien>
      <ShellTitle>~/6-les ransomware</ShellTitle>
      <ShellText>
        C'est un malware qui sera introduit par un ver informatique. Le
        ransomware va cibler les types de fichiers ayant une valeur sentimentale
        ou pratique (photos, vidéos, documents, etc...) et les chiffrer avec une
        double clé très complexe. Au bout de seulement quelques minutes, vos
        fichiers deviennent innacessibles et un message vous signalera que vous
        devez payer une rançon pour récupérer la clé privée ayant servi au
        chiffrement et ainsi pouvoir récupérer vos données. En général tout ceci
        est accompagné d'un délai après lequel vos données seront définitevement
        détruites.
      </ShellText>
      <ShellText>
        Ce malware est très interessant car il y a eu une grosse vague
        d'attaques il y a juste quelques années, avec le très célèbre ransomware{" "}
        <Important>"WannaCry"</Important>. Ce ransomware a paralysé de très
        grosses entreprises comme Renault, FedEx, Téléfonica mais également des
        universités et aussi des hôpitaux. Et là où l'histoire devient très
        croustillante c'est qu'il se sont servit d'une faille de sécurité connu
        par la NSA mais qui n'avait pas été divulgué à des fins stratégiques.
        D'ailleurs la légende raconte que c'est lors d'un hack de la NSA que la
        faille aurait été découverte.
      </ShellText>
      <Image src={wannaCry} alt="exemple d'infection wannaCry" />
      <ShellText>
        <Important>Rappel:</Important>
        <Italic>
          {" "}
          les hackers ne sont pas connu pour leur sens moral donc si un jour
          vous êtes victime d'un ransomware ne payer pas la rançon vous n'avez
          aucune garantie de récupérer la clé privée. Tentez plutôt d'aller sur
          le site nomoreransom.org et prier pour que le ransomware qui vous a
          infecter fasse parti de la liste des ransomwares dont la clé privée
          servant au chiffrement a déjà été trouvé.
        </Italic>
      </ShellText>
    </div>
  );
};

export default HelloWorld;
