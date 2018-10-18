#rendering all the information for one business (show page)
#keys businesses

json.businesses do
  json.set! business.id do
    json.extract! business, :id, :name, :address, :phone, :price, :url
    json.categories business.categories.map { |category| category.title }
  end
end

json.reviews do
  business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :description, :author_id, :business_id, :rating
    end
  end
end

json.users do
  business.authoredReviews.each do |user|
    json.set! user.id do
      json.extract! user, :id, :fname, :lname
    end
  end
end
