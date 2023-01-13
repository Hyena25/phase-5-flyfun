class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :country, :city, :description
end
