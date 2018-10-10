if current_user
  json.extract! user, :id, :fname, :lname, :email
else
  {}
end
