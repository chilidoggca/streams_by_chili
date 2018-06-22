class ClientController < ApplicationController
  layout "client"
  before_action :authenticate_user!

  def index

  end
end
