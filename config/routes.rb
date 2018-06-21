Rails.application.routes.draw do
  # devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'sign_up' }
  devise_for :users, skip: [:sessions], :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do
    get 'sign_in', :to => 'devise/sessions#new', :as => :new_user_session
    post 'sign_in', :to => 'devise/sessions#create', :as => :user_session
    get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  end

  root :to => "streams#index"

  resources :streams, only: :index

  # get 'chats/post_message'
  get 'chats/get_messages'
  
  get 'messages', :to => 'messages#index'
  get 'messages/author', :to => 'messages#author'
  get 'messages/chat', :to => 'messages#chat'

end
