import { React, useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";

import Textbox from "../../components/textbox/textbox";
import TextInput from "../../components/textInput/textInput";
import Button from "../../components/button/button";

import "./eventmodal.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function EventModal({ event, onClose, onDelete, onUpdate }) {
  const [eventEdit, setEventEdit] = useState(false);
  const [editedEvent, setEditedEvent] = useState({ ...event });

  useEffect(() => {}, [eventEdit]);

  const handleEditClick = () => {
    setEventEdit(true);
  };

  const handleEditCancel = () => {
    setEventEdit(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  const handleDelete = () => {
    onDelete(event.id);
  };

  const handleUpdate = () => {
    onUpdate(editedEvent);
    onClose();
  };

  return (
    <div className="modal">
      {!eventEdit && (
        <div className="modal-content">
          <h1>{event.title}</h1>
          <Textbox className="horizontal" title="Evento" body={event.title} />
          <Textbox
            className="horizontal"
            title="Início"
            body={event.start.toString()}
          />
          <Textbox
            className="horizontal"
            title="Fim"
            body={event.end.toString()}
          />
          <Textbox className="horizontal" title="Descrição" body={event.desc} />
          <Textbox className="horizontal" title="Tipo" body={event.type} />
          <div className="modal-button">
            <Button
              className="grad outline small"
              text="Ver Consulta"
              to={`/patient-appointment?${event.appointmentid}`}
            />
            <Button
              className="grad outline small"
              text="Editar"
              onClick={handleEditClick}
            />
            <Button className="grad small" text="Fechar" onClick={onClose} />
          </div>
        </div>
      )}
      {eventEdit && (
        <div className="modal-content">
          <h1>{editedEvent.title}</h1>
          <form onSubmit={handleUpdate} className="modal-form">
            <TextInput
              className="horizontal"
              title="Evento"
              name="title"
              placeholder={editedEvent.title}
              handleTextInput={handleInputChange}
            />
            <div className="modal-date">
              <Textbox title="Início" />
              <DateTimePicker
                onChange={(date) =>
                  handleInputChange({
                    target: { value: date, name: "start" },
                  })
                }
                name="start"
                value={editedEvent.start}
                disableClock={true}
              />
            </div>
            <div className="modal-date">
              <Textbox title="Fim" />
              <DateTimePicker
                onChange={(date) =>
                  handleInputChange({ target: { value: date, name: "end" } })
                }
                name="end"
                value={editedEvent.end}
                disableClock={true}
              />
            </div>
            <TextInput
              className="horizontal"
              title="Descrição"
              placeholder={editedEvent.desc}
              name="desc"
              handleTextInput={handleInputChange}
            />
            <TextInput
              className="horizontal"
              title="Tipo"
              placeholder={editedEvent.type}
              name="type"
              handleTextInput={handleInputChange}
            />
            <div className="modal-button">
              <Button
                className="grad outline small"
                text="Cancelar"
                onClick={handleEditCancel}
              />
              <Button
                className="grad outline small"
                text="Deletar"
                onClick={handleDelete}
              />
              <button className="event-button" onClick={handleUpdate} type="submit">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EventModal;


