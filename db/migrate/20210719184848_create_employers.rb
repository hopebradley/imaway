class CreateEmployers < ActiveRecord::Migration[6.1]
  def change
    create_table :employers do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :bio
      t.string :img_url

      t.timestamps
    end
  end
end
