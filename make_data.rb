require 'json'
require 'securerandom'

users = 1.upto(10000).map do |i|
  { id: i, name: SecureRandom.alphanumeric(6) }
end

File.open('data/users.json', 'w') do |f|
  f.write(users.to_json)
end