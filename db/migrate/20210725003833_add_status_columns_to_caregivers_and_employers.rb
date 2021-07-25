class AddStatusColumnsToCaregiversAndEmployers < ActiveRecord::Migration[6.1]
  def change
    add_column :caregivers, :status, :string
    add_column :employers, :status, :string
  end
end
