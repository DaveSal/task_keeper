Rails.application.routes.draw do
  root to: 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
end
