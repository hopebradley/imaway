class CaregiverSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :bio, :img_url, :status
end
