@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :description, :rating
  end
end
