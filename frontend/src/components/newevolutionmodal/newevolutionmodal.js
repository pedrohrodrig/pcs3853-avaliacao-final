import { React, useState } from "react";

import TextInput from "../../components/textInput/textInput";
import Button from "../../components/button/button";

import "./newevolutionmodal.css";

function NewEvolutionModal({ onAdd, onClose }) {
  const [newEvolution, setNewEvolution] = useState({
    patient: 1,
    patientId: 1,
    date: "",
    weight: "",
    activity: "#CCBAF7",
    appetite: "",
    chewing: "",
    intestine: "",
    sleep: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvolution({ ...newEvolution, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newEvolution.date) {
      onAdd(newEvolution);
      setNewEvolution({
        patient: 1,
        patientId: 1,
        date: "",
        weight: "",
        activity: "#CCBAF7",
        appetite: "",
        chewing: "",
        intestine: "",
        sleep: "",
        comments: "",
      });
    }

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="modal-form">
          <h1>Adicionar Evolução</h1>
          <TextInput
            className="horizontal"
            title="Data"
            placeholder="YYYY-MM-DD"
            name="date"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Peso"
            placeholder="Digite apenas em números"
            name="weight"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="IMC"
            placeholder="Digite apenas em número"
            name="imc"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Atividade"
            placeholder="Atividades atuais"
            name="activity"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Apetite"
            placeholder="Apetite atual"
            name="appetite"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Mastigação"
            placeholder="Mastigação atual"
            name="chewing"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Intestino"
            placeholder="Situação do intestino atual"
            name="intestine"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Sono"
            placeholder="Situação de sono atual"
            name="sleep"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Comentários"
            placeholder="Digite comentários, caso não tiver coloque -"
            name="comments"
            handleTextInput={handleChange}
          />
          <div className="modal-button">
            <Button
              className="grad outline small"
              text="Cancelar"
              onClick={onClose}
            />
            <button className="new-event-button" onClick={onAdd} type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEvolutionModal;
