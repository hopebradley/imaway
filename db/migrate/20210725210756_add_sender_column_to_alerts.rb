class AddSenderColumnToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :sender_id, :integer
  end
end
