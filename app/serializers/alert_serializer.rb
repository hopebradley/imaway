class AlertSerializer < ActiveModel::Serializer
  attributes :id, :contents, :type, :job_id, :job, :employer, :potential_caregiver

  def job
    Job.find_by(id: object.job_id)
  end

  def potential_caregiver
    Caregiver.find_by(id: object.sender_id)
  end

  def employer
    job = Job.find_by(id: object.job_id)
    Employer.find_by(id: job.employer_id)
  end
end
