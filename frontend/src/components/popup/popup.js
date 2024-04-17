import React, { useState } from 'react';
import Icon from '../icon/icon';
import Title from '../title/title';
import Button from '../button/button';

import "./popup.css";
import axios from 'axios';

function Popup({ isOpen, closePopup, head, body, buttons, paths, iconType, number }) {
    const [cancel, setCancel] = useState(false);

    const setCancelation = () => {
        axios.patch(`http://localhost:8000/appointment/${number}/cancel`)
            .then(() => {
                setCancel(true);
            })
            .catch(error => {
                console.log(error);
            })
    }

    if (isOpen) {
        return (
            <div className='popup-back'>
                {
                    cancel ? (
                        <div className='popup'>
                            <div className='popup-head'>
                                <Icon className="popup-icon" iconType={iconType} />
                                <Title className="popup-title" head={'Consulta cancelada!'} />

                                <div className='popup-text'>
                                    <p className='popup-body'>{'Sua consulta foi cancelada com sucesso'}</p>
                                </div>
                            </div>
                            <div className='buttons'>
                                <Button
                                    className="black medium outline"
                                    text={'Fechar'}
                                    onClick={closePopup}
                                />
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='popup'>

                            <div className='popup-head'>
                                <Icon className="popup-icon" iconType={iconType} />
                                <Title className="popup-title" head={head} />

                                <div className='popup-text'>
                                    <p className='popup-body'>{body}</p>
                                </div>
                            </div>

                            <div className='buttons'>
                                {
                                    buttons.map((text, i) => {
                                        return (

                                            <Button
                                                className="black medium outline"
                                                text={text}
                                                onClick={text === 'Cancelar' ? setCancelation : closePopup}
                                                to={paths && paths[i]}
                                                key={i}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>

        );
    }
};

export default Popup;
