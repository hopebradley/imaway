class ChangeStatusToType < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :status, :type
  end
end
