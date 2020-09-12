class DashboardsController < ApplicationController

  def principal
  end

  def forms
  end

  def notification
    redirect_to root_path, success: "Deu certo"
  end

  def teste_email
    UserMailer.with(user: []).welcome_email.deliver_now
    redirect_to '/'
  end

end
