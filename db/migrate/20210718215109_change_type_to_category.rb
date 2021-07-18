class ChangeTypeToCategory < ActiveRecord::Migration[6.1]
  def change
      rename_column :jobs, :type, :category
  end
end
