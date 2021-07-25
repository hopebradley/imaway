class CreateAlerts < ActiveRecord::Migration[6.1]
  def change
    create_table :alerts do |t|
      t.string :contents
      t.string :type
      t.string :job_id

      t.timestamps
    end
  end
end
