class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password_digest
end
