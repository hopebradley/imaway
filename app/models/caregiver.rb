class Caregiver < ApplicationRecord

    has_secure_password

    has_many :jobs
    has_many :employers, through: :jobs

    validates :name, presence: true
    validates :username, uniqueness: true, length: {minimum: 3}
    validates :bio, length: {minimum: 10}
    validates :password, length: {minimum: 4}
end
