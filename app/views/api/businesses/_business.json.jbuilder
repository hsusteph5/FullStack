json.set! business.id do
  json.extract! business, :id, :name, :address, :phone, :price
  json.categories business.categories.map { |category| category.title }
end
