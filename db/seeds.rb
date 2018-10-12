# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User seeds
User.destroy_all

users = []
demo = User.create!(email: 'demo@demo.com', password: 'password', fname: "Stephanie", lname: "Hsu")
users << demo

#Business seeds
Business.destroy_all
businesses = []
boba_guys = Business.create!(name: 'Boba Guys', address: '3491 19th St San Francisco, CA 94110', phone: '(415) 967-2622', price: 1)
businesses << boba_guys
coco = Business.create!(name: 'CoCo Fresh Tea & Juice', address: '2699 Taylor St San Francisco, CA 94133', phone: '(415) 441-1627', price: 1)
businesses << coco
urban_ritual = Business.create!(name: 'Urban Ritual', address: '488 Fell St San Francisco, CA 94102', phone: '(415) 590-2873', price: 1)
businesses << urban_ritual
karma_cafe = Business.create!(name: 'Karma Cafe', address: '1901 Hayes St San Francisco, CA 94117', phone: '(415) 702-9761', price: 1)
businesses << karma_cafe
black_sugar = Business.create!(name: 'Black Sugar', address: "320 O'Farrell St San Francisco, CA 94102", phone:'(415) 521-2022', price: 1)
businesses << black_sugar
