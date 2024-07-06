class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.string :user

      t.timestamps
    end
  end
end
