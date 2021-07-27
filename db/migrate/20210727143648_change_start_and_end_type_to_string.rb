class ChangeStartAndEndTypeToString < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :start
    remove_column :jobs, :end

    add_column :jobs, :start, :string
    add_column :jobs, :end, :string

  end
end
