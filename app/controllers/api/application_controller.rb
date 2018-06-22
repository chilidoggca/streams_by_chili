class Api::ApplicationController < ApplicationController
  skip_before_action :verify_authenticity_token

  def not_found
    render(
      json: {
        errors: [{
          type: 'NotFound'
        }]
      },
      status: :not_found # :not_found is alias for 404 in rails
    )
  end

  private
  def user_signed_in?
    current_user.present?
  end
  helper_method :user_signed_in?

  def current_user
    token_type, token = request.headers["AUTHORIZATION"]&.split(" ") || []

    case token_type&.downcase
    when 'jwt'
      begin
        payload=JWT.decode(
          token,
          Rails.application.secrets.secret_key_base
        )&.first

        @user ||= User.find(payload["id"])
      rescue JWT::DecodeError => error
        nil
      end
    end
  end
  helper_method :current_user

  # def authenticate_user!
  #   head :unauthorized unless current_user.present?
  # end

end
