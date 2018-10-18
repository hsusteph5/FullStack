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
user1 = User.create!(email: 'pudding@demo.com', password: 'password', fname: "Giga", lname: "Pudding")
users << user1
user2 = User.create!(email: 'banana_pancake@demo.com', password: 'password', fname: "Banana", lname: "Pancakes")
users << user2
user3 = User.create!(email: 'sherry@demo.com', password: 'password', fname: "Sherry", lname: "Berry")
users << user3
user4 = User.create!(email: 'mochi@demo.com', password: 'password', fname: "Mochi", lname: "Mochi")
users << user4




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

#reviews

Review.destroy_all
reviews = []
boba_review1 = Review.create!(author_id: demo.id, business_id: boba_guys.id, rating: 5, description: "I came to Boba Guys on Saturday and loved it! I would highly recommend it.")
reviews << boba_review1
boba_review2 = Review.create!(author_id: user1.id, business_id: boba_guys.id, rating: 2, description: "The line was so long, I had to wait forever... I don't think I will ever be back. I'm not even sure what the hype is about.")
reviews << boba_review2
boba_review3 = Review.create!(author_id: user2.id, business_id: boba_guys.id, rating: 4, description: "I love this place, it's a must-try")
reviews << boba_review3
boba_review4 = Review.create!(author_id: user3.id, business_id: boba_guys.id, rating: 5, description: "Not sure what the other user was talking about, the line was so short when I went.")
reviews << boba_review4


sugar_review2 = Review.create!(author_id: user2.id, business_id: black_sugar.id, rating: 1, description: "I came here on Friday night and did get cashier was RUDE! Not only did he forget to give me change, my drink was so gross. DO NOT COME HERE!")
reviews << sugar_review2
sugar_review3 = Review.create!(author_id: user1.id, business_id: black_sugar.id, rating: 5, description: "This is one of my favorite bubble tea places in the SF!")
reviews << sugar_review3
sugar_review4 = Review.create!(author_id: user3.id, business_id: black_sugar.id, rating: 5, description: "Drink was soooooo...... goood.....")
reviews << sugar_review4


baked_bear_review1 = Review.create!(author_id: user1.id, business_id: baked_bear.id, rating: 5, description: "I always come here for the ice cream sandwiches, but I also love the cookies.")
reviews << baked_bear_review1
baked_bear_review2 = Review.create!(author_id: user2.id, business_id: baked_bear.id, rating: 4, description: "COOOOKIIEEESSS!!!!")
reviews << baked_bear_review2


coco_review1 = Review.create!(author_id: user3.id, business_id: coco.id, rating: 3, description: "The drink I got was okay..")
reviews << coco_review1
urban_ritual_review1 = Review.create!(author_id: user2.id, business_id: urban_ritual.id, rating: 4, description: "After seeing an ad about this place, I finally decided to go. I get the honey oolong tea.")
reviews << urban_ritual_review1
karma_cafe = Review.create!(author_id: user1.id, business_id: karma_cafe.id, rating: 4, description: "Everything here is so good, but pretty pricey.")
reviews << karma_cafe

steap_tea_review1 = Review.create!(author_id: user2.id, business_id: steap_tea.id, rating: 1, description: "I waited 30 minutes for my drink, only to find out they forgot to make it. The drink wasn't even good.")
reviews << steap_tea_review1
steap_tea_review2 = Review.create!(author_id: user3.id, business_id: steap_tea.id, rating: 3, description: "I was anxious to try to the tea, but was sorely disappointed.")
reviews << steap_tea_review2
steap_tea_review3 = Review.create!(author_id: user4.id, business_id: steap_tea.id, rating: 5, description: "Love all the drinks here!")
reviews << steap_tea_review3

samovar_tea_review1 = Review.create!(author_id: user2.id, business_id: samovar_tea.id, rating: 4, description: "Great tea!")
reviews << samovar_tea_review1

asha_tea = Review.create!(author_id: user2.id, business_id: asha_tea.id, rating: 5, description: "I would recommend the green tea.")
reviews << asha_tea

crown_crumpet_review1 = Review.create!(author_id: user4.id, business_id: crown_crumpet.id, rating: 5, description: "Love the little bite sized sandwiches")
reviews << crown_crumpet_review1
hollow_review1 =  Review.create!(author_id: user3.id, business_id: hollow.id, rating: 5, description: "I grabbed lunch with some friends on Sunday and had a superb time. The staff was so kind and friendly.")
reviews << hollow_review1
the_mill_review1 =  Review.create!(author_id: user3.id, business_id: the_mill.id, rating: 5, description: "Beautiful decor, a great time with friends, and good food! 5 / 5 ")
reviews << the_mill_review1
sixth_course_review1 = Review.create!(author_id: user4.id, business_id: sixth_course.id, rating: 5, description: "The desserts are so good here!")
reviews << sixth_course_review1
milkbomb_ice_cream_review1 = Review.create!(author_id: user4.id, business_id: milkbomb_ice_cream.id, rating: 4, description: "This is one of my favorite ice cream places in SF")
reviews << milkbomb_ice_cream_review1
philmore_creamery_review1 = Review.create!(author_id: user1.id, business_id: philmore_creamery.id, rating: 5, description: "Great ice cream!")
reviews << philmore_creamery_review1
