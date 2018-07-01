class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]

  def self.from_omniauth(access_token)
    data = access_token.info
    puts "+++++++++++++++++++++++++++++++++++++++++"
    puts access_token
    # puts "+++++++++++++++++++++++++++++++++++++++++"
    # puts access_token.extra
    # puts "+++++++++++++++++++++++++++++++++++++++++"
    # puts access_token.credentials
    # puts "+++++++++++++++++++++++++++++++++++++++++"
    # puts access_token.credentials.token
    # puts "+++++++++++++++++++++++++++++++++++++++++"
    # puts access_token.credentials.expires_at*1000
    user = User.where(email: data['email']).first
    unless user
      user = User.create(email: data['email'],
         password: Devise.friendly_token[0,20],
         provider: access_token.provider,
         uid: access_token.uid,
         access_token: access_token.credentials.token,
         expires_at: access_token.credentials.expires_at*1000
      )
    else
      begin
        user.update(
          provider: access_token.provider,
          uid: access_token.uid,
          access_token: access_token.credentials.token,
          expires_at: access_token.credentials.expires_at*1000
        )
      rescue
        puts "user info could not be updated on sign in"
      end
    end
    user
  end

end
