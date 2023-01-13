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
user1 = User.create(full_name: 'Johnny Smith', username: "johnny123", email: "johnny@gmail.com", password: "johnny")
user2 = User.create(full_name: 'Brenda Lee', username: "brenda123", email: "brenda@gmail.com", password: "brenda")
user3 = User.create(full_name: 'Luis Lopez', username: "luis123", email: "luis@gmail.com", password: "luis")

puts "creating destinations"
destination4 = Destination.create(image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg", title: "Petra", city: "Petra", country: "Jordan", description: "Beautiful ruins" )
destination5 = Destination.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkWrswVUP2mqtg3PcwfSRQD4UtEBz7J3JtCVCrY2aGyrWHsgwXO-OP77PMwti1AKmSvk&usqp=CAU", title: "Chichén Itzá", city: "Yucatán Peninsula", country: "Mexico", description: "Very well preserved" )
destination1 = Destination.create(image: "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop", title: "Great wall of China", city: "Beijing", country: "China", description: "Huge wall" )
destination2 = Destination.create(image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-24002457_sbfkds.jpg", title: "Christ the Redeemer", city: "Rio De Janeiro", country: " Brazil", description: "Such a beatiful statue" )
destination3 = Destination.create(image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80", title: "Taj Mahal", city: "Agra", country: "India", description: "Wonderful architecture")

puts "creating reviews..."
Review.create(star_rating: rand(0..5), comment: "Amazing Place", user_id: user1.id, destination_id: destination1.id )
Review.create(star_rating: rand(0..5), comment: "Did not enjoy this destination", user_id: user2.id, destination_id: destination2.id )
Review.create(star_rating: rand(0..5), comment: "It was alright, beware of the wild animals", user_id: user3.id, destination_id: destination3.id )
Review.create(star_rating: rand(0..5), comment: "Loved It", user_id: user2.id, destination_id: destination4.id )
Review.create(star_rating: rand(0..5), comment: "No comment", user_id: user1.id, destination_id: destination5.id )
