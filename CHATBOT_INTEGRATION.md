# AI Chatbot Integration Guide

## Overview
The AI Chatbot button has been integrated into the Haven Health frontend and linked to the chatbot application.

## Changes Made

### 1. Frontend Navigation Updates
- **Files Modified:**
  - `Frontend/index.html`
  - `Frontend/drop_down.html`

- **Added Link:** 
  ```html
  <a href="http://localhost:8080" target="_blank">🤖 AI Chatbot</a>
  ```

### 2. Chatbot Template Updates
- **File Modified:** `chatbot/templates/index.html`
- **Changes:**
  - Updated page title to "Haven Health - Medical Chatbot"
  - Added "Back to Haven Health" button with red gradient styling
  - Button positioned at top-left corner for easy navigation back to main site

## How to Use

### Step 1: Start the Backend Server
```bash
cd backend
uvicorn app:app --reload --port 8000
```

### Step 2: Start the Chatbot Server
```bash
cd chatbot
python app.py
# or
uvicorn app:app --reload --port 8080
```
The chatbot will be available at: `http://localhost:8080`

### Step 3: Open the Frontend
- If using Live Server: Open `Frontend/index.html` with Live Server (typically runs on `http://127.0.0.1:5500`)
- Or open the file directly in your browser

### Step 4: Navigate
1. Click on "🤖 AI Chatbot" in the navigation menu
2. The chatbot will open in a new tab
3. Use "← Back to Haven Health" button to return to the main site

## Important Notes

### URL Configuration
The links are currently set for local development:
- **Chatbot:** `http://localhost:8080`
- **Frontend:** `http://localhost:5500/Frontend/index.html`

### For Production Deployment
You'll need to update these URLs:

1. **In Frontend files** (`index.html`, `drop_down.html`):
   ```html
   <!-- Change from: -->
   <a href="http://localhost:8080" target="_blank">🤖 AI Chatbot</a>
   
   <!-- To your production URL: -->
   <a href="https://your-chatbot-domain.com" target="_blank">🤖 AI Chatbot</a>
   ```

2. **In Chatbot template** (`chatbot/templates/index.html`):
   ```html
   <!-- Change from: -->
   <a href="http://localhost:5500/Frontend/index.html" class="back-to-home">
   
   <!-- To your production URL: -->
   <a href="https://your-main-site-domain.com" class="back-to-home">
   ```

### Alternative: Serve Frontend from Backend
You can also serve the Frontend through the FastAPI backend (already configured):
```python
# In backend/app.py (already present)
app.mount("/Frontend", StaticFiles(directory="../Frontend", html=True), name="Frontend")
```

Then access via: `http://localhost:8000/Frontend/index.html`

And update the chatbot back button to:
```html
<a href="http://localhost:8000/Frontend/index.html" class="back-to-home">
```

## Testing

1. Start both servers (backend on 8000, chatbot on 8080)
2. Open Frontend in browser
3. Click "🤖 AI Chatbot" button
4. Verify chatbot opens in new tab
5. Verify "Back to Haven Health" button returns you to the main site
6. Test the chatbot functionality by asking medical questions

## Troubleshooting

**Issue:** Chatbot button shows error/doesn't load
- **Solution:** Make sure the chatbot server is running on port 8080

**Issue:** "Back to Haven Health" button doesn't work
- **Solution:** Verify your Frontend is running on the correct port (adjust URL if different)

**Issue:** CORS errors when chatbot tries to communicate
- **Solution:** The chatbot already has CORS middleware configured to allow all origins

## Environment Variables Required
Make sure you have these set for the chatbot to work:
```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_API_BASE=your_api_base_url
PINECONE_API_KEY=your_pinecone_api_key
```

## Features
- ✅ AI Chatbot accessible from main navigation
- ✅ Opens in new tab to keep main site accessible
- ✅ Easy navigation back to main site with styled button
- ✅ Consistent branding (Haven Health theme)
- ✅ Responsive design maintained
