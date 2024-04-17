import { React, useState, useEffect } from "react";
import { Container, Button, ToggleButton, Row, Col  } from "react-bootstrap";

import Title from "../../components/title/title";

import axios from "axios";

import urls from "../../utils/urls"

import './BuyTicketPage.css'

function BuyTicketPage() {
    const [seats, setSeats] = useState([])

    useEffect(() => {
      axios.get(`${urls.seatMapServiceURL}/seat/`)
      .then((response) => {
        console.log(response)
        setSeats(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      })
    }, [])

    return (
      <>
        <div className="buy-ticket page" >
          <Container>
            <Row>
              <Title head="Comprar ingressos" class="title" />
            </Row>
            <Row className="seat-container">
              {seats.map((seat, index) => 
                <Col>
                  <ToggleButton 
                    id={`seat-${seat.name}`} 
                    name={seat.name}
                    value={index} 
                    checked={true}
                    className="seat"
                  >
                    {`${seat.name}`}
                  </ToggleButton>
                </Col>
            )}
            </Row>
          </Container>
          

          
          {/* <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            {seatsMock.map((seat, index) => 
              <ToggleButton id={`seat-${seat.name}`} value={index}>
                {`${seat.name}`}
              </ToggleButton>
            )}
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
          </ToggleButtonGroup> */}
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