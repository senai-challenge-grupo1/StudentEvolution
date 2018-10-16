Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :perguntas
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home", as: "home"

  get "/game", to: "game#index", as: "game"
  get "/game/ciencias-exatas", to: "game#ce", as: "game_ce"
  get "/game/ciencias-humanas", to: "game#ch", as: "game_ch"
  get "/game/ciencias-biologicas", to: "game#cb", as: "game_cb"
  get "/game/ciencias-codigos", to: "game#lc", as: "game_lc"

  root to: 'pages#home'
end
