import React from "react";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!name || !link}
      buttonText={"Создать"}
    >
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_title-img"
          type="text"
          name="pictureTitle"
          id="title-img"
          required
          minLength="2"
          maxLength="30"
          placeholder="Название места"
          value={name}
          onChange={handleNameChange}
        />
        <span className="title-img-error popup__input-error"></span>
      </div>
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_link"
          type="url"
          name="pictureLink"
          id="link"
          required
          placeholder="Ссылка на изображение"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="link-error popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
