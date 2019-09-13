Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a <Skills> job with in <Country> / <City>


        Given EPAM carrers page is opened
        When the careers page has loaded
        And the "searchForm" is visible

        When the "locationFilterBox" is clicked
        And <Country> and <City> is selected in Location filter box
        Then the "locationFilterBox" should contain <City>

        When the "SkillstFilterBox" is clicked
        And <Skills> is selected in department filter box
        Then the "departmentFilterBox" should contain <Skills>

    # 4	Search button is clicked
# The PositionName position should be visible
# The department of the position should be Department
# The location of the position should be City, Country
# There should be an Apply button for the position
# 5	Click on Apply button of the position
# The job description should contain City
# The job description should contain PositionName
        Then the job description should contain <PositionName>

        Examples:
            | Country | City     | Skills                    | PositionName              |
            | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer  |
            | Belarus | Minsk    | Software Architecture     | Test Automation Architect |