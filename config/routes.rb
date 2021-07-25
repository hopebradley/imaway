Rails.application.routes.draw do
  
  resources :employers, only: [:create, :index, :destroy, :update]
  resources :caregivers, only: [:create, :index, :destroy, :update]
  resources :jobs
  post '/caregiver-login', to: 'sessions#create_caregiver_session'
  post '/employer-login', to: 'sessions#create_employer_session'
  delete '/logout', to: 'sessions#destroy'
  get '/employer', to: 'employers#show'
  get '/caregiver', to: 'caregivers#show'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
