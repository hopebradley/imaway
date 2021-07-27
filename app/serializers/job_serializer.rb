class JobSerializer < ActiveModel::Serializer
  belongs_to :employer
  has_many :alerts
  belongs_to :caregiver, optional: true
  attributes :id, :title, :salary, :salary_type, :date, :caregiver_id, :employer_id, :employer, :caregiver, :alerts

  def employer
    Employer.find_by(id: object.employer_id)
  end

  def caregiver
    Caregiver.find_by(id: object.caregiver_id)
  end
end
