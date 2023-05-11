import React from "react";
import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({  
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardLike,
  onCardDelete,
  onCardClick,
 }) {
  //Информация о пользователе:
  const currentUser = useContext(CurrentUserContext);

  //Информация о карточках:
  const cardElements = cards.map((card) => (
    <Card
      card={card}
      key={card._id}
      onCardClick={onCardClick}
      onCardDelete={onCardDelete}
      onCardLike={onCardLike}
    />
  ));

  return (
      <main className="content page__content">
        {/*Информация о пользователе*/}
        <section className="profile">
          <div className='profile__header'>
            <div className="profile__avatar-container">
              <button
                className="profile__avatar-edit"
                type="button"
                aria-label="Изменить аватар"
                onClick={onEditAvatar}
              ></button>
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="Ваша фотография"
              />
            </div>

            <div className="profile__info info">
              <div className='info__part'>
                <h1 className="info__title">{currentUser.name}</h1>
                <button
                  className="info__edit-button"
                  type="button"
                  aria-label="Изменить данные профиля"
                  onClick={onEditProfile}
                ></button>
              </div>
              <p className="info__subtitle">{currentUser.about}</p>
              
            </div>
          </div>

          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить карточку"
            onClick={onAddPlace}
          ></button>
        </section>

        {/*Карточки с фотографиями*/}
        <section className="elements">
          {cardElements}
        </section>
      </main>
  );
}

export default Main;
