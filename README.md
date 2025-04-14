## 🚀 CI/CD Pipeline (GitHub Actions + Azure)

This project uses a GitHub Actions workflow to automatically build and deploy the frontend to Azure App Service every time a commit is pushed to the `main` branch.

### 🛠 Workflow Details
- Triggers on push to `main`
- Installs dependencies and builds the React app
- Deploys the `build/` directory to Azure

### 🔐 Azure Setup
1. Create an **Azure App Service** (Linux) for Node.js.
2. Go to your App Service → **Deployment Center** → **Get Publish Profile**
3. In GitHub:
   - Navigate to **Settings → Secrets → Actions**
   - Create a new secret named: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Paste the entire content of the publish profile `.PublishSettings` file

### 📂 Workflow File Location
The CI/CD config lives in:
