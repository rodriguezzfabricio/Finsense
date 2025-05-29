from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ExpenseCategorizationRequest(BaseModel):
    """Request model for expense categorization"""
    description: str
    amount: Optional[float] = None
    merchant: Optional[str] = None

class ExpenseCategorizationResponse(BaseModel):
    """Response model for expense categorization"""
    category: str
    confidence: float
    suggested_categories: List[str]

class OCRRequest(BaseModel):
    """Request model for OCR processing"""
    image_base64: str

class OCRResponse(BaseModel):
    """Response model for OCR processing"""
    extracted_text: str
    merchant: Optional[str] = None
    amount: Optional[float] = None
    date: Optional[datetime] = None
    items: List[str] = []

class HealthResponse(BaseModel):
    """Health check response model"""
    status: str
    service: str
    version: str 