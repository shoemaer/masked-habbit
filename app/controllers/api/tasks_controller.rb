class Api::TasksController < ApplicationController
	skip_before_action :verify_authenticity_token
	# before_action :require_logged_in

	def index
		@tasks = Task.all
	end

	def show
		@task = Task.find(params[:id])
	end

	def create
		@task = Task.new(task_params)
		@task.task_maker_id = current_user.id
		@task.maker_name = User.find(current_user.id).username

		if @task.save
			render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
	end


	def update
		@task = Task.find(params[:id])
		if @task.update_attributes(task_params)
			render json: @task
		else
      render json: @task.errors.full_messages, status: 422
		end
	end


	def destroy
		@task = Task.find(params[:id])
		if @task.destroy
			render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
	end


	def task_params
		params.require(:task).permit(:brief,:description,:location,:vehicle_needed,
				:completed,:task_maker_id,:task_doer_id, :maker_name, :doer_name, 
				:category_id, :photo, :latitude, :longitude)
	end
end
