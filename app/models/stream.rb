class Stream < ApplicationRecord

  validates :videoId, presence: true, uniqueness: true

  after_validation :get_livechat_id

  def get_livechat_id
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.get do |req|
      req.url '/youtube/v3/videos'
      req.params['id'] = self.videoId
      req.params['part'] = 'snippet,liveStreamingDetails'
      req.params['key'] = ENV['GOOGLE_API_KEY']
    end
    data = JSON.parse(response.body)
    data['items'].each do |item|
      self.livechatId = item['liveStreamingDetails']['activeLiveChatId']
    end
  end

end
