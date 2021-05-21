class CreateMonsteras < ActiveRecord::Migration[6.1]
  def change
    create_table :monsteras do |t|
      t.string :name
      t.text :img_url
      t.text :details
      t.text :care
      t.text :water
      t.text :sun
      t.boolean :toxicity

      t.timestamps
    end
  end
end
