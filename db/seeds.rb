# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Job.destroy_all
Caregiver.destroy_all
Employer.destroy_all

employer1 = Employer.create(username: "hope", password: "1", password_confirmation: "1", name: "Hope Bradley", bio: "hi", img_url: "default_profile_img.jpeg", status: "employer")
employer2 = Employer.create(username: "ben", password: "1", password_confirmation: "1", name: "Ben Bradley", bio: "hi", img_url: "default_profile_img.jpeg", status: "employer")
caregiver1 = Caregiver.create(username: "tim", password: "1", password_confirmation: "1", name: "Time Bradley", bio: "hi", img_url: "default_profile_img.jpeg", status: "caregiver")
caregiver2 = Caregiver.create(username: "mercy", password: "1", password_confirmation: "1", name: "Mercy Vigil", bio: "hi", img_url: "default_profile_img.jpeg", status: "caregiver")

job1 = employer1.jobs.create(title: "Babysitting for 3 kids", category: "children", salary: "12", salary_type: "hourly", date: "11/23/2021 from 2:00PM to 4:00PM")
job2 = employer1.jobs.create(title: "Water my plants this weekend", category: "plants", salary: "20", salary_type: "daily", date: "07/30/2021 at 6:00PM to 08/01/2021 at 4:00PM")
job3 = employer1.jobs.create(title: "Pets need feeding this week!", category: "pets", salary: "200", salary_type: "flat rate", date: "11/23/2021 at 2:00 to 11/30/2021 at 4:00 PM")
