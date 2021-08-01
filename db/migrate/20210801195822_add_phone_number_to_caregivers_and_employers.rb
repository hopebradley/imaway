class AddPhoneNumberToCaregiversAndEmployers < ActiveRecord::Migration[6.1]
  def change
    add_column :caregivers, :phone_number, :string
    add_column :employers, :phone_number, :string
  end
end
