class Teste
	def initialize(id)
		@id = id
		@acertos = 0
  end

  def make(area)
    @perguntas = Pergunta.where(area: area).order(:id)
    @perguntas.each do |pergunta|
      case pergunta.area
        when "ce"
          pergunta.area = "Ciências Exatas"
        when "ch"
          pergunta.area = "Ciências Humanas"
        when "cb"
          pergunta.area = "Ciências Biológicas"
        when "lc"
          pergunta.area = "Linguagens e Códigos"
      end
    end
    
    @index = (@id.to_i - 1) * 4

    @questao1 = @perguntas[@index]
    @questao2 = @perguntas[@index+1]
    @questao3 = @perguntas[@index+2]
    @questao4 = @perguntas[@index+3]
  end

  def id
  	@id
  end

  def id=(id)
  	@id = id
  end

  def acertos
  	@acertos
  end

  def acertos=(acertos)
  	@acertos = acertos
  end

  def questao1
  	@questao1
  end

  def questao1=(questao1)
  	@questao1 = questao1
  end

  def questao2
  	@questao2
  end

  def questao2=(questao2)
  	@questao2 = questao2
  end

  def questao3
  	@questao3
  end

  def questao3=(questao3)
  	@questao3 = questao3
  end

  def questao4
  	@questao4
  end

  def questao4=(questao4)
  	@questao4 = questao4
  end
end
