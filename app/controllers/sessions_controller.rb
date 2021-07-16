class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Incorrect username or password."]}, status: :unauthorized
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
