class ChangeIdsToIntegers < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :caregiver_id
    remove_column :jobs, :employer_id

    add_column :jobs, :caregiver_id, :integer, references: :caregiver
    add_column :jobs, :employer_id, :integer, references: :employer
  end
end
