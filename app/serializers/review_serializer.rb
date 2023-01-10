class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :comment
  has_one :destination
  has_one :user
end
