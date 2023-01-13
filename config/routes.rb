Rails.application.routes.draw do
  
  resources :reviews
  resources :destinations, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]


  get "destinationreviews/:id", to: "destinations#show_destinations"
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
