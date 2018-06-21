class ChatsController < ApplicationController
  def post_message
    conn = Faraday.new(:url => 'https://www.googleapis.com') do |builder|
      builder.request :oauth2, 'access_token'
    end
    response = conn.post do |req|
      req.url '/youtube/v3/liveChat/messages'
      req.params['part'] = 'snippet'
      req.headers = {
        "Authorization": 'access_token'
      }
      req.body = {
        "snippet": {
          "liveChatId": "Cg0KC0NfdGdLLV9YQ0Yw",
          "type": "textMessageEvent",
          "textMessageDetails": {
            "messageText": "testing api"
          }
        }
      }
    end
    if response.success?
      puts "#{response.success?}=================="
      # data = JSON.parse(response.body)
      # puts data
      puts response.body
      redirect_to streams_path
    else
      puts 'failed!!!!!!!!!!!!!!!!!!!!!!!'
      puts response.body
      # data = JSON.parse(response.body)
      # puts data
      redirect_to streams_path
    end
  end
end
