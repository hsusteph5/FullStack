# extract each business into an array by id, name, address, phone
@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :address, :phone
  end
end