Rails.application.routes.draw do
  resources :players
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :perguntas
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home", as: "home"
  get "/ranking", to: "pages#ranking", as: "ranking"

  get "/game", to: "game#index", as: "game"

  get "/game/ciencias-exatas/", to: "game#ce", as: "game_ce"
  get "/game/ciencias-exatas/:id", to: "game#ce_test", as: "game_ce_test"

  get "/game/ciencias-humanas/", to: "game#ch", as: "game_ch"
  get "/game/ciencias-humanas/:id", to: "game#ch_test", as: "game_ch_test"

  get "/game/ciencias-biologicas/", to: "game#cb", as: "game_cb"
  get "/game/ciencias-biologicas/:id", to: "game#cb_test", as: "game_cb_test"

  get "/game/linguagens-codigos/", to: "game#lc", as: "game_lc"
  get "/game/linguagens-codigos/:id", to: "game#lc_test", as: "game_lc_test"

  root to: 'pages#home'
end
