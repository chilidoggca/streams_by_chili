# puts "===========faraday test================="
#
# #   req.params['id'] = 'UC4R8DWoMoI7CAwX8_LjQHig' #live channel id
#
# # list live gaming videos
# conn = Faraday.new(:url => 'https://www.googleapis.com')
# response = conn.get do |req|
#   req.url '/youtube/v3/search'
#   req.params['part'] = 'snippet'
#   req.params['eventType'] = 'live'
#   req.params['broadcastType'] = 'all'
#   req.params['maxResults'] = '20'
#   req.params['type'] = 'video'
#   req.params['videoCategoryId'] = '20'
#   req.params['key'] = ENV['GOOGLE_API_KEY']
# end
# data = JSON.parse(response.body)
# data['items'].each do |item|
#   # puts "================item==========================="
#   Stream.create(
#     title: item['snippet']['title'],
#     description: item['snippet']['description'],
#     videoId: item['id']['videoId'],
#     thumbnail: item['snippet']['thumbnails']['high']['url'],
#     publishedAt: item['snippet']['publishedAt']
#   )
# end
