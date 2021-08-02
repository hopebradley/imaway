class Job < ApplicationRecord

    belongs_to :caregiver, optional: true
    belongs_to :employer
    has_many :alerts


    validates :title, presence: true, length: {minimum: 3}
    validates :category, inclusion: {in: %w(Children Pets Plants House Other), message: "can't be blank"}
    validates :salary, numericality: true
    validates :salary_type, exclusion: {in: %w(--Select One--), message: "can't be blank"}
end
