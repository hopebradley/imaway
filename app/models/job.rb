class Job < ApplicationRecord

    belongs_to :caregiver, optional: true
    belongs_to :employer
    has_many :alerts


    # validates :title, presence: true, length: {minimum: 3}
    # validates :category, inclusion: {in: %w(children pets plants house other), message: "can't be blank"}
    # validates :salary, numericality: true
end
