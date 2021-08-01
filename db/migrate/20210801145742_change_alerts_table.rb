class ChangeAlertsTable < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :receiver_id, :integer

    remove_column :alerts, :type
  end
end
