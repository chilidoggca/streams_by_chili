puts "===========faraday test================="

conn = Faraday.new(:url => 'http://www.youtube.com')
response = conn.get '/'                 # GET http://www.example.com/users'
puts response
