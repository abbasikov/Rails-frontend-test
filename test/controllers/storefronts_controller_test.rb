require "test_helper"

class StorefrontsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @storefront = storefronts(:one)
  end

  test "should get index" do
    get storefronts_url
    assert_response :success
  end

  test "should get new" do
    get new_storefront_url
    assert_response :success
  end

  test "should create storefront" do
    assert_difference("Storefront.count") do
      post storefronts_url, params: { storefront: {  } }
    end

    assert_redirected_to storefront_url(Storefront.last)
  end

  test "should show storefront" do
    get storefront_url(@storefront)
    assert_response :success
  end

  test "should get edit" do
    get edit_storefront_url(@storefront)
    assert_response :success
  end

  test "should update storefront" do
    patch storefront_url(@storefront), params: { storefront: {  } }
    assert_redirected_to storefront_url(@storefront)
  end

  test "should destroy storefront" do
    assert_difference("Storefront.count", -1) do
      delete storefront_url(@storefront)
    end

    assert_redirected_to storefronts_url
  end
end
