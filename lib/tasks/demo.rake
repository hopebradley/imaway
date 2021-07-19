namespace :demo do 
  desc 'Set up Demo Dummy Data'
  task setup: :environment do
    # basically you want to FLUSH out all records and build a "sample" system
    Job.delete_all
    Caregiver.delete_all
    Employer.delete_all
    User.delete_all

    # create diff user types with passwords
    # create jobs etc and asisgn to employers or caregtivers
    # update this rake task and re-run it when you want new data
  end
end