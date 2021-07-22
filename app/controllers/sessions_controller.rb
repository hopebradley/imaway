class SessionsController < ApplicationController

    def create_caregiver_session
        user = Caregiver.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Incorrect username or password, or wrong role checked."]}, status: :unauthorized
        end
    end

    def create_employer_session
        user = Employer.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
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
