class AlertsController < ApplicationController

    def index
        alerts = Alert.all
        render json: alerts
    end

    def show
        alert = find_alert
        if alert
            render json: alert, status: :created
        else
            render_not_found_response
        end
    end

    def create
        job = Job.find_by(id: params[:job_id])
        duplicate = job.alerts.find_by(sender_id: params[:sender_id])
        if !duplicate
            alert = Alert.create(alert_params)
            render json: alert
        else
            render json: { errors: ["Employer already alerted"] }
        end
    end

    def update
        alert = find_alert
        if alert
            alert.update(alert_params)
            render json: alert
        else
            render_not_found_response
        end
    end

    def destroy
        alert = find_alert
        if alert
            alert.destroy
            head :no_content
        else
            render_not_found_response
        end
    end

    private

    def alert_params
        params.permit(:contents, :receiver_id, :sender_id, :job_id, :recipient_type, :alert)
    end
end
