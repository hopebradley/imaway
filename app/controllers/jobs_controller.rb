class JobsController < ApplicationController

    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find_by(id: params[:id])
        if job
            render json: job, status: :created
        else
            render_not_found_response
        end
    end

    def create
        if current_employer
            job = current_employer.jobs.create(job_params)
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
        if current_employer
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

    def job_params
        params.permit(:title, :category, :salary, :salary_type, :date, :employer_id, :caregiver_id, :job)
    end



end
