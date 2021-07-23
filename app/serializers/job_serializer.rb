class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :salary, :salary_type, :start, :end, :caregiver_id, :employer_id
end
