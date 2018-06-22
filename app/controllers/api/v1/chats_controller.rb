class Api::V1::ChatsController < Api::ApplicationController

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
      render json: data['items']
    else
      puts 'failed!!!!!!!!!!!!!!!!!!!!!!!'
      puts response.body
      render json: response.body
    end
  end

end
