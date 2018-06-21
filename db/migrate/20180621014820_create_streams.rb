class CreateStreams < ActiveRecord::Migration[5.1]
  def change
    create_table :streams do |t|
      t.string :title
      t.string :description
      t.string :videoId, index: {unique: true}
      t.string :thumbnail
      t.string :livechatId, index: {unique: true}
      t.string :publishedAt

      t.timestamps
    end
  end
end
