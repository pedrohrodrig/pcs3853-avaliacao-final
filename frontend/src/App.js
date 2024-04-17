import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import BuyTicketPage from "./pages/BuyTicket/BuyTicketPage"
import LayoutPage from "./pages/LayoutPage/layoutpage";
import HomePage from "./pages/Home/homepage";

import "react-notifications/lib/notifications.css"
import "./App.css";

function App() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}
export default App;