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

employer1 = Employer.create(username: "brianafaror", password: "1111", password_confirmation: "1111", name: "Briana Faror", bio: bio_text, img_url: "briana_faror.jpeg", status: "employer", phone_number: "+14044934294")
employer2 = Employer.create(username: "johnsmith", password: "1111", password_confirmation: "1111", name: "John Smith", bio: bio_text, img_url: "john_smith.jpeg", status: "employer")
employer3 = Employer.create(username: "katherinevan", password: "1111", password_confirmation: "1111", name: "Katherine Van", bio: bio_text, img_url: "katherine_van.jpeg", status: "employer")
caregiver1 = Caregiver.create(username: "lilahjackson", password: "1111", password_confirmation: "1111", name: "Lilah Jackson", bio: bio_text, img_url: "lilah_jackson.jpeg", status: "caregiver")
caregiver2 = Caregiver.create(username: "violettalarivi", password: "1111", password_confirmation: "1111", name: "Violetta Larivi", bio: bio_text, img_url: "violetta_larivi.jpeg", status: "caregiver")
caregiver3 = Caregiver.create(username: "ninatalbot", password: "1111", password_confirmation: "1111", name: "Nina Talbot", bio: bio_text, img_url: "nina_talbot.jpeg", status: "caregiver")

job1 = employer1.jobs.create(title: "Babysitting for 3 kids", category: "Children", salary: "12", salary_type: "Per Hour", date: "Mon Aug 2 2021 at 5:00PM-Mon Aug 2 2021 at 10:00PM")
job2 = employer1.jobs.create(title: "Water my plants this weekend", category: "Plants", salary: "20", salary_type: "Per Day", date: "Fri Aug 6 2021 at 6:00PM-Mon Aug 9 2021 at 4:00PM")

job3 = employer2.jobs.create(title: "Pets need feeding this week!", category: "Pets", salary: "200", salary_type: "Flat Rate", date: "Tues Aug 10 2021 at 2:00PM-Sat Aug 14 2021 at 4:00PM", caregiver_id: caregiver1.id)
job4 = employer2.jobs.create(title: "Help for date night", category: "Children", salary: "10", salary_type: "Per Hour", date: "Tues Aug 31 2021 at 7:00PM-Tues Aug 31 2021 at 11:00PM", caregiver_id: caregiver3.id)
job5 = employer2.jobs.create(title: "Need babysitter after school", category: "Children", salary: "10", salary_type: "Per Hour", date: "Wed Aug 25 2021 at 2:00PM-Wed Aug 25 2021 at 6:00PM")

job6 = employer3.jobs.create(title: "Catsitting while I travel", category: "Pets", salary: "50", salary_type: "Per Day", date: "Thurs Sept 23 2021 at 11:00AM-Mon Sept 27 2021 at 1:00PM")
job7 = employer3.jobs.create(title: "Housesitting for vacation", category: "House", salary: "350", salary_type: "Flat Rate", date: "Sun Sept 5 2021 at 2:00PM-Fri Sept 10 2021 at 6:00PM", caregiver_id: caregiver1.id)

job3.caregiver_id = caregiver1.id
job7.caregiver_id = caregiver1.id
job5.caregiver_id = caregiver3.id