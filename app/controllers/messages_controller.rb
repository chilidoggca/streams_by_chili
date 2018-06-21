class MessagesController < ApplicationController
  def index
    @messages = Message.all.order(publishedAt: :desc)
    render json: @messages
  end

  def author
    @name = params[:name]
    @messages = Message.search_by_author(@name)
    # @messages = Message.where("authorName ilike ?", "#{params[:name]}%")#.order(publishedAt: :desc)
    render json: @messages
  end

  def chat
    @id = params[:id]
    @messages = Message.search_by_chat(@id)
    render json: @messages
  end
end
