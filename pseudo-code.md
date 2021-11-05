# Requirements
* Accepts coins of 1,5,10,20,50.
* Allow user to select products Coke(55), Tango(35), Water(45)
* Allow user to take refund by cancelling the request.
* Return the selected product and remaining change if any
* Allow reset operation for machine supplier.

# Functions

* Add coin
    * total increases by selected amount
* Cancel
    * returns all the entered coins
* Choose drink
    * money is added to machine
        * if not enough money added - error
    * return selected drink
        * quantity of selected drink decreases by 1
    * return remaining change    
* Reset
    * returns all money taken
    * sets quantity of all drinks back to default