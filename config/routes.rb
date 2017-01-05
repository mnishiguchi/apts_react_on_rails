Rails.application.routes.draw do

  resources :properties, only: :index

  root to: "pages#react"

end
