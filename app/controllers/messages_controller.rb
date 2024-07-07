class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.create!(message_params)
    ActionCable.server.broadcast 'chat_channel', message: @message.content, user: @message.user
  end

  private

  def message_params
    params.require(:message).permit(:content, :user)
  end
end
