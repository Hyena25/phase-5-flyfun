# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Destination.destroy_all
Review.destroy_all
puts "begin seeding"

puts "creating users..."
user1 = User.create(full_name: 'Johnny Smith', username: "johnny123", email: "johnny@gmail.com", password: "johnny")
user2 = User.create(full_name: 'Brenda Lee', username: "brenda123", email: "brenda@gmail.com", password: "brenda")
user3 = User.create(full_name: 'Luis Lopez', username: "luis123", email: "luis@gmail.com", password: "luis")
user4 = User.create(full_name: 'Sara Johnson', username: "sara123", email: "sara@gmail.com", password: "sara")
user5 = User.create(full_name: 'Mike Thompson', username: "mike123", email: "mike@gmail.com", password: "mike")
user6 = User.create(full_name: 'Julia Williams', username: "julia123", email: "julia@gmail.com", password: "julia")

puts "creating destinations"
destination4 = Destination.create(image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg", title: "Petra", city: "Petra", country: "Jordan", description: "Beautiful ruins" )
destination5 = Destination.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkWrswVUP2mqtg3PcwfSRQD4UtEBz7J3JtCVCrY2aGyrWHsgwXO-OP77PMwti1AKmSvk&usqp=CAU", title: "Chichén Itzá", city: "Yucatán Peninsula", country: "Mexico", description: "Very well preserved" )
destination1 = Destination.create(image: "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop", title: "Great wall of China", city: "Beijing", country: "China", description: "Huge wall" )
destination2 = Destination.create(image: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-24002457_sbfkds.jpg", title: "Christ the Redeemer", city: "Rio De Janeiro", country: " Brazil", description: "Such a beatiful statue" )
destination3 = Destination.create(image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80", title: "Taj Mahal", city: "Agra", country: "India", description: "Wonderful architecture")
destination6 = Destination.create(image: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg", title: "Eiffel Tower", city: "Paris", country: "France", description: "This iconic structure is a must-see for any traveler visiting Paris. Standing at 324 meters tall, the Eiffel Tower offers breathtaking views of the city from its observation decks. It was built in 1889 as the entrance arch to the 1889 World's Fair.")
destination7 = Destination.create(image: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--DLEyRors--/c_fill,h_580,w_860/v1/EducationHub/photos/colosseum.jpg", title: "Colosseum", city: "Rome", country: "Italy", description: "The Colosseum is one of the most iconic and well-preserved ancient structures in the world. Built in 70-80 AD, this amphitheater was used for gladiatorial contests, public spectacles, and dramas. It is a must-see for history buffs and anyone interested in ancient architecture.")
destination8 = Destination.create(image: "https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-machu_picchu_peru-wiki.jpg?itok=89lytjAa&c=07307e7d6a991172b9f808eb83b18804", title: "Machu Picchu", city: "Cusco", country: "Peru", description: "Machu Picchu is an ancient Inca citadel set high in the Andes Mountains. It is believed to have been built as an estate for the Inca emperor Pachacuti in the 15th century. The site is a UNESCO World Heritage Site and one of the most popular tourist destinations in South America.")
destination9 = Destination.create(image: "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg", title: "Santorini", city: "Thira", country: "Greece", description: "Santorini is a volcanic island in the Cyclades group of the Greek islands. It is famous for its white-washed houses, blue-domed churches, and stunning sunsets. It is a popular tourist destination known for its romantic atmosphere and beautiful beaches.")
destination10 = Destination.create(image: "https://stingynomads.com/wp-content/uploads/2017/03/Victoria-falls-zambia-namibia-vic-falls-trip.jpg.webp", title: "Victoria Falls", city: "Livingstone", country: "Zambia", description: "Victoria Falls is a waterfall located on the Zambezi River, on the border of Zambia and Zimbabwe. It is one of the largest and most spectacular waterfalls in the world. Visitors can take a boat ride to the base of the falls, or take a helicopter tour for a bird's eye view.")
destination11 = Destination.create(image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80", title: "Serengeti National Park", city: "Mara", country: "Tanzania", description: "Serengeti National Park is one of the most famous wildlife sanctuaries in the world. The park is home to an incredible variety of animals, including the big five: lions, leopards, elephants, buffaloes, and rhinos. It's a must-visit destination for wildlife enthusiasts and photographers.")
destination12 = Destination.create(image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80", title: "Banff National Park", city: "Banff", country: "Canada", description: "Banff National Park is one of the most beautiful national parks in the world. The park is home to stunning glaciers, turquoise lakes, and towering peaks. It's a popular destination for hiking, skiing, and sightseeing. There are also hot springs and natural thermal pools in the park.")


puts "creating reviews..."
Review.create(star_rating: rand(0..5), comment: "Amazing Place", user_id: user1.id, destination_id: destination1.id )
Review.create(star_rating: rand(0..5), comment: "Did not enjoy this destination", user_id: user2.id, destination_id: destination2.id )
Review.create(star_rating: rand(0..5), comment: "It was alright, beware of the wild animals", user_id: user3.id, destination_id: destination3.id )
Review.create(star_rating: rand(0..5), comment: "Loved It", user_id: user2.id, destination_id: destination4.id )
Review.create(star_rating: rand(0..5), comment: "No comment", user_id: user1.id, destination_id: destination5.id )
Review.create(star_rating: rand(0..5), comment: "I highly recommend visiting the Eiffel Tower, the view from the top is amazing", user_id: user1.id, destination_id: destination6.id )
Review.create(star_rating: rand(0..5), comment: "The Colosseum was truly impressive, the history and architecture is just amazing", user_id: user2.id, destination_id: destination7.id )
Review.create(star_rating: rand(0..5), comment: "I had a great time visiting the Colosseum, but the lines were very long, I recommend getting there early", user_id: user2.id, destination_id: destination7.id )
Review.create(star_rating: rand(0..5), comment: "Machu Picchu was truly a once in a lifetime experience, the views were breathtaking", user_id: user6.id, destination_id: destination8.id )
Review.create(star_rating: rand(0..5), comment: "Santorini is a beautiful place, the sunsets were amazing and the food was delicious", user_id: user2.id, destination_id: destination9.id )
Review.create(star_rating: rand(0..5), comment: "I highly recommend visiting Victoria Falls, the power of the water is truly awe-inspiring", user_id: user1.id, destination_id: destination10.id)
Review.create(star_rating: rand(0..5), comment: "Serengeti National Park is a must-visit destination for wildlife enthusiasts, the variety of animals is truly incredible", user_id: user2.id, destination_id: destination11.id )
Review.create(star_rating: rand(0..5), comment: "Banff National Park is one of the most beautiful places I've ever visited, the scenery is breathtaking", user_id: user1.id, destination_id: destination12.id )

# Favorite.create(user_id: user2.id, destination_id: destination1.id)