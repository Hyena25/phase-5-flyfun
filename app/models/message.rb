class Message < ApplicationRecord
  belongs_to :user
  after_create_commit { broadcast_message }

  private 

  def broadcast_message
    ActionCable.server.broadcast('MessagesChannel', {
        id: self.id,
        body: self.body,
        user_id: self.user_id
    }) 
  end
end
