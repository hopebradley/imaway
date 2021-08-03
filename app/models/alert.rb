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
        employer_phone
      else
        caregiver_phone
      end
    end

    def alert_message_body
      if employer_recipient?
        "Hi, #{employer_first_name}! #{interested_caregiver_name} #{self.contents} your job: #{job_title}"
      else
        "Hi, #{caregiver_first_name}! #{employer.name} #{self.contents} #{job_title}"
      end
    end
    
    def alert_message
        "ImAway Alerts: \n -- \n"+alert_message_body
    end

    def job_title
        job.title
    end

    def caregiver_phone
        caregiver.phone_number
    end

    def caregiver
        job.caregiver
    end

    def employer_phone
        employer.phone_number
    end

    def employer
        job.employer
    end

    def interested_caregiver_name
        if caregiver = Caregiver.find_by(id: self.sender_id)
            caregiver.name
        else
            ''
        end
    end

    def employer_first_name
        employer.name.split(" ")[0]
    end

    def caregiver_first_name
        caregiver.name.split(" ")[0]
    end
end