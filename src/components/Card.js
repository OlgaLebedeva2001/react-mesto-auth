import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

    function handleClick() {
      onCardClick(card);
    }

    function handleLikeClick() {
      onCardLike(card);
    }
  
    function handleDeleteClick() {
      onCardDelete(card);
    }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Далее в разметке используем переменную для условного рендеринга
  const deleteButtonClassName = `element__delete-card ${
    isOwn ? "element__delete-card_type_active" : ""
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `like__vector ${
    isLiked ? "like__vector_active" : ""
  }`;
  
    return (
      <div className="elements__element element">
         <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <button
          className={deleteButtonClassName}
          id="element__delete-card"
          type="button"
          aria-label="Удалить"
          onClick={handleDeleteClick}
        ></button>
       
        <div className="element__description description">
          <h2 className="description__title">{card.name}</h2>
          <div className="description__like like">
            <button
              className={cardLikeButtonClassName}
              type="button"
              aria-label="Нравится"
              onClick={handleLikeClick}
            ></button>
            <p className="like__quantity">{card.likes.length}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;