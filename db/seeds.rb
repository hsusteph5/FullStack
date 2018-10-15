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
boba_guys = Business.create!(name: 'Boba Guys', address: '3491 19th St San Francisco, CA 94110', phone: '(415) 967-2622', url: "bobaguys.com", price: 1)
businesses << boba_guys
coco = Business.create!(name: 'CoCo Fresh Tea & Juice', address: '2699 Taylor St San Francisco, CA 94133', phone: '(415) 441-1627', url: "en.coco-tea.com", price: 1)
businesses << coco
urban_ritual = Business.create!(name: 'Urban Ritual', address: '488 Fell St San Francisco, CA 94102', phone: '(415) 590-2873', url: "urbanritualcafe.com", price: 1)
businesses << urban_ritual
karma_cafe = Business.create!(name: 'Karma Cafe', address: '1901 Hayes St San Francisco, CA 94117', phone: '(415) 702-9761', url: "KarmaCafeSF.com", price: 2)
businesses << karma_cafe
black_sugar = Business.create!(name: 'Black Sugar', address: "320 O'Farrell St San Francisco, CA 94102", phone:'(415) 521-2022', url: "blacksugarboba.com", price: 1)
businesses << black_sugar
steap_tea = Business.create!(name: 'Steap Tea Bar', address: "827 Sacramento St San Francisco, CA 94108", phone: '(415) 872-9753', url: "steapteabar.com", price: 1)
businesses << steap_tea
samovar_tea = Business.create!(name: 'Samovar Tea - Mission', address: "411 Valencia St San Francisco, CA 94103", phone: '(415) 553-6887', url: "samovartea.com", price: 1)
businesses << samovar_tea
asha_tea = Business.create!(name: 'Asha Tea House', address: "17 Kearny St San Francisco, CA 94108", phone: '(415) 549-3688', url: "ashateahouse.com", price: 1)
businesses << asha_tea
crown_crumpet = Business.create!(name: 'Crown & Crumpet Tea Stop Cafe', address: "1746 Post St San Francisco, CA 94115", phone: '(415) 771-4252)', url: "websitecrownandcrumpet.com", price: 2)
businesses << crown_crumpet
hollow =  Business.create!(name: 'Hollow', address: "1435 Irving St San Francisco, CA 94122", phone: '(415) 242-4119', url: "hollowsf.com", price: 1)
businesses << hollow
the_mill =  Business.create!(name: 'The Mill', address: "736 Divisadero St San Francisco, CA 94117", phone: '(415) 345-1953', url: "themillsf.com", price: 2)
businesses << the_mill


Category.destroy_all
categories = []
cafe = Category.create!(title: 'cafe')
categories << cafe
bubble_tea = Category.create!(title: 'bubble tea')
categories << bubble_tea
coffee_and_tea = Category.create!(title: 'coffee & tea')
categories << coffee_and_tea
hotel = Category.create!(title: 'hotel')
categories << hotel
spa = Category.create!(title: 'spa')
categories << spa
gym = Category.create!(title: 'gym')

Categorizing.destroy_all
categorizings = []
bubble_tea_boba_guys = Categorizing.create!(category_id: bubble_tea.id, business_id: boba_guys.id)
categorizings << bubble_tea_boba_guys

coffee_and_tea_boba_guys = Categorizing.create!(category_id: coffee_and_tea.id, business_id: boba_guys.id)
categorizings << coffee_and_tea_boba_guys

bubble_tea_steap_tea = Categorizing.create!(category_id: bubble_tea.id, business_id: steap_tea.id)
categorizings << bubble_tea_steap_tea
bubble_tea_black_sugar = Categorizing.create!(category_id: bubble_tea.id, business_id: black_sugar.id)
categorizings << bubble_tea_black_sugar
bubble_tea_asha_tea = Categorizing.create!(category_id: bubble_tea.id, business_id: asha_tea.id)
categorizings << bubble_tea_asha_tea
cafe_karma_cafe = Categorizing.create!(category_id: cafe.id, business_id: hollow.id)
categorizings << cafe_karma_cafe
cafe_hollow = Categorizing.create!(category_id: cafe.id, business_id: karma_cafe.id)
categorizings << bubble_tea_steap_tea
cafe_the_mill = Categorizing.create!(category_id: cafe.id, business_id: the_mill.id)
categorizings << cafe_the_mill
