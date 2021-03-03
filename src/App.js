import './App.css';

import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Components/Shop/ShoppingCart";
import Carousel2 from "./Components/Carousel/Carousel2";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Middle from "./Components/Middle/Middle";
import FooterBar from "./Components/Navigation/FooterBar";
import Rider from "./Components/Riders/Rider";
import Riders from "./Components/Riders/Riders";
import AboutUs from "./Components/Navigation/Footer/AboutUs";
import ContactUs from "./Components/Navigation/Footer/ContactUs";
import StoreLocator from "./Components/Navigation/Footer/StoreLocator";
import CountryLanguage from "./Components/Navigation/Header/CountryLanguage";

import {AuthProvider} from "./contexts/AuthContext";
import SignUp from "./Components/Navigation/Header/Account/SignUp";
import SignIn from "./Components/Navigation/Header/Account/SignIn";
import Dashboard from "./Components/Navigation/Header/Account/Dashboard";
import PrivateRoute from "./Components/Navigation/Header/Account/PrivateRoute";
import ForgetPassword from "./Components/Navigation/Header/Account/ForgetPassword";
import UpdateProfile from "./Components/Navigation/Header/Account/UpdateProfile";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React , {useState, useEffect} from 'react';

import {getItemInfo, getRiders} from "./library/library";

function App() {
    const [rider, setRiders] = useState([])
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

  return (
    <div className="App">
        <Router>
            <AuthProvider>
                <NavigationBar cart={cart}/>
                <Switch>
                    <Route path ={'/country-language'}>
                        <CountryLanguage />
                    </Route>
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/signin'} component={SignIn} />
                    <Route path={'/forgot-password'} component={ForgetPassword}/>
                    <PrivateRoute path={'/dashboard'} component={Dashboard} />
                    <PrivateRoute path={'/update-profile'} component={UpdateProfile} />
                    <Route exact path={'/'}>
                        <Carousel2 />
                        <Middle />
                        {/*<Riders />*/}
                    </Route>
                    <Route exact path={'/shop/:item'}>
                        <Shop deckInfo={deckInfo}
                              setDeckInfo={setDeckInfo}
                              wheelsInfo={wheelsInfo}
                              setWheelsInfo={setWheelsInfo}
                              trucksInfo={trucksInfo}
                              setTrucksInfo={setTrucksInfo}
                              cart={cart}
                              setCart={setCart}
                        />
                    </Route>
                    <Route path={'/shopping-cart'}>
                        <ShoppingCart cart={cart}
                                      setCart={setCart}
                                      show={show}
                                      setShow={setShow}
                                      />
                    </Route>
                    <Route path={'/about-us'} component={AboutUs} />
                    <Route path={'/riders'}>
                        <Rider rider={rider} show={show} setShow={setShow}/>
                    </Route>
                    <Route path={'/store-locator'} component={StoreLocator} />
                    <Route path={'/contact-us'} component={ContactUs}/>
                    <Route exact path={'/*'}>
                        WHAT THE FUCK ARE YOU DOING!
                    </Route>

                </Switch>
                <FooterBar />
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
