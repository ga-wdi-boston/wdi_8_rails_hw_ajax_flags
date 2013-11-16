AjaxFlags::Application.routes.draw do
  root :to => "home#index"
  resources :home
  get "/countries/:step/:offset" => "home#countries"
  get "/country/:id" => "home#country"
end

