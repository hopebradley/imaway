class User < ActiveRecord::Base

    has_secure_password



    # validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    # validates :status, inclusion: {in: %w(caregiver employer), message: "can't be blank"}
    # validates :bio, length: {minimum: 10}
    # validates :password, length: {minimum: 4}
end

class Employer < User
    has_many :jobs, foreign_key: "employer_id", class_name: "Job"
    has_many :caregivers, through: :jobs
end

class Caregiver < User
    has_many :jobs, foreign_key: "caregiver_id", class_name: "Job"
    has_many :employers, through: :jobs
end