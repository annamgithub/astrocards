class ApplicationController < ActionController::Base
     
  protect_from_forgery with: :null_session, prepend: true


  def fallback_index_html
    render :file => 'public/index.html'
  end
end
  