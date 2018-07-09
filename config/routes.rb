Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "pages#home", as: "home"

  get "/", to: "pages#home", as: "help"
  get "/", to: "pages#home", as: "about"

  root to: 'pages#home'
end
