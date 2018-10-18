# extract each business into an array by id, name, address, phone

# @businesses.each do |business|
#   json.set! business.id do
#     json.avg_rating business.reviews.average(:rating).round(1)
#     json.extract! business, :id, :name, :address, :phone, :price
#     json.categories business.categories.map { |category| category.title }
#   end
# end


json.businesses do
  @businesses.each do |business|
    json.set! business.id do
      json.avg_rating business.reviews.average(:rating).round(1)
      json.extract! business, :id, :name, :address, :phone, :price
      json.categories business.categories.map { |category| category.title }
    end
  end
end

json.reviews do
  @businesses.each do |business|
    json.set! business.reviews.first.business_id do
      json.extract! business.reviews.first, :id, :description, :author_id, :business_id, :rating
    end
  end
end
