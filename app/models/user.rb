class User < ApplicationRecord
    has_secure_password
    has_many :caregiver_jobs, foreign_key: "caregiver_id", class_name: "Job"
    has_many :employer_jobs, foreign_key: "employer_id", class_name: "Job"


    # validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    # validates :status, inclusion: {in: %w(caregiver employer), message: "can't be blank"}
    # validates :bio, length: {minimum: 10}
    # validates :password, length: {minimum: 4}
end
