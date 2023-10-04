Feature:: login to Application

as a vallid user
i want to login into application

Scenario: valid login
    Given i open login page
    When i submit login
    Then i should see homepage

Scenario: Invalid Login
    Given i open login page
    When i submit invalid account to login
    Then i should can not login