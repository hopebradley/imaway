class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :status, :bio, :img_url
end
