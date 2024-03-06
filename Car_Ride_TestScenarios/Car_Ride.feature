Feature: Long Car Journey

  Background: Given The Journey is 15 Hour Long
              And The Destination is a Remote Location


    Scenario: Mechanical Failure of The Car Mid Journey
      When The Car is in the middle of the journey
      And A Component of the Car Could Fail
      Then Car is Pre Checked for its Condition
      And The Fuel Tank is Full Before the Journey
      And The Brakes, Headlights, Tires are Pre Checked for its Condition


    Scenario: Related Documents Check
      When An Officer is Present for the Car Documents Check
      And The Officer Asks for the verification
      Then A Valid Driver's Lisence and Necessary Documents is safely present in the Car
      And The Documents are Pre Checked for its Validity


    Scenario: Foods Requirements
      When The Car is in a deserted location
      And There is No Shops Nearby
      Then I Have Enough Water in the Stock
      And I Have Enough Food To Avoid Starvation


      Scenario: Medical Emergency and Needs
        When There is No Clinics Around
        Then I have First Aid Kit in the Car
        And I have Emergency Medical Contacts in my Phone


      Scenario: The Phone Battery is Dead
        When I Pick my phone up to make an Emergency Call
        And I notice the Battery is dead
        Then I have one of the following Equipments in Car

        | Equipments |
        | A Mobile Phone Charger |
        | A Power Bank           |
        | A USB CHARGER          |
        | An Extra Fully Charged Phone |



      Scenario: Body Tiredness
        When There is a Possibility of Getting Tired
        And Falling Asleep middle of the journey
        Then I get a enough sleep at night before the journey


      Scenario : Money
        When There is an Unexpected Monetary Emergency
        And I Check my Car for Money
        Then i Have Atleast one of the following items with me

        | items |
        | A wallet full of Cash |
        | A Credit Card         |
        | A Mobile Digital Wallet |

