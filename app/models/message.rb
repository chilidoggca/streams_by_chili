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

  def self.group_by_author(order)
    sql = "
      SELECT t1.author_name, t1.last_message, t1.created_at, t2.author_messages, t2.author_message_count, t2.author_message_count_24h
      FROM (
      WITH T AS (SELECT author_name, MAX(created_at) AS last_posted FROM messages GROUP BY messages.author_name)
      SELECT messages.\"displayMessage\" AS last_message, messages.author_name, messages.created_at FROM messages
      JOIN T ON
      T.last_posted = messages.created_at
      ) t1

      INNER JOIN (SELECT messages.author_name,
      	array_agg(messages.id) AS author_messages,
      	count(messages.id) AS author_message_count,
          count(case WHEN messages.created_at >= current_date - interval '24 hour' THEN 1 else null END) AS author_message_count_24h
      FROM messages
      GROUP BY messages.author_name)t2

      ON t1.author_name = t2.author_name

      ORDER BY t2.author_message_count #{order}"
    ActiveRecord::Base.connection.execute(sql)
    # Message.find_by_sql("
    #   SELECT t1.author_name, t1.last_message, t1.created_at, t2.author_messages, t2.author_message_count, t2.author_message_count_24h
    #   FROM (
    #   WITH T AS (SELECT author_name, MAX(created_at) AS last_posted FROM messages GROUP BY messages.author_name)
    #   SELECT 'messages.displayMessage' AS last_message, messages.author_name, messages.created_at FROM messages
    #   JOIN T ON
    #   T.last_posted = messages.created_at
    #   ) t1
    #
    #   INNER JOIN (SELECT messages.author_name,
    #   	array_agg(messages.id) AS author_messages,
    #   	count(messages.id) AS author_message_count,
    #       count(case WHEN messages.created_at >= current_date - interval '24 hour' THEN 1 else null END) AS author_message_count_24h
    #   FROM messages
    #   GROUP BY messages.author_name)t2
    #
    #   ON t1.author_name = t2.author_name
    #
    #   ORDER BY t2.author_message_count DESC")
  end

  def self.group_by_author_24h(order)
    Message.where("messages.created_at >= current_date - interval '24 hour'").select("messages.author_name, array_agg(messages.id) AS author_messages, count(messages.id) AS author_message_count")
      .group("messages.author_name").order("author_message_count #{order}")
  end

end
