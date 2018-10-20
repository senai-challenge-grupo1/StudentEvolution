class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, 
         :validatable, authentication_keys: [:login]

  validates :login, presence: :true, uniqueness: { case_sensitive: false }
end
