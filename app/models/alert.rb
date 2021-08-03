class Alert < ApplicationRecord
    belongs_to :job

    after_create :send_sms

    def send_sms
        if recipient_phone
            Sms.new(to: recipient_phone, body: alert_message).send
        end
    end

    def employer_recipient?
      self.recipient_type == 'EMPLOYER'
    end

    def recipient_phone
      if employer_recipient?
        job.employer.phone_number
      else
        nil
      end
    end



    def alert_message_body
      if employer_recipient?
        "Hi, #{employer_first_name}! #{interested_caregiver_name} #{self.contents} your job: #{job_title}"
      else
        "Hi, #{caregiver_first_name}! #{job.employer.name} #{self.contents} #{job_title}"
      end
    end
    
    def alert_message
        "ImAway Alerts: \n -- \n"+alert_message_body
    end

    def job_title
        job.title
    end

    def interested_caregiver_name
        if job.caregiver = Caregiver.find_by(id: self.sender_id)
            job.caregiver.name
        else
            ''
        end
    end

    def employer_first_name
        job.employer.name.split(" ")[0]
    end

    def caregiver_first_name
        job.caregiver.name.split(" ")[0]
    end
end