# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# Character.create(name: 'Luke', movie: movies.first)

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
puts "ActiveAdmin user created!"

@user = User.new(email: 'test@test.com', password: 'password', password_confirmation: 'password', username: 'test')
@user.save
puts "User created!"

# Game.create!(name: 'Astronomy', user: @user)
# puts "New game created!"

# Card.create(card_question: 'What is the diameter of the moon?', card_answer: '2,160 miles', )


#CARD SEEDS
# [
# {
# id: 11,
# card_question: "What is "structural unemployment"?",
# card_answer: "The portion of unemployment that is due to changes in the structure of the economy that result in a significant loss of jobs in certain industries.",
# game_id: 3,
# user_id: 1,
# created_at: "2019-11-08T16:08:54.642Z",
# updated_at: "2019-11-08T16:08:54.642Z"
# },
# {
# id: 10,
# card_question: "What is the "labor force participation rate"?",
# card_answer: "The ratio of labor force to the total population 16 years old or older",
# game_id: 3,
# user_id: 1,
# created_at: "2019-11-08T16:07:37.196Z",
# updated_at: "2019-11-08T16:07:37.196Z"
# },
# {
# id: 9,
# card_question: "What is a market?",
# card_answer: "The means by which buyers and sellers carry out exchange.",
# game_id: 3,
# user_id: 1,
# created_at: "2019-11-08T16:06:35.322Z",
# updated_at: "2019-11-08T16:06:35.322Z"
# },
# {
# id: 8,
# card_question: "Define "marginal".",
# card_answer: "Incremental, additional, extra, or one more; refers to a change in an economic variable, a change in the status quo",
# game_id: 3,
# user_id: 1,
# created_at: "2019-11-08T16:05:58.980Z",
# updated_at: "2019-11-08T16:05:58.980Z"
# },
# {
# id: 7,
# card_question: "What is the study of how people make choices under conditions of scarcity and of the results of those choices for society?",
# card_answer: "economics",
# game_id: 3,
# user_id: 1,
# created_at: "2019-11-08T16:02:40.810Z",
# updated_at: "2019-11-08T16:02:40.810Z"
# },
# {
# id: 5,
# card_question: "What is the path that the Sun, Moon, & planets follow through the constellations?",
# card_answer: "The ecliptic",
# game_id: 2,
# user_id: 1,
# created_at: "2019-11-08T15:52:34.673Z",
# updated_at: "2019-11-08T15:52:34.673Z"
# },
# {
# id: 4,
# card_question: "Constellations (and the moon) appear to move across the sky at night because:",
# card_answer: "The Earth spins on its axis",
# game_id: 2,
# user_id: 1,
# created_at: "2019-11-08T15:52:00.473Z",
# updated_at: "2019-11-08T15:52:00.473Z"
# },
# {
# id: 3,
# card_question: "At new moon the Earth would appear to an observer on the Moon to be at ___phase",
# card_answer: "Full",
# game_id: 2,
# user_id: 1,
# created_at: "2019-11-08T15:51:03.380Z",
# updated_at: "2019-11-08T15:51:03.380Z"
# },
# {
# id: 2,
# card_question: "In 1928 the international Astronomical Union divided the entire sky into ___officially recognized constellations.",
# card_answer: "88",
# game_id: 2,
# user_id: 1,
# created_at: "2019-11-08T15:50:17.967Z",
# updated_at: "2019-11-08T15:50:17.967Z"
# },
# {
# id: 1,
# card_question: "What is the diameter of the moon?",
# card_answer: "2,160 miles",
# game_id: 2,
# user_id: 1,
# created_at: "2019-11-08T15:42:34.139Z",
# updated_at: "2019-11-08T15:42:34.139Z"
# }
# ]

#GAME SEEDS
# [
# {
# id: 3,
# name: "Economics",
# user_id: 1,
# created_at: "2019-11-08T15:55:02.993Z",
# updated_at: "2019-11-08T15:55:02.993Z"
# },
# {
# id: 2,
# name: "Astronomy",
# user_id: 1,
# created_at: "2019-11-08T15:29:43.338Z",
# updated_at: "2019-11-08T15:39:15.069Z"
# }
# ]