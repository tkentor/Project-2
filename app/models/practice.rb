class Practice < ActiveRecord::Base
  has_many :reflections
  belongs_to :user
  validates :title, presence: true,
                  length: { minimum: 5 }
end
