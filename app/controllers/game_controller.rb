class GameController < ApplicationController
	before_action :authenticate_user!
	
	def index
		
	end

	def ce
		@tests = []
		@perguntas = Pergunta.all
		# @qtd = Integer(@perguntas / 4)
		@qtd = 20

		for i in 1..@qtd
			@teste = Teste.new(i)
			@tests.push(@teste)
		end
	end

	def ch
		
	end

	def cb
		
	end

	def lc
		
	end
end
