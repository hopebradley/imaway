class AddRecipientTypeToAlerts < ActiveRecord::Migration[6.1]
  def change
    add_column :alerts, :recipient_type, :string
  end
end
