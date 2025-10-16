// Import required modules
const connect = require('connect');
const http = require('http');
const url = require('url');

// Create Connect app
const app = connect();

// Calculate function
function calculate(req, res) {
    // Parse the URL
    const queryObject = url.parse(req.url, true).query;

    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);

    let result;
    let operator;

    // Check if x and y are valid numbers
    if (isNaN(x) || isNaN(y)) {
        res.end("Error: x and y must be numbers");
        return;
    }

    // Determine operation
    switch (method) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end("Error: Cannot divide by zero");
                return;
            }
            result = x / y;
            operator = '/';
            break;
        default:
            res.end("Error: Invalid method. Use add, subtract, multiply, or divide");
            return;
    }

    // Send result
    res.end(`${x} ${operator} ${y} = ${result}`);
}

// Use Connect middleware
app.use(calculate);

// Start server
http.createServer(app).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
