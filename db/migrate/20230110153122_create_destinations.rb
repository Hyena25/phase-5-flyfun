class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :image
      t.string :title
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
