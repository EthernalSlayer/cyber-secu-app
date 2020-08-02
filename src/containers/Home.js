import React from "react";
import MainTitle from "../components/MainTitle";
import hackerJr from "../hackerJr.jpg";
import Image from "../components/Image";
import ShellTitle from "../components/ShellTitle";
import ShellText from "../components/ShellText";
import Important from "../components/Important";
import Italic from "../components/Italic";

const Home = () => {
  return (
    <div>
      <MainTitle>Welcome to Hack for noob</MainTitle>
      <ShellTitle>~/documents $ cat intruction.txt</ShellTitle>
      <ShellText>Bienvenue jeune Padawan</ShellText>
      <ShellText>
        Tu t'interesse au hack, a la cyber sécuriter, etc...
      </ShellText>
      <ShellText>
        J'ai créer se site afin de créer une porte d'entrer grand public à
        l'univers des <Important>H4ck3rs</Important>
      </ShellText>
      <ShellText>
        <Italic>
          Laisse moi te guider et te faire découvrir le vaste monde de la cyber
          sécuriter
        </Italic>
      </ShellText>
      <Image src={hackerJr} alt="hacker in the street" />
    </div>
  );
};

export default Home;
