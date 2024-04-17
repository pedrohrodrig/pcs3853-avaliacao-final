import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import BuyTicketPage from "./pages/BuyTicket/BuyTicketPage"

import "react-notifications/lib/notifications.css"
import "./App.css";

function App() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<BuyTicketPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}
export default App;