# 🚀 Express.js RESTful API - Product Management System

A complete RESTful API built with Express.js for managing products with advanced features like authentication, validation, search, pagination, and comprehensive error handling.

## 📋 Features

- **🔐 Authentication** - API key-based authentication
- **✅ Validation** - Request validation middleware
- **📊 Advanced Filtering** - Search, filter by category, pagination
- **🔄 CRUD Operations** - Full Create, Read, Update, Delete functionality
- **📈 Statistics** - Product analytics and insights
- **🔍 Error Handling** - Comprehensive error management
- **📝 Logging** - Request logging middleware

## 🏗️ Project Structure
      express-js-server-side-framework-DILHT/
├── config/
│   └── config.js              # Environment configuration
├── server/
│   ├── server.js              # Server entry point
│   ├── express.js             # Express app configuration
│   ├── controllers/
│   │   └── product.controller.js  # Product business logic
│   ├── routes/
│   │   └── product.route.js   # Product routes
│   ├── middlewares/
│   │   ├── authenticate.middleware.js    # API key authentication
│   │   ├── errorHandler.middleware.js    # Global error handling
│   │   ├── logger.middleware.js          # Request logging
│   │   └── validation.middleware.js      # Input validation
│   └── models/
│       └── product.model.js   # In-memory data store
├── errors/
│   └── customError.js         # Custom error classes
├── .env                       # Environment variables
├── .env.example               # Environment template
└── package.json

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd express-js-server-side-framework-DILHT
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional)
Create a `.env` file:
```env
PORT=3000
API_KEY=your-secret-api-key-here
NODE_ENV=development
```

4. **Start the server**
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### Authentication
All API endpoints require authentication via API key in the header:
```http
x-api-key: 12345
```

### Endpoints

#### 🏠 Root Endpoint
```http
GET /
```
**Response:**
```json
{
  "message": "Hello world! Welcome to my Express.js server."
}
```

#### 📦 Product Endpoints

**Get All Products**
```http
GET /api/products
```
**Query Parameters:**
- `category` - Filter by category
- `page` - Page number (default: 1)
- `limit` - Items per page (default: all)
- `q` - Search term

**Example:**
```bash
curl -H "x-api-key: 12345" "http://localhost:3000/api/products?category=electronics&page=1&limit=5"
```

**Get Product by ID**
```http
GET /api/products/:id
```
**Example:**
```bash
curl -H "x-api-key: 12345" http://localhost:3000/api/products/1
```

**Create Product**
```http
POST /api/products
Content-Type: application/json
```
**Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "category": "electronics",
  "inStock": true
}
```
**Example:**
```bash
curl -X POST -H "x-api-key: 12345" -H "Content-Type: application/json" \
  -d '{"name":"New Product","description":"Description","price":99.99,"category":"electronics","inStock":true}' \
  http://localhost:3000/api/products
```

**Update Product**
```http
PUT /api/products/:id
Content-Type: application/json
```
**Example:**
```bash
curl -X PUT -H "x-api-key: 12345" -H "Content-Type: application/json" \
  -d '{"price":89.99,"inStock":false}' \
  http://localhost:3000/api/products/1
```

**Delete Product**
```http
DELETE /api/products/:id
```
**Example:**
```bash
curl -X DELETE -H "x-api-key: 12345" http://localhost:3000/api/products/1
```

#### 🔍 Advanced Features

**Search Products**
```http
GET /api/products/search?q=search_term
```
**Example:**
```bash
curl -H "x-api-key: 12345" "http://localhost:3000/api/products/search?q=laptop"
```

**Product Statistics**
```http
GET /api/products/stats
```
**Response:**
```json
{
  "message": "Product statistics",
  "data": {
    "totalProducts": 10,
    "categories": {
      "electronics": 5,
      "kitchen": 3,
      "fitness": 2
    },
    "inStock": 8,
    "outOfStock": 2
  }
}
```

## 🛡️ Error Handling

The API provides comprehensive error handling:

- **400 Bad Request** - Validation errors
- **401 Unauthorized** - Missing API key
- **403 Forbidden** - Invalid API key
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server errors

**Example Error Response:**
```json
{
  "error": true,
  "message": "Product not found"
}
```

## 🧪 Testing the API

### Using cURL

**Test Authentication:**
```bash
# Without API key (should fail)
curl http://localhost:3000/api/products

# With invalid API key (should fail)
curl -H "x-api-key: wrong-key" http://localhost:3000/api/products

# With valid API key (should work)
curl -H "x-api-key: 12345" http://localhost:3000/api/products
```

**Test CRUD Operations:**
```bash
# Create a product
curl -X POST -H "x-api-key: 12345" -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":49.99,"category":"test","inStock":true}' \
  http://localhost:3000/api/products

# Get all products
curl -H "x-api-key: 12345" http://localhost:3000/api/products

# Update a product (replace ID)
curl -X PUT -H "x-api-key: 12345" -H "Content-Type: application/json" \
  -d '{"price":39.99}' \
  http://localhost:3000/api/products/REPLACE_WITH_ID

# Delete a product (replace ID)
curl -X DELETE -H "x-api-key: 12345" http://localhost:3000/api/products/REPLACE_WITH_ID
```

**Test Advanced Features:**
```bash
# Search
curl -H "x-api-key: 12345" "http://localhost:3000/api/products/search?q=electronics"

# Filter by category
curl -H "x-api-key: 12345" "http://localhost:3000/api/products?category=electronics"

# Pagination
curl -H "x-api-key: 12345" "http://localhost:3000/api/products?page=1&limit=2"

# Statistics
curl -H "x-api-key: 12345" http://localhost:3000/api/products/stats
```

### Using Postman

1. Import the collection or create requests manually
2. Set header: `x-api-key: 12345`
3. For POST/PUT requests, set `Content-Type: application/json`

## 🔧 Configuration

The application uses the following configuration (defaults):

| Setting | Default | Description |
|---------|---------|-------------|
| PORT | 3000 | Server port |
| API_KEY | 12345 | Authentication key |
| NODE_ENV | development | Environment mode |

## 🎯 Key Features Implemented

### Middleware
- **Logging**: Logs all requests with method, URL, and timestamp
- **Authentication**: API key validation for all product routes
- **Validation**: Input validation for product creation/updates
- **Error Handling**: Global error handling with custom error classes

### Advanced Features
- **Search**: Full-text search across name, description, and category
- **Filtering**: Filter products by category
- **Pagination**: Paginated results with page and limit parameters
- **Statistics**: Product analytics and category counts

### Error Classes
- `NotFoundError`: For 404 responses
- `ValidationError`: For 400 validation errors

## 📝 Development

### Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Adding New Features
1. Create controller functions in `controllers/`
2. Define routes in `routes/`
3. Add middleware in `middlewares/` if needed
4. Update validation as required

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the MERN Stack curriculum.

---

## 🆘 Troubleshooting

### Common Issues

**"Cannot set headers after they are sent to the client"**
- Ensure all response methods have `return` statements
- Check middleware order in `express.js`

**Authentication failures**
- Verify `x-api-key` header is present
- Check API key matches configured value

**Validation errors**
- Ensure required fields are provided
- Check data types match expectations

**Port already in use**
- Change PORT in config or kill existing process
- Use `npx kill-port 3000` to clear port

---

**Built with ❤️Daniel Kasambala using Express.js**