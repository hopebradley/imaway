class User < ApplicationRecord
    has_secure_password
    has_many :jobs

    # QUESTION FOR NANCY: I want to use dependent destroy, but only if a "employer" deletes themselves. 
    # Like if a caregiver deletes their account, the caregiver's jobs would just lose the caregiver_id but not be destroyed.

    validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    validates :status, inclusion: {in: %w(caregiver employer), message: "can't be blank"}
    validates :bio, length: {minimum: 10}
    validates :password, length: {minimum: 4}
end
