class DropStartTimeAndEndTimeFromJobs < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :start_time
    remove_column :jobs, :end_time

    add_column :jobs, :start, :datetime
    add_column :jobs, :end, :datetime
  end
end
