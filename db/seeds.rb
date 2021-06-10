# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snakeplant.destroy_all
Potho.destroy_all
Monstera.destroy_all
Plant.destroy_all


@plant = Plant.create!(name: 'Black Corral', img_url: 'https://images.unsplash.com/photo-1593482892540-73c9199d8949?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  details: 'Sansevieria trifasciata black corral are on the top of the list of air purifying plants.', care: 'Easy', water: 'Every 9 - 14 days', sun: 'Medium sun to low light', toxicity: 'true')
Plant.create!(name: 'Money Tree', img_url: 'https://images.unsplash.com/photo-1616220797937-f64f159935b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', details: 'The Money Tree (Guiana chestnut) is native to Central and South America where for some this can become an ideal houseplant. The Money Tree is often associates with feng shui, and creating positive chi (energy) in homes. The association with feng shui and chi has increased the popularity of this plant in homes and offices.',
care: 'Medium', water: '2 - 3 per week', sun: 'Medium to bright indirect sunlight', toxicity: 'false')
Plant.create!(name: 'Monstera Deliciosa', img_url: 'https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', details: 'The Monstera Deliciousa (Split-leaf philodendron) is native to Central America. The monstera deliciousa is known as a plant that loves to climb, ensuring there is support for the leaves and roots to grab on are essential.  Though not indoors, they are able to produce edible fruit when grow outdoors or in their natural habitat.',
  care: 'Easy', water: 'Every 5 - 7 days', sun: 'Bright indirect sunlight', toxicity: 'true')
Plant.create!(name: 'Aloe Vera', img_url: 'https://images.unsplash.com/photo-1569745358610-b01866003860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80', details: 'Aloe vera are easy to maintain which has a high popularity in having them whether indoor or outdoor. Aloe vera is grown for both medicinal and agricultural reasons as well for decorative purposes. ',
  care: 'Easy', water: 'Every 2 - 3 weeks', sun: 'Full direct to medium sunlight', toxicity: 'false')
Plant.create!(name: 'Golden Pothos', img_url: 'https://images.pexels.com/photos/7290385/pexels-photo-7290385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', details: 'Golden pothos are native to South Asia. The golden pothos loves to climb and latch on to areas with the aerial rootlets. On larger vines the leaves are able to grow to 30" long. Golden pothos are also beleived to be an air purifier.',
  care: 'Easy', water: '1 - 2 per week', sun: 'Medium to bright indirect sunlight', toxicity: 'true')
Plant.create!(name: 'Lucky Bamboo', img_url: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80', details: 'The Lucky bamboo or Dracena sanderiana are originally native to Africa. Lucky bamboo known to create the sense of balance and safety in life. Also, believed to bring good lick and fortune to those who own them. Lucky bamboo are able to be potted in a water and rocks, as long as these are well taken care of and the water is not fresh tap water.',
  care: 'Easy', water: 'Potted in distilled water', sun: 'Bright indirect sunlight', toxicity: 'false')
Plant.create!(name: 'Sansevieria Trifasciata', img_url: 'https://images.unsplash.com/photo-1616960974821-d2dcd9afec27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80', details: 'Sansevieria trifasciata black dragon species is native to the tropical area of Africa. As a snake plant, the black dragon, are on the top of the list of air purifying plants.',
  care: 'Medium', water: 'Every 9 - 14 days', sun: 'Low Light', toxicity: 'true')
Plant.create!(name: 'Philodendron Glorioso', img_url: 'https://plantophiles.com/wp-content/uploads/2020/05/IMG_8235-1024x768.jpg.webp', details: '', care: '', water: '', sun: '', toxicity: '')
# Plant.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: '')
# Plant.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: '')
puts "#{Plant.count} plant created"



@monstera = Monstera.create!(name: 'Monstera Deliciosa', img_url: 'https://images.unsplash.com/photo-1604512125224-b2ac1a18d295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80', details: 'The Monstera deliciousa (Split-leaf philodendron) is native to Central America. The monstera deliciousa are known as "monstrous" plants because of their growth, and the fruit that is beared in the wild is termed to be delicious. Though not indoors, they are able to produce edible fruit when grow outdoors or in their natural habitat. Monstera deliciousas loves to climb, ensuring there is support for the leaves and aerial roots to grab on are essential. As the monstera deliciousa grows and matures the leaves begin to split and the aerials become more prominent.',
  care: 'Easy', water: 'Varies', sun: 'Indirect bright sunlight', toxicity: 'true')
Monstera.create!(name: 'Monstera Albo', img_url: 'https://s3.amazonaws.com/plants-map-prod/image/plant_pics/avatars/000/083/409/large/8FA1EB1A-E132-47CF-9CEE-43A506F4702D.jpeg?1544988917', details: 'The Monstera deliciousa Albo Variegata is a variegata monstera deliciousa where the leaves a white and green variegated look. This is extremely rare for the monstera to variegate which makes this plant highly sought after for the rarity since it is about 1/100,000.  This adds an extra element to care for the albo because if there are any issues with low light or too much chlorophyll is produced. At the same time, too much light can cause for the leaves to burn. ',
  care: 'Tender Love & Care', water: 'Varies', sun: 'Indirect bright sunlight', toxicity: 'true')
Monstera.create!(name: 'Monstera Thai Constellation', img_url: 'https://cdn.shopify.com/s/files/1/0062/8480/4211/products/FC8CF20C-F2FD-4300-90C5-D13C183988A6.jpeg?v=1536953894', details: 'The Monstera deliciousa Thai Constellation is a variation of monstera deliciousa albo. The leaves have a white to yellow speckled variegation similar to a space constellation. As the thai constellation matures, the whole leaf begin to develop yellow or white colors. ',
  care: 'Tender Love & Care', water: 'Varies', sun: 'Indirect bright sunlight', toxicity: 'true')
Monstera.create!(name: 'Monstera Aurea ', img_url: 'https://i.imgur.com/y109F6X.jpg', details: '', 
  care: '', water: '', sun: '', toxicity: 'true')
# Monsteta.create!(name: 'Mini Monstera', img_url: 'https://images.pexels.com/photos/4350843/pexels-photo-4350843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', details: '', 
#   care: '', water: '', sun: '', toxicity: 'true')
# Monsteta.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: '')
# Monsteta.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: '')
# Monsteta.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: '')
puts "#{Monstera.count} monstera created"


@potho = Potho.create!(name: 'Golden Pothos', img_url: 'https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', details: 'Golden pothos are native to South Asia. The golden pothos loves to climb and latch on to areas with the aerial rootlets. On larger vines the leaves are able to grow to 30" long. Golden pothos are also beleived to be an air purifier.',
  care: 'Easy', water: '1 - 2 per week', sun: 'Medium to bright indirect sunlight', toxicity: 'true')
Potho.create!(name: 'Marble Queen Pothos', img_url: 'https://images.unsplash.com/photo-1599224473702-3e955ef70efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80', details: '', care: '', water: '', sun: '', toxicity: 'true')
Potho.create!(name: 'Neon Pothos', img_url: 'https://images.unsplash.com/photo-1592170577795-db1ab2009688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', details: '', care: '', water: '', sun: '', toxicity: 'true')
Potho.create!(name: 'Manjula Pothos', img_url: 'https://images.unsplash.com/photo-1614346775943-4bf1cc2decfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=295&q=80', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Potho.create!(name: 'Pearls and Jade Pothos', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Potho.create!(name: 'N-Joy Pothos', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Potho.create!(name: 'Hawaiian Pothos', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
puts "#{Potho.count} potho created"



@snakeplant = Snakeplant.create!(name: 'Black Corral', img_url: 'https://images.unsplash.com/photo-1593482892540-73c9199d8949?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  details: 'Sansevieria trifasciata black corral are on the top of the list of air purifying plants.', care: 'Easy', water: 'Every 9 - 14 days', sun: 'Medium sun to low light', toxicity: 'true')
Snakeplant.create!(name: 'Hahnii', img_url: 'https://plantcaretoday.com/wp-content/uploads/brid-nest-snake-plant-1200-630-FB-02282019-min.jpg', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Snakeplant.create!(name: 'Bantel’s Sensation', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
Snakeplant.create!(name: 'Laurentii', img_url: 'https://cdn.shoplightspeed.com/shops/616617/files/29080624/1600x2048x2/sansevieria-trifasciata-laurentii-6-inch.jpg', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Snakeplant.create!(name: 'Black Dragon', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Snakeplant.create!(name: 'Bantels Sensation', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
# Snakeplant.create!(name: '', img_url: '', details: '', care: '', water: '', sun: '', toxicity: 'true')
puts "#{Snakeplant.count} snakeplant created"