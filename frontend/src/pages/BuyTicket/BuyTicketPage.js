import { React, useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup  } from "react-bootstrap";

import Title from "../../../components/title/title";

import './LoginPage.css'

function BuyTicketPage() {
    const [freeSeats, setFreeSeats] = useState([])
    const [reservedSeats, setReservedSeats] = useState([])
    const [unavailableSeats, setUnavailableSeats] = useState([])

    return (
      <>
        <div className="buy-ticket page" >
          <Title head="Comprar ingressos" />
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            {Array.from({length: 3}, (_, index) => {
              <ToggleButton id={`seat-a${index}`} value={1}>
                {`A${index}`}
              </ToggleButton>;
            })}
          </ToggleButtonGroup>
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            {Array.from({length: 3}, (_, index) => {
              <ToggleButton id={`seat-b${index}`} value={1}>
                {`B${index}`}
              </ToggleButton>;
            })}
          </ToggleButtonGroup>
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            {Array.from({length: 3}, (_, index) => {
              <ToggleButton id={`seat-c${index}`} value={1}>
                {`C${index}`}
              </ToggleButton>;
            })}
          </ToggleButtonGroup>
          <div className="d-grid gap-2">
          <Button variant="success" size="lg">
            Confirmar
          </Button>
          </div>
        </div>
      </>
    );
}

export default BuyTicketPage;