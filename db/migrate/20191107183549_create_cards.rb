class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.text :card_question
      t.text :card_answer
      # t.references :game, null: false, foreign_key: true
      # t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
