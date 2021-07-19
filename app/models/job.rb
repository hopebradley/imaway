class Job < ApplicationRecord

    belongs_to :caregiver, class_name: "User"
    belongs_to :employer, class_name: "User"


    # validates :title, presence: true, length: {minimum: 3}
    # validates :category, inclusion: {in: %w(children pets plants house other), message: "can't be blank"}
    # validates :salary, numericality: true
end
