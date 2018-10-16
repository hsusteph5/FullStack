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
baked_bear =  Business.create!(name: 'The Baked Bear', address: "2824 Jones St San Francisco, CA 94133", phone: '(415) 757-0052', url: "thebakedbear.com", price: 1)
businesses << baked_bear
sixth_course = Business.create!(name: 'Sixth Course', address: "1544 15th St San Francisco, CA 94103", phone: '(415) 829-2461', url: "sixthcourse.com", price: 2)
businesses << sixth_course
milkbomb_ice_cream = Business.create!(name: 'Milkbomb Ice Cream', address: "1717 17th St San Francisco, CA 94107", phone: '(415) 780-4429', url: "milkbombicecream.com", price: 1)
businesses << milkbomb_ice_cream
philmore_creamery = Business.create!(name: 'Philmore Creamery', address: "1840 Fillmore St San Francisco, CA 94115", phone: '(415) 786-2961', url: "philmorecreamery.com", price: 2)
businesses << philmore_creamery


Category.destroy_all
categories = []
cafe = Category.create!(title: 'cafe')
categories << cafe
bubble_tea = Category.create!(title: 'bubble tea')
categories << bubble_tea
dessert = Category.create!(title: 'dessert')
categories << dessert
hotel = Category.create!(title: 'hotel')
categories << hotel
spa = Category.create!(title: 'spa')
categories << spa
gym = Category.create!(title: 'gym')
categories << gym
coffee_and_tea = Category.create!(title: 'coffee & tea')
categories << coffee_and_tea

Categorizing.destroy_all
categorizings = []

#desserts
dessert_boba_guys = Categorizing.create!(category_id: dessert.id, business_id: boba_guys.id)
categorizings << dessert_boba_guys
dessert_baked_bear = Categorizing.create!(category_id: dessert.id, business_id: baked_bear.id)
categorizings << dessert_baked_bear
dessert_sixth_course = Categorizing.create!(category_id: dessert.id, business_id: sixth_course.id)
categorizings << dessert_sixth_course
dessert_milkbomb_ice_cream = Categorizing.create!(category_id: dessert.id, business_id: milkbomb_ice_cream.id)
categorizings << dessert_milkbomb_ice_cream
dessert_philmore_creamery = Categorizing.create!(category_id: dessert.id, business_id: philmore_creamery.id)
categorizings << dessert_philmore_creamery

#bubble tea
bubble_tea_boba_guys = Categorizing.create!(category_id: bubble_tea.id, business_id: boba_guys.id)
categorizings << bubble_tea_boba_guys
bubble_tea_steap_tea = Categorizing.create!(category_id: bubble_tea.id, business_id: steap_tea.id)
categorizings << bubble_tea_steap_tea
bubble_tea_black_sugar = Categorizing.create!(category_id: bubble_tea.id, business_id: black_sugar.id)
categorizings << bubble_tea_black_sugar
bubble_tea_asha_tea = Categorizing.create!(category_id: bubble_tea.id, business_id: asha_tea.id)
categorizings << bubble_tea_asha_tea
bubble_tea_urban_ritual = Categorizing.create!(category_id: bubble_tea.id, business_id: urban_ritual.id)
categorizings << bubble_tea_urban_ritual

#cafe categorizing
cafe_karma_cafe = Categorizing.create!(category_id: cafe.id, business_id: karma_cafe.id)
categorizings << cafe_karma_cafe
cafe_hollow = Categorizing.create!(category_id: cafe.id, business_id: hollow.id)
categorizings << bubble_tea_steap_tea
cafe_the_mill = Categorizing.create!(category_id: cafe.id, business_id: the_mill.id)
categorizings << cafe_the_mill
cafe_urban_ritual = Categorizing.create!(category_id: cafe.id, business_id: urban_ritual.id)
categorizings << cafe_urban_ritual

#coffee and tea categorizing
coffee_and_tea_coco = Categorizing.create!(category_id: coffee_and_tea.id, business_id: coco.id)
categorizings << coffee_and_tea_coco
coffee_and_tea_karma_cafe = Categorizing.create!(category_id: coffee_and_tea.id, business_id: karma_cafe.id)
categorizings << coffee_and_tea_karma_cafe
# coffee_and_tea_urban_ritual = Categorizing.create!(category_id: coffee_and_tea.id, business_id: urban_ritual.id)
# categorizings << coffee_and_tea_urban_ritual
coffee_and_tea_samovar_tea = Categorizing.create!(category_id: coffee_and_tea.id, business_id: samovar_tea.id)
categorizings << coffee_and_tea_samovar_tea
coffee_and_tea_black_sugar = Categorizing.create!(category_id: coffee_and_tea.id, business_id: black_sugar.id)
categorizings << coffee_and_tea_black_sugar
coffee_and_tea_steap_tea = Categorizing.create!(category_id: coffee_and_tea.id, business_id: steap_tea.id)
categorizings << coffee_and_tea_steap_tea
coffee_and_tea_asha_tea = Categorizing.create!(category_id: coffee_and_tea.id, business_id: asha_tea.id)
categorizings << coffee_and_tea_asha_tea
coffee_and_tea_crown_crumpet = Categorizing.create!(category_id: coffee_and_tea.id, business_id: crown_crumpet.id)
categorizings << coffee_and_tea_crown_crumpet
