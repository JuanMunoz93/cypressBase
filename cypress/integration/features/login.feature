Feature: application login

Scenario: Successful login - declarative
    Given I am in the login site
    When I try to login using valid credentials
    Then I am able to enter into the site
    
Scenario: Successful login - imperative
    Given I am in the login site
    When I write a valid user
    And I write a valid password
    And I click login
    Then I am redirect to the shop site 
    
Scenario: Failed login - locked user
    Given I am in the login site
    When I try to login using locked credentials
    Then I am not able to enter into the site