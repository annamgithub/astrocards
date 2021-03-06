ActiveAdmin.register User do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  form do |f|
    f.inputs "Admin Details" do
    f.input :username
    f.input :email
    f.input :password

    end
    f.actions
  end

  permit_params :username, :email, :password
  #
  # or
  #
  # permit_params do
  #   permitted = [:username, :email, :password_digest]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
