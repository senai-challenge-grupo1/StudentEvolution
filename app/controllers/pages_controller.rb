class PagesController < ApplicationController
	def ranking
		@players = Player.all.order(score: :desc).limit(100)
	end
end
