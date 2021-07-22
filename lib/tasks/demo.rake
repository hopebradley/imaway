namespace :demo do 
  desc 'Set up Demo Dummy Data'
  task setup: :environment do
    # basically you want to FLUSH out all records and build a "sample" system
    Job.destroy_all
    Caregiver.destroy_all
    Employer.destroy_all

    user1 = Employer.create(username: "hope", password: "1", password_confirmation: "1", name: "Hope Bradley", bio: "hi", img_url: "default_profile_img.jpeg")
    user2 = Employer.create(username: "ben", password: "1", password_confirmation: "1", name: "Ben Bradley", bio: "hi", img_url: "default_profile_img.jpeg")
    user3 = Caregiver.create(username: "tim", password: "1", password_confirmation: "1", name: "Time Bradley", bio: "hi", img_url: "default_profile_img.jpeg")
    user4 = Caregiver.create(username: "mercy", password: "1", password_confirmation: "1", name: "Mercy Vigil", bio: "hi", img_url: "default_profile_img.jpeg")

    # create diff user types with passwords
    # create jobs etc and asisgn to employers or caregtivers
    # update this rake task and re-run it when you want new data
  end
end