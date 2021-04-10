# Vocabulary-Improver-Frontend

## OVERVIEW

Vocabulary Improver is a fun and useful way for users to sharpen and improve their vocabulary by finding synonyms and definitions.
This project will use the Google Dictionary API to allow the user to search for words.

## USER STORIES

When the user loads the page, they're greated with two forms: one for sign-up and one for sign-in.
After the user either signs-up or signs-in, the two boxes will be replaced by a search bar.
The user can enter any English word of their choosing into the search bar.
Once the user hits enter, a box will appear underneath the search bar displaying a definition for the word along with synonyms.
If the user chooses to, they can like the word adding it to a list.
When the user is finished, they can logout.
When the user returns to their profile, the words the saved/liked last time will appear in a box.

## MVPS
* a search bar to look up words.
* a place to display information on the words.
* a way to save words.
* a backend server to house user information.
* a way for a user to make a profile.

## STRETCH GOALS
* a way for users to view other user's profiles and word list.
* a way for users to add friends.
* a way for users to add their own list of synonyms or other information etymology.
* a way for users to get a translation into a language of their choosing.

## ROUTES INVENTORY


| Routes     | Path                     | Summary                                 |           
| -----------|--------------------------|-----------------------------------------|                          
| Post       | /word/search             | user needs to look up words.            |
| Put        | /word/update             | for maybe when user needs to update word|
| Post       | /search                  | for user login.                         |
| Post       | /signup                  | for user sign-up.                       |  
| Delete     | /word/delete             | Used for user's to remove word for list.|
| Post       | /word/save               | Used for user to save word.             |
| Get        | /word/findAll            | Find all words user has saved.          |
