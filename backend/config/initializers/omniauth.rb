Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '722637750583-gjv39a1dfjpka16hg7ev71qdmu3ptb2k.apps.googleusercontent.com', 'Bwek5BJjXgZV6D-7REycLxXP', scope: 'email,profile'
end
