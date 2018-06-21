class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :messageId, index: {unique: true}
      t.string :live_chat_id
      t.string :authorChannelId
      t.string :author_name
      t.string :displayMessage
      t.string :publishedAt

      t.timestamps
    end
  end
end
