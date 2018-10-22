class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.integer :nivel,               default: 1
      t.integer :xp,                  default: 0
      t.integer :stress,              default: 0
      t.integer :bored,               default: 1
      t.integer :ce,                  default: 0
      t.integer :ch,                  default: 0
      t.integer :cb,                  default: 0
      t.integer :lc,                  default: 0
      t.integer :score,               default: 0
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
