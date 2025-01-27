<<<<<<< HEAD
# CarePointPro
Patient Self Service App
=======
# InnovaForgeEMR
Our Electronic Medical Records (EMR) application is a cutting-edge solution designed to streamline healthcare management. It enables healthcare professionals to efficiently document, retrieve, and manage patient information in a secure, user-friendly interface. The application offers features such as patient demographics, medical history tracking, appointment scheduling, prescription management, and real-time data sharing among care teams. Built with compliance to healthcare regulations, the EMR application ensures data privacy and enhances the quality of patient care. Perfect for clinics, hospitals, and medical practices of all sizes, it optimizes workflows and fosters better health outcomes.

## Features
- **Node.js & React.js**: Fully configured for both server and client-side development.
- **MongoDB**: Pre-configured database setup.
- **Docker & Docker Compose**: Simplified containerization and orchestration.
- **ESLint**: Ensures code quality and consistency.
- **Prettier**: Automatic code formatting for a clean codebase.
- **Husky**: Git hooks to enforce code quality before commits and pushes.
- **Commitlint**: Enforces conventional commit messages for a consistent commit history.

## Getting Started

Follow these steps to set up your project quickly:

### 1. Clone the Repository

Clone the template repository to your local machine:
```bash
git clone https://github.com/fagbayibo/innovaForgeEMR.git <your-folder-name>
```
### 2. Create a Remote Repository

After cloning, create a new repository on your preferred Git hosting platform (e.g., GitHub, GitLab).

### 3. Set Execution Permission for the Setup Script

Navigate to your project folder and grant execution permission for the setup script:

```bash
cd <your-folder-name>
chmod +x setupservices.sh
```
### 4. Run the Setup Script

Execute the setup script to automate project initialization:

```bash
./setupservices.sh
```

This script will:

- Remove the existing `.git` folder
- Install project dependencies
- Initialize Git and Husky
- Install both server and client dependencies
- Set up necessary script permissions

### 5. Add Your Remote Repository

After creating your remote repository, link it to your local project:

```bash
git branch -M main
git remote add origin <your-remote-url>
```

Replace `<your-remote-url>` with the URL of your new repository.

### 6. Create Environment Files

Manually create the following environment files:

- `.env.development`
- `.env.production`

Copy the content from `.env.example` into both files.

### 7. Start Docker Client

Ensure that Docker is running on your machine.

### 8. Start the Server

Launch the project by running:

```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

### 9. Clean Up Docker Environment

To remove all Docker containers, images, volumes, and builds related to the project, execute the cleanup script:

```bash
docker-compose -f docker-compose.dev.yml down -v
```

**Note**: This will remove all Docker services and data associated with the project. Ensure that no other critical services are running in Docker before running this command.

## Check Your Setup

After completing the setup, verify everything is working:

- **Backend**: [http://localhost:5000/api/v1/health](http://localhost:5000/api/v1/health)
- **Frontend**: [http://localhost:5173](http://localhost:5173)

## Contributing

We welcome contributions to enhance this template! Please fork the repository and submit a pull request with your improvements.
>>>>>>> 37af40a (Initial commit for new repo)
