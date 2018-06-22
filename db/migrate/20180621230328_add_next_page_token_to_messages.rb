class AddNextPageTokenToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :next_page_token, :string
  end
end
