# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Read apartment data from a json file.
file = File.read(Rails.root.join('db/files/apartments.json'))
data = JSON.parse(file)

slice = [
  :marketing_name,
  :website,
  :description,
  :contact_email,
  :contact_phone,
  :street,
  :city,
  :state,
  :zip,
  :latitude,
  :longitude,
]

array_of_attribute_hash = data.map do |d|
  d.with_indifferent_access.slice(*slice)
end

Property.create!(array_of_attribute_hash)
