class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :type
      t.string :salary
      t.string :start_time
      t.string :end_time
      t.string :caregiver_id
      t.string :employer_id

      t.timestamps
    end
  end
end
