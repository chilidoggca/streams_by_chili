class ChatsController < ApplicationController
  def post_message
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.post do |req|
      req.url '/youtube/v3/liveChat/messages'
      req.params['part'] = 'snippet'
      req.params['key'] = ENV['GOOGLE_API_KEY']
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
      data = JSON.parse(response.body)
      puts data
      redirect_to streams_path
    else
      puts 'failed!!!!!!!!!!!!!!!!!!!!!!!'
      data = JSON.parse(response.body)
      puts data
      redirect_to streams_path
    end
  end
end
