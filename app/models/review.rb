# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  rating      :integer          not null
#  description :text
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :business_id, :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

end
