Rails.application.routes.draw do
  resources :users, only:[:show, :create, :update]
  resources :workouts, only:[:create, :index]
  resources :goals, only:[:create, :index, :update, :destroy]
  resources :reviews, only:[:create]

  post "/login", to: "sessions#create"
  delete "/login", to: "sessions#destroy"
  get "/me", to: "users#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
