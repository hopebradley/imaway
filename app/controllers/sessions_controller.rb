class SessionsController < ApplicationController

    def create_caregiver_session
        caregiver = Caregiver.find_by(username: params[:username])
        if caregiver&.authenticate(params[:password])
            session[:user_id] = caregiver.id
            render json: caregiver
        else
            render json: { errors: ["Incorrect username or password, or wrong role checked."]}, status: :unauthorized
        end
    end

    def create_employer_session
        employer = Employer.find_by(username: params[:username])
        if employer&.authenticate(params[:password])
            session[:user_id] = employer.id
            render json: employer
        else
            render json: { errors: ["Incorrect username or password, or wrong role checked."]}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.clear
            head :no_content
        else
            render json: { errors: ["Unauthorized"]}, status: :unauthorized
        end
    end
    

end
