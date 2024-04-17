import { React, useState, useEffect } from "react";

import TextInput from "../../components/textInput/textInput";
import Button from "../../components/button/button";

import "./editevolutionmodal.css";

function EditEvolutionModal({ evolution, onUpdate, onClose }) {
  const [editEvolution, setEditEvolution] = useState(evolution);

  useEffect(() => {}, [editEvolution]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEvolution({ ...editEvolution, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(editEvolution);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleUpdate} className="modal-form">
          <h1>Editar Evolução</h1>
          <TextInput
            className="horizontal"
            title="Data"
            placeholder={editEvolution.date}
            name="date"
            text={editEvolution.date}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Peso"
            placeholder={editEvolution.weight}
            name="weight"
            text={editEvolution.weight}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="IMC"
            placeholder={editEvolution.imc}
            name="imc"
            text={editEvolution.imc}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Atividade"
            placeholder={editEvolution.activity}
            name="activity"
            text={editEvolution.activity}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Apetite"
            placeholder={editEvolution.appetite}
            name="appetite"
            text={editEvolution.appetite}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Mastigação"
            placeholder={editEvolution.chewing}
            name="chewing"
            text={editEvolution.chewing}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Intestino"
            placeholder={editEvolution.intestine}
            name="intestine"
            text={editEvolution.intestine}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Sono"
            placeholder={editEvolution.sleep}
            name="sleep"
            text={editEvolution.sleep}
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Comentários"
            placeholder={editEvolution.comments}
            name="comments"
            text={editEvolution.comments}
            handleTextInput={handleChange}
          />
          <div className="modal-button">
            <Button
              className="grad outline small"
              text="Cancelar"
              onClick={onClose}
            />
            <button
              className="edit-event-button"
              onClick={handleUpdate}
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEvolutionModal;
