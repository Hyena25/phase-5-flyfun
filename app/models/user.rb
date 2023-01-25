class User < ApplicationRecord
    has_secure_password
    has_many :reviews 
    has_many :messages
    has_many :destinations, through: :reviews

    validates :username, length: { minimum: 8 }
    validate :password_conditions, on: :create
    validate :password_conditions, if: :password_exists?
    private
    def password_conditions
        minimum_length = 8
        errors.add :password, 'must include at least one uppercase letter' unless password =~ /\A(?=.*[A-Z])/
        errors.add :password, 'must include at least one lowercase letter' unless password =~ /\p{Lower}/
        errors.add :password, 'must include at least one number' unless password =~ /\A(?=.*[0-9])/
        errors.add :password, 'must include at least one special character' unless password =~ /\A(?=.*[^A-Za-z0-9])/
        errors.add :password, "is too short (minimum is #{minimum_length} characters)" unless password.length >= minimum_length
        errors.add :password, "can't be blank" unless password
    end
    def password_exists?
        password
    end
end
