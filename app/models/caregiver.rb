class Caregiver < ApplicationRecord

    has_secure_password

    has_many :jobs
    has_many :employers, through: :jobs

    # validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    # validates :status, inclusion: {in: %w(caregiver employer), message: "can't be blank"}
    # validates :bio, length: {minimum: 10}
    # validates :password, length: {minimum: 4}
end
