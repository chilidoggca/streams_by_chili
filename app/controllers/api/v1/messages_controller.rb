class Api::V1::MessagesController < Api::ApplicationController

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

  def stats_author
    if params[:order]&.upcase == 'ASC'
      @order = params[:order]
    else
      @order = 'DESC'
    end
    @messages = Message.group_by_author(@order)
    render json: @messages
  end

  def stats_author_24h
    if params[:order]&.upcase == 'ASC'
      @order = params[:order]
    else
      @order = 'DESC'
    end
    @messages = Message.group_by_author_24h(@order)
    render json: @messages
  end

end
