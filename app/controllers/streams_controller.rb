class StreamsController < ApplicationController
  def index
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.get do |req|
      req.url '/youtube/v3/search'
      req.params['part'] = 'snippet'
      req.params['eventType'] = 'live'
      req.params['broadcastType'] = 'all'
      # req.params['resultsPerPage'] = '10'
      req.params['maxResults'] = '20'
      req.params['type'] = 'video'
      req.params['videoCategoryId'] = '20'
      req.params['key'] = ENV['GOOGLE_API_KEY']
    end

    @streams = JSON.parse(response.body)

    # @streams.items.each do |i|
    #   i['id']['videoId']
    #
    #   buildApiRequest('GET',
    #   '/youtube/v3/videos', {
    #       'id': videoID,
    #       'part': 'snippet,contentDetails,statistics,liveStreamingDetails'
    #   });
    #
    # end


    render json: @streams
  end
end
