class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :image
      t.string :title
      t.string :city 
      t.string :country
      t.string :description

      t.timestamps
    end
  end
end
