#rendering all the information for one business (show page)
#keys businesses

json.businesses do
  json.set! business.id do
    json.avg_rating business.reviews.average(:rating).round(1)
    json.num_reviews business.reviews.count 
    json.extract! business, :id, :name, :address, :phone, :price, :url, :lng, :lat
    json.categories business.categories.map { |category| category.title }
    json.photoUrls business.photos.map { |file| url_for(file) }
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
