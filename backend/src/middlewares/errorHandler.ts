import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export const errorHandler = (
    err: Error | AppError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    // Error operacional
    // Si es un error desconocido, asumimos 500
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || 'Error interno del servidor';

    // Log detallado para debugging (solo en desarrollo)
    if (process.env.NODE_ENV !== 'production') {
        console.error(' Error capturado:');
        console.error('Mensaje:', message);
        console.error('Stack trace:', err.stack);
        console.error('URL:', _req.originalUrl);
        console.error('Método:', _req.method);
        console.error('Body:', _req.body);
        console.error('Params:', _req.params);
        console.error('Query:', _req.query);
        console.error('---');
    }

    // Respuesta al cliente
    res.status(statusCode).json({
        success: false,
        error: {
            message,
            ...(process.env.NODE_ENV !== 'production' && {
                stack: err.stack,
                url: _req.originalUrl,
                method: _req.method,
            }),
        },
        timestamp: new Date().toISOString(),
    });
};