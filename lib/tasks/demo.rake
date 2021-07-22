namespace :demo do 
  desc 'Set up Demo Dummy Data'
  task setup: :environment do
    # basically you want to FLUSH out all records and build a "sample" system
    Job.destroy_all
    Caregiver.destroy_all
    Employer.destroy_all

    user1 = Employer.create(username: "hope", password: "1", password_confirmation: "1", name: "hope bradley", bio: "hi", img_url: "default_profile_img.jpeg")
    # user2 = Employer.create()
    # user3 = Caregiver.create()
    # user4 = Caregiver.create()

    # create diff user types with passwords
    # create jobs etc and asisgn to employers or caregtivers
    # update this rake task and re-run it when you want new data
  end
end