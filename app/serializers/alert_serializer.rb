class AlertSerializer < ActiveModel::Serializer
  belongs_to :job
  attributes :id, :contents, :job_id, :sender_id, :receiver_id, :sender, :receiver, :job

  def job
    Job.find_by(id: object.job_id)
  end

  def sender
    if Caregiver.find_by(id: object.sender_id)
      Caregiver.find_by(id: object.sender_id)
    else
      Employer.find_by(id: object.sender_id)
    end
  end

  def receiver
    if Caregiver.find_by(id: object.receiver_id)
      Caregiver.find_by(id: object.receiver_id)
    else
      Employer.find_by(id: object.receiver_id)
    end
  end

end
