class Message < ApplicationRecord
  validates :messageId, presence: true, uniqueness: true

  after_validation :get_author_name

  def get_author_name
    conn = Faraday.new(:url => 'https://www.googleapis.com')
    response = conn.get do |req|
      req.url '/youtube/v3/channels'
      req.params['part'] = 'snippet'
      req.params['id'] = self.authorChannelId
      req.params['key'] = ENV['GOOGLE_API_KEY']
    end
    data = JSON.parse(response.body)
    # data['items'].each do |item|
    #   puts item
    #   self.authorName = item['snippet']['title']
    # end
    self.author_name = data['items'][0]['snippet']['title']
  end

  def self.search_by_author(term)
    where("author_name ilike :search_term", search_term: "%#{term}%").order(publishedAt: :desc)
  end

  def self.search_by_chat(term)
    where("live_chat_id ilike :search_term", search_term: "%#{term}%").order(publishedAt: :desc)
  end

end
