class ChatsController < ApplicationController
  before_action :authenticate_user!

  def get_messages
    @chat_id = params[:chat_id]
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.get do |req|
      req.url '/youtube/v3/liveChat/messages'
      req.params['liveChatId'] = @chat_id
      # req.params['liveChatId'] = 'Cg0KC2I5Nm9rNi1VTlNN'
      req.params['part'] = 'snippet'
      page_token = Message.where("live_chat_id like ?", "%#{@chat_id}%").last&.next_page_token
      req.params['pageToken'] = page_token unless page_token == ''
      req.params['maxResults'] = '2000'
      req.params['key'] = ENV['GOOGLE_API_KEY']
    end
    if response.success?
      puts "#{response.success?}=================="
      data = JSON.parse(response.body)
      next_page_token = data['nextPageToken']
      data['items'].each do |item|
        Message.create(
          messageId: item['id'],
          live_chat_id: item['snippet']['liveChatId'],
          authorChannelId: item['snippet']['authorChannelId'],
          displayMessage: item['snippet']['displayMessage'],
          publishedAt: item['snippet']['publishedAt'],
          next_page_token: next_page_token
        )
      end
      render json: response.body
    else
      puts 'failed!!!!!!!!!!!!!!!!!!!!!!!'
      puts response.body
      render json: response.body
    end
  end

  # def post_message
  #   # faraday with oauth2 middleware not quite workign yet
  #   conn = Faraday.new(:url => 'https://www.googleapis.com') do |builder|
  #     builder.request :oauth2, 'access_token'
  #   end
  #   response = conn.post do |req|
  #     req.url '/youtube/v3/liveChat/messages'
  #     req.params['part'] = 'snippet'
  #     req.headers = {
  #       "Authorization": 'access_token'
  #     }
  #     req.body = {
  #       "snippet": {
  #         "liveChatId": "UCTru_vI673uz8IddTG6GZJw",
  #         "type": "textMessageEvent",
  #         "textMessageDetails": {
  #           "messageText": "testing api"
  #         }
  #       }
  #     }
  #   end
  #   if response.success?
  #     puts "#{response.success?}=================="
  #     puts response.body
  #     redirect_to streams_path
  #   else
  #     puts 'failed!!!!!!!!!!!!!!!!!!!!!!!'
  #     puts response.body
  #     redirect_to streams_path
  #   end
  # end

end
