class CreatePerguntas < ActiveRecord::Migration[5.0]
  def change
    create_table :perguntas do |t|
      t.string :area
      t.integer :nivel
      t.string :texto
      t.string :resposta1
      t.string :resposta2
      t.string :resposta3
      t.string :resposta4
      t.integer :resposta_correta
      t.boolean :aprovada
      t.belongs_to :User, foreign_key: true

      t.timestamps
    end
  end
end
