class AddSalaryTypeToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :salary_type, :string
  end
end
