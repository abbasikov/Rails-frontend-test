# Invisible Commerce Rails Frontend Test

Thank you for applying to Invisible Commerce! This is a small test to help us get a sense of your skills and how you approach problems.

## The Task

We have a simple Rails app that allows editing of custom "Return Reasons". We'd like you to take the Figma design and implement it in the app.

This involves a few things:
1. Update the application layout to match the design (using Tailwind CSS, already included in the app)
2. Update the page template to match the design (`app/views/storefronts/edit.html.erb`)
3. Move the nested form for each Reason into a modal, and update the design to match
4. Enable drag-and-drop reordering of the Reasons

## Getting Started

We are using Ruby 3.2.2 and Rails 7.1.2 in this project. Make sure your environment is set up to match.

1. Fork this repo and clone it locally
2. Run `bundle install`
3. Run `./bin/dev`
4. Visit `http://localhost:3000/` (which will point to `/storefronts/1/edit`)

The included SQLite database has been pre-populated a single Storefront with 7 Reasons, which matches the Figma design. 
You can add more Reasons by clicking the "Add Reason" button and then saving or delete them by clicking the "Remove" button and saving.

## Notes

- For CSS portions, you are required to use Tailwind CSS
- For JS portions, you are required to use Stimulus/Hotwire
- We will be evaluating your work based on the quality of the code, the accuracy of the implementation, and the attention to detail in the design
- We will also be evaluating the "Railsyness" of your code, so please try to stick to the idioms and conventions of the framework

## Submitting Your Work

When you're done, please send us a link to your fork of this repo.
