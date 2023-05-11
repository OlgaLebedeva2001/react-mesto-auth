export default class Api {
  constructor(basePath, token) {
    this._basePath = basePath;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._token,
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._basePath}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  getCards() {
    return fetch(`${this._basePath}/cards`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  setEditUserInfo(data) {
    return fetch(`${this._basePath}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getJson);
  }

  createCard(item) {
    return fetch(`${this._basePath}/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    }).then(this._getJson);
  }

  addLike(cardId) {
    return fetch(`${this._basePath}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  deleteLike(cardId) {
    return fetch(`${this._basePath}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  deleteCardApi(cardId) {
    return fetch(`${this._basePath}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  setEditAvatar(data) {
    return fetch(`${this._basePath}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getJson);
  }
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "3886a799-4854-4a3c-8a86-4cfa412e7d56"
);

export { api };
