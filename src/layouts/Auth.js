import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

//import Navbar from "components/Navbars/AuthNavbar.js";
//import Footer from "components/Footers/Footer.js";        /*add Footer, remove Footersmall by sagar*/

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Register2 from "views/auth/Register2.js";
import Register3 from "views/auth/Register3.js";
import Register4 from "views/auth/Register4.js";
import Register5 from "views/auth/Register5.js";
import eventPage from "views/auth/eventPage.js";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="py-40 pb-0 pt-20 relative w-full h-full min-h-screen bg-gray-900">
          {" "}
          {/* py-40 pacchi pb-0 work thy che  pt-20 cause upar thi niche bao htu pela*/}
          {/* <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/landing.jpg") + ")",
            // }}
          ></div> */}
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/register2" exact component={Register2} />
            <Route path="/auth/register3" exact component={Register3} />
            <Route path="/auth/register4" exact component={Register4} />
            <Route path="/auth/register5" exact component={Register5} />
            <Route path="/auth/event" exact component={eventPage} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          {/* <Footer absolute /> */}
        </section>
      </main>
    </>
  );
}
