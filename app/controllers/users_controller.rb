class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render_unprocessable_entity_response(user)
        end
    end

    def show
        user = find_user
        if user
            render json: user, status: :created, include: :workouts
        else
            render_unauthorized_response
        end
    end

    def update
        user = find_user
        if user
            user.update(user_params)
            if user.valid?
                render json: user, status: :created
            else
                render_unprocessable_entity_response(user)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        user = find_user
        if user
            user.destroy
            head :no_content
        else
            render_unauthorized_response
        end
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :status, :bio, :img_url)
    end

    # exception handling helper methods
    def render_unauthorized_response
        render json: { errors: ["Unauthorized"]}, status: :unauthorized
    end

    def render_unprocessable_entity_response(user)
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
    
end
