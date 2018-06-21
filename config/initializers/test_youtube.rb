puts "===========faraday test================="

#   req.params['id'] = 'UC4R8DWoMoI7CAwX8_LjQHig' #live channel id

# list live gaming videos
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
data = JSON.parse(response.body)
data['items'].each do |item|
  # puts "================item==========================="
  Stream.create(
    title: item['snippet']['title'],
    description: item['snippet']['description'],
    videoId: item['id']['videoId'],
    thumbnail: item['snippet']['thumbnails']['high']['url'],
    publishedAt: item['snippet']['publishedAt']
  )
end


# puts data
# data.each do |i, j|
#   if i == 'id'
#     puts "======================================="
#     puts 'videoId: '
#     puts j.videoId
#   end
# end
# data.each do |i, j|
#   if i == 'items'
#     puts i
#     puts j
#   end
# end

# once video id has been found, get live chat streams
