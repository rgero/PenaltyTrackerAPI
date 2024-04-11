# Requirements for Viable Project
In order for this to be a viable project, this project must fully implement the existing Penalty Tracker Project that was originally written in Python.

* It must be able to fetch the new penalty data from the NHL's public API
* It must store the fetched data in a Mongo database
* It must prevent an end user to put any new data into the database. It should be the only one who can.
* It must allow an end user to search for all the data
* It must allow the end user to search for specific criteria.
* It must return the results in JSON.

In addition to the above, I want it to be fully covered by automated tests.

# Updates on April 2024
- I want to switch the database to Supabase. Doing this will enable me to quickly get a Front End up and running
- The public API has changed for the NHL data. This needs to be updated.