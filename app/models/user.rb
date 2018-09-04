class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, 
         :validatable, authentication_keys: [:login]

  validates :login, presence: :true, uniqueness: { case_sensitive: false }

  # attr_writer :login

  # def login
  #   @login || self.login
  # end
end
