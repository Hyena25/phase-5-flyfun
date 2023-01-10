# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Review.destroy_all
Destination.destroy_all
puts "begin seeding"

puts "creating users..."
user1 = User.create(full_name: 'Johnny Smith', username: "johnny123", email: "johnny@gmail.com", password_digest: "johnny")
user2 = User.create(full_name: 'Brenda Lee', username: "brenda123", email: "brenda@gmail.com", password_digest: "brenda")
user3 = User.create(full_name: 'Luis Lopez', username: "luis123", email: "luis@gmail.com", password_digest: "luis")

puts "creating destinations"
destination1 = Destination.create(image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['travel']), title: "Great wall of China", location: "Beijing, China", description: "Huge wall" )
destination2 = Destination.create(image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['travel']), title: "Christ the Redeemer", location: "Rio De Janeiro, Brazil", description: "Huge wall" )
destination3 = Destination.create(image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['travel']), title: "Taj Mahal", location: "Agra, India", description: "Wonderful architecture")
destination4 = Destination.create(image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['travel']), title: "Petra", location: "Petra, Jordan", description: "Beautiful ruins" )
destination5 = Destination.create(image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['travel']), title: "Chichén Itzá", location: "Yucatán Peninsula, Mexico", description: "Very well preserved" )

puts "creating reviews..."
Review.create(star_rating: rand(0..5), comment: "Amazing Place", user_id: user1.id, destination_id: destination1.id )
Review.create(star_rating: rand(0..5), comment: "Did not enjoy this destination", user_id: user2.id, destination_id: destination2.id )
Review.create(star_rating: rand(0..5), comment: "It was alright, beware of the wild animals", user_id: user3.id, destination_id: destination3.id )
Review.create(star_rating: rand(0..5), comment: "Loved It", user_id: user2.id, destination_id: destination4.id )
Review.create(star_rating: rand(0..5), comment: "No comment", user_id: user1.id, destination_id: destination5.id )
