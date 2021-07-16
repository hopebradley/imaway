class Job < ApplicationRecord
    belongs_to :caregiver, class_name: "User"
    belongs_to :employer, class_name: "User"
end
