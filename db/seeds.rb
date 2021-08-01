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
Alert.destroy_all

bio_text = "Pellentesque placerat, ante vitae viverra consequat, ipsum massa pellentesque tortor, 
            id consectetur elit odio ultrices lorem. Quisque non orci ullamcorper, tincidunt est viverra, 
            ullamcorper justo. Quisque semper purus dui, vitae convallis leo auctor eu."

employer1 = Employer.create(username: "hope", password: "1", password_confirmation: "1", name: "Hope Bradley", bio: bio_text, img_url: "default_profile_img.jpeg", status: "employer")
employer2 = Employer.create(username: "ben", password: "1", password_confirmation: "1", name: "Ben Bradley", bio: bio_text, img_url: "default_profile_img.jpeg", status: "employer")
caregiver1 = Caregiver.create(username: "tim", password: "1", password_confirmation: "1", name: "Tim Bradley", bio: bio_text, img_url: "default_profile_img.jpeg", status: "caregiver")
caregiver2 = Caregiver.create(username: "mercy", password: "1", password_confirmation: "1", name: "Mercy Vigil", bio: bio_text, img_url: "default_profile_img.jpeg", status: "caregiver")

job1 = employer1.jobs.create(title: "Babysitting for 3 kids", category: "Children", salary: "12", salary_type: "Per Hour", date: "Mon Aug 2 2021 at 5:00PM-Mon Aug 2 2021 at 10:00PM")
job2 = employer1.jobs.create(title: "Water my plants this weekend", category: "Plants", salary: "20", salary_type: "Per Day", date: "Fri Aug 6 2021 at 6:00PM-Mon Aug 9 2021 at 4:00PM")
job3 = employer1.jobs.create(title: "Pets need feeding this week!", category: "Pets", salary: "200", salary_type: "Flat Rate", date: "Tues Aug 10 2021 at 2:00PM-Sat Aug 14 2021 at 4:00PM")
