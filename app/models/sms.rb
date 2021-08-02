class Sms

    FROM = '+14043901202'

    def initialize(to:, body:)
        @to = to
        @body = body
    end

    def send
        client.messages.create(from: FROM, to: twilio_friendly_recipient_number, body: @body)
    end

    private

    def twilio_friendly_recipient_number
        '+1' + Phonelib.parse(@to).sanitized
    end

    def client
        account_sid = ENV['TWILIO_SID']
        auth_token = ENV['TWILIO_AUTH_TOKEN']

        @client ||= Twilio::REST::Client.new account_sid, auth_token
    end

end