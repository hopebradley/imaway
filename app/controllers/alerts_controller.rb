class AlertsController < ApplicationController

    def index
        alerts = Alert.all
        render json: :alerts
    end

    def show
        alert = Alert.find_by(id: params[:id])
        if alert
            render json: alert, status: :created
        else
            render_not_found_response
        end
    end

    def create
        job = Job.find_by(id: params[:id])
        if job
            alert = Alert.create(alert_params)
            render json: alert
        else
            render_not_found_response
        end
    end

    private

    def alert_params
        params.permit(:contents, :type, :sender_id, :job_id)
    end
end
