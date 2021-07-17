class Job < ApplicationRecord
    # belongs_to :caregiver, class_name: "User"
    # belongs_to :employer, class_name: "User"

    belongs_to :user

    validates :title, presence: true, length: {minimum: 3}
    validates :type, inclusion: {in: %w(children pets plants house other), message: "can't be blank"}
    validates :salary, numericality: true
end
