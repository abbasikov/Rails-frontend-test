require "application_system_test_case"

class StorefrontsTest < ApplicationSystemTestCase
  setup do
    @storefront = storefronts(:one)
  end

  test "visiting the index" do
    visit storefronts_url
    assert_selector "h1", text: "Storefronts"
  end

  test "should create storefront" do
    visit storefronts_url
    click_on "New storefront"

    click_on "Create Storefront"

    assert_text "Storefront was successfully created"
    click_on "Back"
  end

  test "should update Storefront" do
    visit storefront_url(@storefront)
    click_on "Edit this storefront", match: :first

    click_on "Update Storefront"

    assert_text "Storefront was successfully updated"
    click_on "Back"
  end

  test "should destroy Storefront" do
    visit storefront_url(@storefront)
    click_on "Destroy this storefront", match: :first

    assert_text "Storefront was successfully destroyed"
  end
end
