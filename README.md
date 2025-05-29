# FinSense AI - AI-Powered Personal Finance Advisor

An intelligent financial coach that leverages advanced AI to help users manage their money more effectively through automated expense tracking, personalized budgeting insights, and financial goal planning.

## 🏗️ Architecture

This project uses a microservices architecture:
- **Backend**: Java Spring Boot (REST API)
- **AI Service**: Python FastAPI (ML/AI processing)
- **Frontend**: React with TypeScript
- **Database**: Supabase (PostgreSQL with real-time features)
- **AI Models**: Hugging Face Transformers

## 📁 Project Structure

```
FinSense-AI/
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
├── ai-service/             # Python FastAPI microservice
│   ├── app/
│   ├── models/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/               # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── docker-compose.yml      # Local development setup
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Java 17+
- Maven 3.6+
- Node.js 18+
- Python 3.9+
- Docker (optional)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:rodriguezzfabricio/FinSense-AI-.git
   cd FinSense-AI-
   ```

2. **Backend Setup**
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

3. **AI Service Setup**
   ```bash
   cd ai-service
   pip install -r requirements.txt
   uvicorn app.main:app --reload --port 8001
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🎯 Features (Planned)

- [ ] Smart Receipt Scanner (OCR)
- [ ] Automatic Expense Categorization
- [ ] Personalized Spending Insights
- [ ] Financial Goal Planning
- [ ] Real-time Expense Tracking
- [ ] Budget Management
- [ ] Financial News Sentiment Analysis

## 🔧 Environment Variables

Create `.env` files in each service directory with the required configuration.

## 📝 Development Progress

- [x] Week 1: Project setup and basic architecture
- [ ] Week 2: Core expense tracking features
- [ ] Week 3: AI integrations and smart insights
- [ ] Week 4: Advanced features and deployment

## 🤝 Contributing

This is a portfolio project. See development progress in daily commits.

## 📄 License

MIT License 