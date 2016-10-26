AjaxFlags::Application.routes.draw do
  root to: 'home#index'
  resources :countries, only: :index
  get '/countries/showmore', to: 'countries#show'
end
