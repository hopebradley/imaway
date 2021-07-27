class DropStartAndEnd < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :end

    rename_column :jobs, :start, :date
  end
end
