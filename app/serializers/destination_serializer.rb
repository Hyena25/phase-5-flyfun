class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :location, :description
  belongs_to :users

  def user_data
    User.find_by(id: object.user_id)
  end
end
