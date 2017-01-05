Rails.application.routes.draw do

  resources :properties, only: :index

  root to: "pages#react"

  get "/*path", to: "pages#react"
end
