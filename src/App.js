import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import GridLayout from "./components/GridLayout";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./containers/NavBar";
import Home from "./containers/Home";
import HelloWorld from "./containers/HelloWorld";
import RedPill from "./containers/RedPill";
import MainTitle from "./components/MainTitle";
import WebSiteTitle from "./components/WebSiteTitle";
import ShellTitle from "./components/ShellTitle";

function App() {
  return (
    <div className="App">
      <GridLayout>
        <Router>
          <Header>
            <WebSiteTitle>Hack For Noob</WebSiteTitle>
            <NavBar />
          </Header>
          <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/hello-world">
                <HelloWorld />
              </Route>
              <Route path="/red-pill">
                <RedPill />
              </Route>
            </Switch>
          </Main>
          <SideBar>
            <MainTitle black>BONUS:</MainTitle>
            <ShellTitle black>youtubeurs:</ShellTitle>
            <ul>
              <li>Korben</li>
              <li>Processus Thief</li>
              <li>Micode</li>
              <li>Waked XY</li>
            </ul>
            <ShellTitle black>magazines:</ShellTitle>
            <ul>
              <li>Pirate informatique</li>
              <li>les dossiers du pirate</li>
              <li>GNU/Linux Magazine</li>
            </ul>
            <ShellTitle black>pentesting tools:</ShellTitle>
            <ul>
              <li>Havij</li>
              <li>LOIC</li>
              <li>Wireshark</li>
              <li>aircrack-ng</li>
              <li>Kon-Boot</li>
              <li>John the Ripper</li>
              <li>Metasploit</li>
              <li>Hydra</li>
              <li>RainbowCrack</li>
              <li>Kali linux</li>
            </ul>
          </SideBar>
          <Footer>
            <WebSiteTitle>☠ Made by EthernalSlayer ☠</WebSiteTitle>
          </Footer>
        </Router>
      </GridLayout>
    </div>
  );
}

export default App;
