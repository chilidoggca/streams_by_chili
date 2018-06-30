import {BASE_URL} from './config';

function getJwt() {
  return `JWT ${localStorage.getItem('jwt')}`;
}

// HTTP REQUESTS

export const Message = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/messages`,
      // {
      //   headers: {
      //     'Authorization': getJwt()
      //    }
      // }
    )
      .then(res => res.json())
  },
  get_by_author (name) {
    return fetch(
      `${BASE_URL}/api/v1/messages/author?name=${name}`
    )
      .then(res=> res.json())
  },
  get_by_chat (id) {
    return fetch(
      `${BASE_URL}/api/v1/messages/chat?id=${id}`
    )
      .then(res=> res.json())
  },
  save_by_chat (id) {
    return fetch(
      `${BASE_URL}/api/v1/chats/get_messages?chat_id=${id}`
    )
      .then(res=> res.json())
  },
  post_to_chat (id, message, token) {
    let data = {
      "snippet": {
        "liveChaatId": `${id}`,
        "type": "textMessageEvent",
        "textMessageDetails": {
          "messageText": `${message}`
        }
      }
    }
    return fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `BEARER ${token}`
        },
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(res => res.json())
  }
}
