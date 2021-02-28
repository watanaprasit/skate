import './App.css';

import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/Shop/ShoppingCart";
import Carousel2 from "./Components/Carousel/Carousel2";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Middle from "./Components/Middle/Middle";
import FooterBar from "./Components/Navigation/FooterBar";
import Rider from "./Components/Riders/Rider";
import Riders from "./Components/Riders/Riders";
import Account from "./Components/Navigation/Header/Account";
import AboutUs from "./Components/Navigation/Footer/AboutUs";
import ContactUs from "./Components/Navigation/Footer/ContactUs";
import StoreLocator from "./Components/Navigation/Footer/StoreLocator";
import CountryLanguage from "./Components/Navigation/Header/CountryLanguage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React , {useState, useEffect} from 'react';

import {getItemInfo, getRiders} from "./library/library";

import CarouselPictures from "./Components/Carousel/CarouselPictures";

function App() {
    const [rider, setRiders] = useState([])
    const [picture, setPicture] = useState([])
    const [deckInfo, setDeckInfo] = useState([])
    const [wheelsInfo, setWheelsInfo] = useState([])
    const [trucksInfo, setTrucksInfo] = useState([])
    const [cart, setCart] = useState([])
    const [show, setShow] = useState(false);


    useEffect(() => {
        getRiders("Riders", setRiders)
        getItemInfo("Decks", setDeckInfo)
        getItemInfo("Trucks", setTrucksInfo)
        getItemInfo("wheels", setWheelsInfo)

    }, [])

    // console.log(picture)
    // console.log(itemInfo)
    // console.log(cart)

  return (
    <div className="App">
        <NavigationBar cart={cart} />

        <Router>
            <Switch>
                <Route path ={'/country-language'}>
                    <CountryLanguage />
                </Route>
                <Route path={'/account'}>
                    <Account />
                </Route>
                <Route exact path={'/'}>
                    <CarouselPictures picture={picture} setPicture={setPicture}/>
                    <Carousel2 picture={picture}/>
                    <Middle />
                    {/*<Riders />*/}
                </Route>
                <Route exact path={'/shop/:item'}>
                    <Shop deckInfo={deckInfo} wheelsInfo={wheelsInfo} trucksInfo={trucksInfo} setCart={setCart}/>
                </Route>
                <Route path={'/shopping-cart'}>
                    <ShoppingCart cart={cart} show={show} setShow={setShow}/>
                </Route>
                <Route path={'/about-us'}>
                    <AboutUs/>
                </Route>
                <Route path={'/riders'}>
                    <Rider rider={rider} show={show} setShow={setShow}/>
                </Route>
                <Route path={'/store-locator'}>
                    <StoreLocator />
                </Route>
                <Route>
                    <ContactUs />
                </Route>
                <Route exact path={'/*'}>
                    WHAT THE FUCK ARE YOU DOING!
                </Route>
            </Switch>
        </Router>
        <FooterBar />
    </div>
  );
}

export default App;
