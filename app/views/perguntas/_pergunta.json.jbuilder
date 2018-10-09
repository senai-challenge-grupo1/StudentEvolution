json.extract! pergunta, :id, :area, :nivel, :texto, :resposta1, :resposta2, :resposta3, :resposta4, :resposta_correta, :aprovada, :User_id, :created_at, :updated_at
json.url pergunta_url(pergunta, format: :json)
