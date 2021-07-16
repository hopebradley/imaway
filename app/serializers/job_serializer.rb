class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :type, :salary, :start_time, :end_time, :caregiver_id, :employer_id
end
