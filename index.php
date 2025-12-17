<?php
/**
 * HridxAI React Application
 * This file serves the React app on Hostinger PHP hosting
 */

// Set proper headers for SPA
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

// Check if the built React app exists or not
$distPath = __DIR__ . '/dist';
$indexFile = $distPath . '/index.html';

if (!file_exists($indexFile)) {
    http_response_code(500);
    echo '<!DOCTYPE html>
    <html>
    <head>
        <title>Build Required</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .error { color: #e74c3c; background: #f8f9fa; padding: 20px; border-radius: 8px; }
        </style>
    </head>
    <body>
        <div class="error">
            <h1>Build Required</h1>
            <p>The React application needs to be built before deployment.</p>
            <p>Please run: <code>npm run build</code> and upload the <code>dist</code> folder contents.</p>
        </div>
    </body>
    </html>';
    exit;
}

// Read the built index.html file
$html = file_get_contents($indexFile);

// Optional: Add any server-side processing here
// For example, you could inject environment variables or analytics

// Output the HTML
echo $html;
?>
