import {BASE_URL} from './config';

// HTTP REQUESTS

export const Message = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/messages`
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
      // 👇🏽 this backend endpoint get messages from Youtube API
      // then saves them into local database
      `${BASE_URL}/api/v1/chats/get_messages?chat_id=${id}`
    )
      .then(res=> res.json())
  },
  post_to_chat (id, message, token) {
    let data = {
      "snippet" : {
        "liveChatId" : id,
        "type" : "textMessageEvent",
        "textMessageDetails" : {
          "messageText" : message
        }
      }
    }
    return fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(res => res.json())
  },
  get_stats_author (order = '') {
    return fetch(
      `${BASE_URL}/api/v1/messages/stats_author?order=` + order
    )
      .then(res => res.json())
  },
  get_stats_author_24h (order = '') {
    return fetch(
      `${BASE_URL}/api/v1/messages/stats_author_24h?order=` + order
    )
      .then(res => res.json())
  }
}
