Rails.application.routes.draw do
  resources :users, only: [:show, :index, :create, :update]
  resources :workouts, only: [:create, :index]
  resources :goals, only: [:create, :index, :update, :destroy]
  resources :user_workouts, only: [:create, :index]

  resources :users, only: [:show] do
    resources :workouts, only: [:index]
  end

  resources :workouts, only: [:show] do
    resources :user_workouts, only: [:show, :index]
  end

  post "/login", to: "sessions#create"
  delete "/login", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/find_title/:word", to: "workouts#find_title"

  #Create a custom route that takes a parameter of a single word. 
  #That route should take us to an action where we look through workouts to see 
  #if any of the workouts have that word in the title (doesn’t have to be a full match). 
  #The action will render json of all the users who are associated with that workout. 
  #If there is no match render json that says so.
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
