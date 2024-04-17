import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToggleButton, Button } from "react-bootstrap";

import axios from "axios";

import urls from "../../utils/urls";

function HomePage() {

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

    const onClick = (e) => {
        // const {name} = e.target;

        // let data = seats;
        // const seatIndex = data.findIndex(seat => seat.name === name)

        // data.splice(seatIndex, 1);
        // setSeats({
        //     ...data,
        //     {name: name, status: 'R'},
        // })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(`${urls.seatMapServiceURL}/seat/`, seats)
        .then((response) => {
            console.log(response)
        })
        .catch((errors) => {
            console.log(errors);
        })
    }

    return(
        <div style={{gap: "30px"}} className="home page">
            <h1>Selecione os assentos</h1>

            <div style={{display:"flex", gap: "30px", marginTop:"30px"}}>
            {seats.map((seat, index) => 
                <ToggleButton 
                  id={`seat-${seat.name}`} 
                  name={seat.name}
                  value={index} 
                  className="grad medium"
                  variant={seat.status === 'B' ? 'secondary' : 'primary'}
                  onClick={onClick}
                >
                  {`${seat.name}`}
                </ToggleButton>
            )}
            </div>
            <Button onSubmit={onSubmit}>

            </Button>

        </div>
    );
}

export default HomePage;
