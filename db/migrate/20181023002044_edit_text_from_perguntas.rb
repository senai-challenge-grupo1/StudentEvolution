class EditTextFromPerguntas < ActiveRecord::Migration[5.0]
  def change
  	reversible do |dir|
      change_table :perguntas do |t|
        dir.up   { t.change :texto, :text }
        dir.down { t.change :texto, :string }
      end
    end
  end
end
