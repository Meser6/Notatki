Feature: Highlight assets

    Opis feature

  Background:       # odpowiednik beforEacha
    Given I am on main page
      And I open random tab

  Scenario Outline: Filters - '<filterType>'      # Scenario Outline jak chcemy wykonac duzo testow z taimi samymi stepami a innymi paramterami
     When I check random filter '<filterType>'    # '<string>' tak przekazujemy stringa
     Then There should be <amount> icons          # <int> a tak inta
    Examples:
      | filterType  | amount    |
      | assets      | 2         |
      | companies   | 3         |

  Scenario: Filters 2                      # pojedyczy test
     When I check random filter 'napis'    # '<string>' tak przekazujemy stringa
     Then There should be 3 icons          # <int> a tak inta





// Tidy Gherkin - program do ustawiania tabow