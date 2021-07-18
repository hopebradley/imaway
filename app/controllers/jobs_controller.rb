class JobsController < ApplicationController

    def index
        jobs = Job.all 
        render json: jobs, include: :user
    end

    def show
        user = find_user
        if user
            job = Job.find_by(id: params[:id])
            if job
                render json: job, status: :created
            else
                render_not_found_response
            end
        else
            render_unauthorized_response
        end
    end

    def create
        user = find_user
        if user
            job = user.jobs.create(job_params)
            if job.valid?
                render json: job, status: :created
            else
                render_unprocessable_entity_response(job)
            end
        else
            render_unauthorized_response
        end
    end

    def update
        job = find_job
        if job
            job.update(job_params)
            if job.valid?
                render json: job, status: :created
            else
                render_unprocessable_entity_response(job)
            end
        else
            render_not_found_response
        end
    end

    def destroy
        user = find_user
        if user
            job = find_job
            if job 
                job.destroy
                head :no_content
            else
                render_not_found_response
            end
        else
            render_unauthorized_response
        end
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def find_job
        Job.find_by(id: params[:id])
    end

    def job_params
        params.permit(:title, :type, :salary, :start_time, :end_time, :employer_id, :caregiver_id)
    end

    # exception handling helper methods
    def render_unauthorized_response
        render json: { errors: ["Unauthorized"]}, status: :unauthorized
    end

    def render_unprocessable_entity_response(job)
        render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { errors: ["Job not found"] }, status: :not_found
    end

end
