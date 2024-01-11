# Project 4 - Rawletube
### A Youtube Video Tracking Application
#### Technologies Used
- React
- JavaScript
- HTML
- CSS
- Python
- Django Rest API / REST Framework
- Render / Heroku
- bit.io
- Bonus - Youtube API

#### Wireframes

Model
![Model](https://i.imgur.com/2CLiIM9.png)

Layout
![Layout](https://i.imgur.com/1zc1nr1.png)

#### Frontend Components
Index - Landing Page / Home Page
- New - Left-side Panel for adding new link

Card - Indivudal Link Page


#### Routes


| Route  | Path  | Function  | Request Type  |
|---|---|---|---|
| Index  | /videos  | Display all video link cards  | GET  |
| Show  | /videos/:id  | Display one video link card  | GET  |
| Create  | /videos  | Create a new video link card  | POST  |
| Update  | /videos/:id  | Update an existing video link card  | PUT  |
| Delete | /videos/:id  | Delete an existing video link card  | DELETE  |


#### Plan
1. Establish functioning backend (DONE)

2. Build frontend application that incorporates CRUD functionality

3. Style application

4. Bonus: Utilizing Youtube API calls and React Router, display each video's corresponding thumbnail on the video link card