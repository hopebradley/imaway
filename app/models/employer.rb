class Employer < ApplicationRecord
    
    has_secure_password

    has_many :jobs
    has_many :caregivers, through: :jobs

    validates :name, presence: true
    validates :username, uniqueness: true, length: {minimum: 3}
    validates :bio, length: {minimum: 5}
    validates :password, length: {minimum: 4}
end
