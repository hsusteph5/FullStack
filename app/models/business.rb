# == Schema Information
#
# Table name: businesses
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  address    :string           not null
#  phone      :string           not null
#  url        :string
#  price      :integer          not null
#  log        :float
#  lat        :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Business < ApplicationRecord
  validates :name, :address, :phone, :price, presence: true
  validates :name, :address, :phone, uniqueness: true
  validates :price, :inclusion => 1..4

  has_many :categorizings,
    foreign_key: :business_id,
    class_name: :Categorizing


  has_many :categories,
    through: :categorizings,
    source: :category

  has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

  has_one_attached :photo

end
