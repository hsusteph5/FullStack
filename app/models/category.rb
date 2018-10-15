# == Schema Information
#
# Table name: categories
#
#  id    :bigint(8)        not null, primary key
#  title :string           not null
#

class Category < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { maximum: 10 }

  has_many :categorizings,
    foreign_key: :category_id,
    class_name: :Categorizing

  has_many :businesses,
    through: :categorizings,
    source: :category
end
