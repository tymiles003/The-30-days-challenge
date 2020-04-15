Rails.application.routes.draw do
	root to: "pages#index"
  get 'pages/home'
  devise_for :views
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
