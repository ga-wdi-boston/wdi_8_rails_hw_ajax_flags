AjaxFlags::Application.routes.draw do
  root to: 'home#index'
  resources :countries, only: :index
end
