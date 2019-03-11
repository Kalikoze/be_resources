# Welcome to Turing's BE Resources

This is the GitHub home of a Jekyll site generated to document and provided easy access to resources for instructors of the Back End Engineering Program at the [Turing School of Software & Design](https://www.turing.io/).

This site is deployed at [https://be-resources.herokuapp.com/](https://be-resources.herokuapp.com/). In order to access that page you will need to be a member of the Turing School staff team on GitHub. If you are having difficulty accessing the site and you believe this is in error please reach out to another staff member.

## Local Setup

This project uses [Jekyll Auth](https://github.com/benbalter/jekyll-auth)

In order to set up this project to view locally:

* Clone the project.
* Copy the `.sample_env` file to `.env` and edit it with the following values:
    * [GitHub Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
    * [GitHub Client ID & Client Secret](https://auth0.com/docs/connections/social/github)
    * Turing Team ID: Use `curl -H "Authorization: token <very-long-access-token>" https://api.github.com/orgs/turingschool/teams` replacing `<very-long-access-token>` withyour GitHub Token. The ID will be associated with the group named Staff.
