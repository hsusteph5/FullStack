@businesses.each do |business|
  json.extract! business, :id, :address, :phone
end
