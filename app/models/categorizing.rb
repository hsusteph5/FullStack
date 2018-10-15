# == Schema Information
#
# Table name: categorizings
#
#  id          :bigint(8)        not null, primary key
#  category_id :integer          not null
#  business_id :integer          not null
#

class Categorizing < ApplicationRecord
  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category


  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business
end
