# Sri Lanka Travel Guide API Documentation

## Overview
The Sri Lanka Travel Guide API provides access to a comprehensive database of tourist spots, hotels, local food, and travel tips for Sri Lanka.

## Endpoints

### Tourist Spots
- `GET /tourist-spots`: Retrieve a list of all tourist spots in Sri Lanka.
- `GET /tourist-spots/{id}`: Retrieve a specific tourist spot by ID.
- `POST /tourist-spots`: Create a new tourist spot.

### Hotels
- `GET /hotels`: Retrieve a list of all hotels in Sri Lanka.
- `GET /hotels/{id}`: Retrieve a specific hotel by ID.
- `POST /hotels`: Create a new hotel.

### Local Food
- `GET /local-food`: Retrieve a list of all local food items in Sri Lanka.
- `GET /local-food/{id}`: Retrieve a specific local food item by ID.
- `POST /local-food`: Create a new local food item.

### Travel Tips
- `GET /travel-tips`: Retrieve a list of all travel tips for Sri Lanka.
- `GET /travel-tips/{id}`: Retrieve a specific travel tip by ID.
- `POST /travel-tips`: Create a new travel tip.

## API Keys
To access the API, you will need to obtain an API key. Please contact us at [support@sri-lanka-travel-guide.com](mailto:support@sri-lanka-travel-guide.com) to request an API key.

## Authentication
The API uses JSON Web Tokens (JWT) for authentication. You can obtain a JWT token by sending a `POST` request to `/auth/login` with your username and password.

## Error Handling
The API returns the following error codes:
- 400: Bad request
- 401: Unauthorized
- 404: Not found
- 500: Internal server error

## API Versioning
The API uses semantic versioning. The current version is `1.0.0`.

## Contact Us
If you have any questions or need further assistance, please contact us at [support@sri-lanka-travel-guide.com](mailto:support@sri-lanka-travel-guide.com).