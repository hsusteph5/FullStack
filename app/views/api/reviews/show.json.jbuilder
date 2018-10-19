json.set! @review.id do
  json.extract! @review, :id, :author_id, :description, :business_id, :rating
end
