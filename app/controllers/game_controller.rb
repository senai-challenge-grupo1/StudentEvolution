class GameController < ApplicationController
	before_action :authenticate_user!
	
	def index
		@player = Player.where(user: current_user)[0]
		
		if @player.nil?
			@player = Player.new(nivel: 1, user: current_user)
			@player.save
		end

		require "json"
		@player_json = @player.to_json.html_safe
	end

	def ce
		@tests = []
		@perguntas = Pergunta.where(area: "ce", aprovada: true)
		@qtd = Integer(@perguntas.count / 4)

		for i in 1..@qtd
			@teste = Teste.new(i)
			@tests.push(@teste)
		end

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def ce_test
		@teste = Teste.new(params[:id])
		@teste.make("ce")

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def ch
		@tests = []
		@perguntas = Pergunta.where(area: "ch", aprovada: true)
		@qtd = Integer(@perguntas.count / 4)

		for i in 1..@qtd
			@teste = Teste.new(i)
			@tests.push(@teste)
		end

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def ch_test
		@teste = Teste.new(params[:id])
		@teste.make("ch")

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def cb
		@tests = []
		@perguntas = Pergunta.where(area: "cb", aprovada: true)
		@qtd = Integer(@perguntas.count / 4)

		for i in 1..@qtd
			@teste = Teste.new(i)
			@tests.push(@teste)
		end

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def cb_test
		@teste = Teste.new(params[:id])
		@teste.make("cb")

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def lc
		@tests = []
		@perguntas = Pergunta.where(area: "lc", aprovada: true)
		@qtd = Integer(@perguntas.count / 4)

		for i in 1..@qtd
			@teste = Teste.new(i)
			@tests.push(@teste)
		end

		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end

	def lc_test
		@teste = Teste.new(params[:id])
		@teste.make("lc")
		
		@player = Player.where(user: current_user)[0]
		require "json"
		@player_json = @player.to_json.html_safe
	end
end
