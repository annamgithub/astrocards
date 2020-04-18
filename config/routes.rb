Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # post '/auth/login', to: 'authentication#login'
  # get '/auth/verify', to: 'authentication#verify'
  scope '/api' do
    resources :users
    resources :games
    resources :cards
  end


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end