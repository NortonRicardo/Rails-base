Rails.application.routes.draw do

  namespace :register do
    resources :animal_types
  end
  root 'dashboards#principal'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }


resources :dashboards do
  collection do
    get 'teste_email'
    get 'forms'
    get 'notification'
  end
end

end
