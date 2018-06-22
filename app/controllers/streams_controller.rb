class StreamsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.get do |req|
      req.url '/youtube/v3/search'
      req.params['part'] = 'snippet'
      req.params['eventType'] = 'live'
      req.params['broadcastType'] = 'all'
      req.params['maxResults'] = '20'
      req.params['type'] = 'video'
      req.params['videoCategoryId'] = '20'
      req.params['key'] = ENV['GOOGLE_API_KEY']
    end
    data = JSON.parse(response.body)
    data['items'].each do |item|
      video_id = item['id']['videoId']
      video_response = conn.get do |req|
        req.url '/youtube/v3/videos'
        req.params['id'] = video_id
        req.params['part'] = 'snippet,liveStreamingDetails'
        req.params['key'] = ENV['GOOGLE_API_KEY']
      end
      video_data = JSON.parse(video_response.body)
      video_data['items'].each do |video_item|
        item['liveStreamingDetails'] = video_item['liveStreamingDetails']
        # item['livechatId'] = video_item['liveStreamingDetails']['activeLiveChatId']
      end
    end
    @streams = data
    render json: @streams
  end
end
