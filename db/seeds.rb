# db/seeds.rb

# Seed data for Plant model
plant = Plant.new(
  name: 'Black Corral',
  img_url: 'https://images.unsplash.com/photo-1593482892540-73c9199d8949?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  details: 'Sansevieria trifasciata black corral is on the top of the list of air-purifying plants.',
  care: 'Easy',
  water: 'Every 9 - 14 days',
  sun: 'Medium sun to low light'
)
plant.save

# Seed data for Monstera model
monstera = Monstera.new(
  name: 'Monstera Deliciosa',
  img_url: 'https://images.unsplash.com/photo-1604512125224-b2ac1a18d295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
  details: 'The Monstera deliciousa (Split-leaf philodendron) is native to Central America. The monstera deliciousa is known as "monstrous" plants because of their growth, and the fruit that is borne in the wild is termed to be delicious. Though not indoors, they are able to produce edible fruit when grown outdoors or in their natural habitat. Monstera deliciousas love to climb, ensuring there is support for the leaves and aerial roots to grab on are essential. As the monstera deliciousa grows and matures the leaves begin to split and the aerials become more prominent.',
  care: 'Easy',
  water: 'Varies',
  sun: 'Indirect bright sunlight'
)
monstera.save

# Seed data for Potho model
potho = Potho.new(
  name: 'Golden Pothos',
  img_url: 'https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  details: 'Golden pothos are native to South Asia. The golden pothos loves to climb and latch on to areas with the aerial rootlets. On larger vines, the leaves are able to grow to 30" long. Golden pothos are also believed to be an air purifier.',
  care: 'Easy',
  water: '1 - 2 per week',
  sun: 'Medium to bright indirect sunlight'
)
potho.save

# Seed data for Snakeplant model
snakeplant = Snakeplant.new(
  name: 'Black Corral',
  img_url: 'https://images.unsplash.com/photo-1593482892540-73c9199d8949?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  details: 'Sansevieria trifasciata black corral is on the top of the list of air-purifying plants.',
  care: 'Easy',
  water: 'Every 9 - 14 days',
  sun: 'Medium sun to low light'
)
snakeplant.save

puts "#{Plant.count} plants created"
puts "#{Monstera.count} monsteras created"
puts "#{Potho.count} pothos created"
puts "#{Snakeplant.count} snakeplants created"
