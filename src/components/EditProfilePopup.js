import React from "react";
import { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  // После загрузки текущего пользователя из Api
  // его данные будут использованы в управляемых компонентах
  useEffect(() => {
    setName(currentUser.name || "");
    setAbout(currentUser.about || "");
  }, [currentUser, isOpen]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAboutChange(event) {
    setAbout(event.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаем значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!name || !about}
      buttonText={"Сохранить"}
    >
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_name"
          type="text"
          name="name"
          id="name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <span className="name-error popup__input-error"></span>
      </div>
      <div className="popup__label">
        <input
          className="popup__input  popup__input_type_about"
          type="text"
          name="about"
          id="about"
          minLength="2"
          maxLength="200"
          required
          placeholder="О себе"
          value={about}
          onChange={handleAboutChange}
        />
        <span className="about-error popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
