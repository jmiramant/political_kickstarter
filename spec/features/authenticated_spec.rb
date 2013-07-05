require 'spec_helper'


describe "Authenticated User" do

  include FeatureHelpers

  before do
    @user = create(:user)
    login(@user)
  end

  it "can reach new campaign page" do
    visit new_campaign_path
    expect(page).to have_content("Create Campaign")
  end

  it "can log out" do
    visit root_path
    click_link 'Logout'
    expect(page).to have_content("Signed out successfully")
  end

end